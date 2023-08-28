import React, { useState } from 'react';
import UserService from '../service/UserService';

function AddBeneficiary({accountNo,loggedIn}) {

  const [beneficiary, setBeneficiary] = useState({
    beneficiaryName: '',
    accountNo: '',
    relation: '',
    nickname: ''
  });

  const [errors, setErrors] = useState({
    beneficiaryName: '',
    accountNo: '',
    relation: '',
    nickName: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeneficiary((prevBeneficiary) => ({
      ...prevBeneficiary,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '' // Clear error when user starts typing
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(beneficiary);
    if (Object.keys(newErrors).length === 0) {
      console.log('Submitting...');
      // Perform actual submission or API calls here
      console.log('New Beneficiary:', beneficiary);
      UserService.addBeneficiary(accountNo,beneficiary).then((res)=>{
        setSuccessMessage("Beneficiary added successfully !");
      }).catch((error)=>{
        setErrorMessage("Error occured "+error.response.data);
      });
      setBeneficiary({
        beneficiaryName: '',
        accountNo: '',
        relation: '',
        nickName: ''
      });
      
    } else {
      setErrorMessage('Could not add beneficiary :');
      setErrors(newErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.beneficiaryName) {
      errors.beneficiaryName = 'Beneficiary Name is required.';
    }
    if (!formData.accountNo) {
      errors.accountNumber = 'Account Number is required.';
    }
    return errors;
  };

  return (
    <div>
        <div className="transaction-container">
      <h2>Add Beneficiary</h2>
      <form >
        <div>
          <label>Beneficiary Name</label>
          <input
            type="text"
            name="beneficiaryName"
            value={beneficiary.beneficiaryName}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.beneficiaryName}</span>
        </div>
        <div>
          <label>Account Number</label>
          <input
            type="number"
            name="accountNo"
            value={beneficiary.accountNo}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.accountNo}</span>
        </div>
        <div>
          <label>Relation</label>
          <input
            type="text"
            name="relation"
            value={beneficiary.relation}
            onChange={handleChange}
          />
          {/* No error span for optional field */}
        </div>
        <div>
          <label>Nickname</label>
          <input
            type="text"
            name="nickName"
            value={beneficiary.nickName}
            onChange={handleChange}
            r
          />
          {/* No error span for optional field */}
        </div>
        <br></br>
        <button type="button" onClick={handleSubmit} class="btn btn-success btn-lg">Add </button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
      </div>
    </div>
  );
}

export default AddBeneficiary;