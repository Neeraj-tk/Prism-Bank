import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/Login.css"; // Make sure to import your CSS for styling
import AuthenticationService from '../service/AuthenticationService';

const AdminLogin = (props) => {
    const history = useNavigate();

    if (props.loggedIn) {
        history("/admin"); // Redirect to admin dashboard if already logged in
    }

    // Define state
    const [userid, setuserId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        
        if (!userid || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        const admin = {
            userid,
            password
        };
        try {
            // Use AuthenticationService for admin login
            const isAdminLoggedIn = await AuthenticationService.adminLogin(admin);
            if (isAdminLoggedIn) {
                console.log('Admin Login Successful');
                setSuccessMessage('Admin login successful. Redirecting...');
                sessionStorage.setItem('adminToken', 'yes');
                props.setLoggedIn(true);
                setTimeout(() => {
                    history("/admin"); // Redirect to admin dashboard
                }, 2000);
            } else {
                setErrorMessage('Invalid user id or password.');
            }
        } catch (error) {
            console.error('Admin Login error', error);
            setErrorMessage('An error occurred during admin login.');
        }
    };

    useEffect(() => {
        if (successMessage) {
            setTimeout(() => {
                history("/admin"); // Redirect to admin dashboard
            }, 2000);
        }
    }, [successMessage]);

    return (
        <div className='login-container'>
            <br />
            <form>
                <div className="form-group">
                    <label>User ID</label>
                    <input
                        type="text"
                        value={userid}
                        onChange={(e) => setuserId(e.target.value)}
                        className="form-control"
                        name="userid"
                       
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        name="password"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleLogin}
                    className="btn btn-success btn-lg"
                >
                    Login
                </button>
            </form>
            <br />

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default AdminLogin;
