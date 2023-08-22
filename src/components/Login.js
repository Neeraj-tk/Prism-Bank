import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../style/Login.css";
import AuthenticationService from '../service/AuthenticationService';


const Login = () => {
    const history = useNavigate();  // Object to navigate from one component to another

    // defining state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        const customer = {
            email,
            password
        };
        try {
            const loginSuccess = await AuthenticationService.login(customer);
            console.log('API response:', loginSuccess.data);
            if (loginSuccess) {
                console.log('Login Successful');
                setSuccessMessage('Login successful. Redirecting...');
                setTimeout(() => {
                    history("/");
                }, 2000);
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } catch (error) {
            console.error('Login error', error);
            setErrorMessage('An error occurred during login.');
        }
    };

    return (
        <div>
        <div className='login-container'>
           
            <br></br>
            <form >
                <div class="form-group">
                    <label >Email</label>
                    <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="form-control" name="email" placeholder="example@gmail.com" />
                </div>
                <div class="form-group ">
                    <label >Password</label>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control" name="password" />
                </div>
                <button type="button" onClick={handleLogin} class="btn btn-success btn-lg">Login</button>
            </form>
            <br></br>
            <a>Forgot password ?</a>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
        </div>
    );
};

export default Login;