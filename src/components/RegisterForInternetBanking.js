import React,{useState} from "react";
//require('../style/RegisterForInternetBanking.css');
import '../style/RegisterForInternetBanking.css';
import AuthenticationService from "../service/AuthenticationService";


// useState() is a ReactHook used in Functional Component to manage State

const RegisterForInternetBanking =() => {
    // variable, method which should be called when we update the state

    const[accountNumber, setAccountNumber] = useState('');
    const[password, setPassword] = useState('');
    const[password1, setPassword1] = useState('');
    
    const[transactionPassword, setTransactionPassword] = useState('');
    const[transactionPassword1, setTransactionPassword1] = useState('');
    
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
            password,
            transactionPassword
            
          };
      
          try {
  
            await AuthenticationService.registerForInternetBanking(registrationData);
            //console.log(response.data); // Registration success message
            alert("Registered Successfully");
            setTimeout(() => {
              //history('/login'); // navigates to Login Component
          }, 3000);
          } catch (error) {
            console.error('Registration failed', error);
          }
        };
      
        const validateForm = () => {
          if (!accountNumber || !password || !password1 || !transactionPassword || !transactionPassword1 ) {
            setErrorMessage('All fields are required.');
            return false;
          }
      
          setErrorMessage('');
          return true;
    }

        return(
        <div className="ib-container">
            <h2>Register for Internet Banking</h2>
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group-ib">
                <label>Account Number:</label>
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
              </div>
              <div className="form-group-ib">
                <label>Set Login Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="form-group-ib">
                <label>Confirm Login Password:</label>
                <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} required />
                {password !== password1 && <p>Passwords do not match.</p>}
              </div>
              <div className="form-group-ib">
                <label>Set Transaction Password:</label>
                <input type="password" value={transactionPassword} onChange={(e) => setTransactionPassword(e.target.value)} required />
              </div>
              <div className="form-group-ib">
                <label>Confirm Transaction Password:</label>
                <input type="password" value={transactionPassword1} onChange={(e) => setTransactionPassword1(e.target.value)} required />
                {transactionPassword !== transactionPassword1 && <p>Passwords do not match.</p>}
              </div>
              
              
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <div className="form-group-ib">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        );
    
}

export default RegisterForInternetBanking;