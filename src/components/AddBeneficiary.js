import React, { useState } from 'react';

function AddBeneficiary() {
  const [beneficiary, setBeneficiary] = useState({
    beneficiaryName: '',
    accountNumber: '',
    relation: '',
    nickname: ''
  });

  const [errors, setErrors] = useState({
    beneficiaryName: '',
    accountNumber: '',
    relation: '',
    nickname: ''
  });

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
      setBeneficiary({
        beneficiaryName: '',
        accountNumber: '',
        relation: '',
        nickname: ''
      });
      alert('Beneficiary added successfully!');
    } else {
      console.log('Could not add beneficiary :', newErrors);
      setErrors(newErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.beneficiaryName) {
      errors.beneficiaryName = 'Beneficiary Name is required.';
    }
    if (!formData.accountNumber) {
      errors.accountNumber = 'Account Number is required.';
    }
    
    return errors;
  };

  return (
    <div>
      <h2>Add Beneficiary</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Beneficiary Name:</label>
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
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={beneficiary.accountNumber}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.accountNumber}</span>
        </div>
        <div>
          <label>Relation:</label>
          <input
            type="text"
            name="relation"
            value={beneficiary.relation}
            onChange={handleChange}
            required
          />
          {/* No error span for optional field */}
        </div>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={beneficiary.nickname}
            onChange={handleChange}
            required
          />
          {/* No error span for optional field */}
        </div>
        <button type="submit">Add Beneficiary</button>
      </form>
    </div>
  );
}

export default AddBeneficiary;