import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrashAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import UserService from '../service/UserService';
import "../style/Beneficiary.css"
import { useNavigate } from 'react-router-dom';

function ViewBeneficiary({accountNo,loggedIn}) {

  const history=useNavigate();

  if(!loggedIn){
    history("/login");
  }
  const [beneficiaries, setBeneficiaries] = useState([]);
  const[flag,setFlag]=useState(0);

  useEffect(() => {
    UserService.getBeneficiary(accountNo).then((res)=>{
        setBeneficiaries(res);
    }).catch((error)=>{
        console.log(error);
    });
  }
    ,[accountNo,flag]);

  const handleDelete = (id) => {
    UserService.deleteBeneficiary(id).then((res)=>{
        setFlag(flag+1);
    }).catch((error)=>{
        console.log(error);
    })
  };

  const handleEdit = (id) => {
    history('/profile/updateBeneficiary/'+id);
  };

  return (
    <div>
        <div className='beneficiary-container'>
      <h2>Manage Beneficiaries</h2>
      <table className="table table-success ">
        <thead>
          <tr className="table-danger">
            <th>Name</th>
            <th>Account Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map((beneficiary) => (
            <tr key={beneficiary.bid}>
              <td>{beneficiary.beneficiaryName}</td>
              <td>{beneficiary.accountNo}</td>
              <td>
                <button className="btn" onClick={() => handleEdit(beneficiary.bid)}>
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button className="btn" onClick={() => handleDelete(beneficiary.bid)}>
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>    
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ViewBeneficiary;