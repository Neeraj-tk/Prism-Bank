import React,{useState} from "react";
import '../style/RegisterForInternetBanking.css';

import axios from 'axios';

// useState() is a ReactHook used in Functional Component to manage State

const RegisterForInternetBanking =() => {
    // variable, method which should be called when we update the state

    const[accountNumber, setAccountNumber] = useState('');
    const[setLoginPassword, setSetLoginPassword] = useState('');
    const[confirmLoginPassword, setConfirmLoginPassword] = useState('');
    const[setTransactionPassword, setSetTransactionPassword] = useState('');
    const[confirmTransactionPassword, setConfirmTransactionPassword] = useState('');
   // const[enterOTP, setEnterOTP] = useState('');

    const[errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {

    //  preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
        e.preventDefault();

        if (!validateForm()) {
            return;
          }
      
          const registrationData = {
            accountNumber,
            setLoginPassword,
            confirmLoginPassword,
            setTransactionPassword,
            confirmTransactionPassword,
            //enterOTP
          };
      
          try {
            const response = await 
            axios.post('http://localhost:8088/prismbank/ib/register', registrationData);
            console.log(response.data); // Registration success message
            alert("Registered Successfully");
          } catch (error) {
            console.error('Registration failed', error);
          }
        };
      
        const validateForm = () => {
          if (!accountNumber || !setLoginPassword || !confirmLoginPassword || !setTransactionPassword || !confirmTransactionPassword ) {
            setErrorMessage('All fields are required.');
            return false;
          }
      
          setErrorMessage('');
          return true;
    }

        return(
        <div className="registration-container">
            <h2>Register for Internet Banking</h2>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label>Account Number:</label>
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Set Login Password:</label>
                <input type="password" value={setLoginPassword} onChange={(e) => setSetLoginPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Confirm Login Password:</label>
                <input type="password" value={confirmLoginPassword} onChange={(e) => setConfirmLoginPassword(e.target.value)} required />
                {setLoginPassword !== confirmLoginPassword && <p>Passwords do not match.</p>}
              </div>
              <div className="form-group">
                <label>Set Transaction Password:</label>
                <input type="password" value={setTransactionPassword} onChange={(e) => setSetTransactionPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Confirm Transaction Password:</label>
                <input type="password" value={confirmTransactionPassword} onChange={(e) => setConfirmTransactionPassword(e.target.value)} required />
                {setTransactionPassword !== confirmTransactionPassword && <p>Passwords do not match.</p>}
              </div>
              
              
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="form-group">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        );
    
}

export default RegisterForInternetBanking;