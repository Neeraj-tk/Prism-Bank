import React,{useState} from "react";
import '../style/RegisterForInternetBanking.css';

import axios from 'axios';

// useState() is a ReactHook used in Functional Component to manage State

const RegisterForInternetBanking =() => {
    // variable, method which should be called when we update the state

    const[accountNumber, setAccountNumber] = useState('');
    const[Password, setPassword] = useState('');
    const[Password1, setPassword1] = useState('');
    
    const[TransactionPassword, setTransactionPassword] = useState('');
    const[TransactionPassword1, setTransactionPassword1] = useState('');
    
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
            Password,
            TransactionPassword
            
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
          if (!accountNumber || !Password || !Password1 || !TransactionPassword || !TransactionPassword1 ) {
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
                <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Confirm Login Password:</label>
                <input type="password" value={Password1} onChange={(e) => setPassword1(e.target.value)} required />
                {Password !== Password1 && <p>Passwords do not match.</p>}
              </div>
              <div className="form-group">
                <label>Set Transaction Password:</label>
                <input type="password" value={TransactionPassword} onChange={(e) => setTransactionPassword(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Confirm Transaction Password:</label>
                <input type="password" value={TransactionPassword1} onChange={(e) => setTransactionPassword1(e.target.value)} required />
                {TransactionPassword !== TransactionPassword1 && <p>Passwords do not match.</p>}
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