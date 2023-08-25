import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrashAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

function ManageBeneficiary() {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    async function fetchBeneficiaries() {
      try {
        const response = await axios.get('/api/beneficiaries');
        setBeneficiaries(response.data);
      } catch (error) {
        console.error('Error fetching beneficiaries:', error);
      }
    }

    fetchBeneficiaries();
  }, []);

  const handleDelete = (id) => {
    // Implement your delete logic here
  };

  const handleEdit = (id) => {
    // Implement your edit logic here
  };

  const handleView = (id) => {
    // Implement your view logic here
  };

  const handlePay = (id) => {
    // Implement your payment logic here
  };

  return (
    <div>
      <h2>Manage Beneficiaries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Account Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary) => (
            <tr key={beneficiary.id}>
              <td>{beneficiary.name}</td>
              <td>{beneficiary.accountNumber}</td>
              <td>
                
              <button className="pay-button" onClick={() => handlePay(beneficiary.id)}>
                  <FontAwesomeIcon icon={faMoneyBill} /> Pay
                </button>
                <button className="view-button" onClick={() => handleView(beneficiary.id)}>
                  <FontAwesomeIcon icon={faEye} /> View
                </button>
                <button className="edit-button" onClick={() => handleEdit(beneficiary.id)}>
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button className="delete-button" onClick={() => handleDelete(beneficiary.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
                  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBeneficiary;