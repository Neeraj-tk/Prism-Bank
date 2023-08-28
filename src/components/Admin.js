import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminService from '../service/AdminService';
import AuthenticationService from '../service/AuthenticationService'; 


function Admin() {
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [inputAccountNo, setInputAccountNo] = useState('');
  const [customerDetails, setCustomerDetails] = useState(null);
  const [toAccount, setToAccount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const [transactionError, setTransactionError] = useState('');

  useEffect(() => {
    fetchRequests();
    setUser(AuthenticationService.getLoggedInUserName());
  }, []);

  const fetchRequests = () => {
    // Fetch account opening requests from the API
    AdminService.getCustomers().then(response => {
      setCustomers(response.data);
    });
  };

  const approveRequest = accountNo => {
    const account ={
      accountNo:Number(accountNo)
    }
    AdminService.approveRequest(account).then(response => {
      // Handle success or error here
      // For example, you could refresh the customer list after approving
      fetchRequests();
      setMessage('Request approved successfully : '+response.data); 
      setTimeout(() => {
        setMessage('');
      }, 2000);
    });
  };

  const deleteRequest = accountNo => {
    AdminService.deleteRequest(accountNo).then(() => {
       // setProducts(products.filter(product => product.id !== id));
       fetchRequests(); // Refresh products list
        setMessage('Account deleted successfully.'); 
         // Clear the message after 3 seconds
         setTimeout(() => {
            setMessage('');
        }, 2000);
    });
};

const viewCustomer = async accountNo => {
    try {
      const response = await AdminService.viewCustomer(Number(accountNo));
      console.log(response.data);
      setSelectedCustomer(response.data);
    } catch (error) {
        // Handle error
        console.error('Error fetching customer details:', error);
      }
    };

const fetchCustomerDetails = async accountNo => {
  try {
    const response = await AdminService.viewCustomer(accountNo);
    setCustomerDetails(response.data);
  } catch (error) {
    // Handle error
    console.error('Error fetching customer details:', error);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  fetchCustomerDetails(inputAccountNo);
};

    const closeViewModal = () => {
        setSelectedCustomer(null);
    };


    const handleTransactionSubmit = async event => {
        event.preventDefault();
    
        try {
          let response;
          if (transactionType === 'deposit') {
            response = await AdminService.depositCash(toAccount, transactionAmount);
          } else if (transactionType === 'withdrawal') {
            response = await AdminService.withdrawCash(fromAccount, transactionAmount);
          }

          if (response.data) {
            setTransactionStatus(`Transaction Successful and transaction id: ${response.data.transactionId}`);
            setTransactionError('');
          }
        } catch (error) {
          setTransactionStatus('');
          setTransactionError('Transaction failed. Please check account details and amount.');
        }
      };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="container">Welcome {user}</div>
      <br/>
      <h2 className="text-warning">Account Opening Requests</h2>
      <div className="row justify-content-center">
        <table className="table table-success w-auto">
          <thead>
            <tr className="table-danger">
              <th>Account No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Account type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.accountNo}>
                <td>{customer.accountNo}</td>
                <td>{customer.firstName} {customer.middleName} {customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.accountType}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => approveRequest(customer.accountNo)}
                  >
                    <FontAwesomeIcon icon="check"></FontAwesomeIcon> Approve
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRequest(customer.accountNo)}
                  >
                    <FontAwesomeIcon icon="trash"></FontAwesomeIcon> Delete
                  </button>
                  &nbsp;
                  <button className="btn btn-secondary" onClick={() => viewCustomer(customer.accountNo)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      {selectedCustomer && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeViewModal}>
              &times;
            </span>
            <h2 >View Customer Details </h2>
            <p>Account Number: {selectedCustomer.accountNo}</p>
            <p>Name: {selectedCustomer.salutation} {selectedCustomer.firstName} {selectedCustomer.middleName} {selectedCustomer.lastName}</p>
            <p>Email: {selectedCustomer.email}</p>
            <p>Father's Name: {selectedCustomer.fatherName}</p>
            <p>Aadhar Number: {selectedCustomer.aadharNumber}</p>
            <p>Date of Birth: {selectedCustomer.dob}</p>
            <p>Phone Number: {selectedCustomer.phoneNo}</p>
            <h3>Residential Address</h3>
            <p>Line 1: {selectedCustomer.resAddress.line1}</p>
            <p>Line 2: {selectedCustomer.resAddress.line2}</p>
            <p>Landmark: {selectedCustomer.resAddress.landmark}</p>
            <p>City: {selectedCustomer.resAddress.city}</p>
            <p>State: {selectedCustomer.resAddress.state}</p>
            <p>Pincode: {selectedCustomer.resAddress.pincode}</p>
            <h3>Permanent Address</h3>
            <p>Line 1: {selectedCustomer.perAddress.line1}</p>
            <p>Line 2: {selectedCustomer.perAddress.line2}</p>
            <p>Landmark: {selectedCustomer.perAddress.landmark}</p>
            <p>City: {selectedCustomer.perAddress.city}</p>
            <p>State: {selectedCustomer.perAddress.state}</p>
            <p>Pincode: {selectedCustomer.perAddress.pincode}</p>
            {/* Display other customer details */}
          </div>
        </div>
      )}

      {/* Customer Details Form */}
      <div className="customer-details-form"></div>
      <div>
        <h2 style={{ color: 'black' }}>View Customer Details</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ color: 'blue' }}>
            Account Number:
            <input type="text" value={inputAccountNo} onChange={event => setInputAccountNo(event.target.value)} />
          </label>
          <br/>
          <button type="submit">View Details</button>
        </form>
        {customerDetails && (
          <div>
            <h3>Customer Details</h3>
            <p>Account Number: {customerDetails.accountNo}</p>
            <p>Name: {customerDetails.salutation} {customerDetails.firstName} {customerDetails.middleName} {customerDetails.lastName}</p>
            <p>Email: {customerDetails.email}</p>
            <p>Father's Name: {customerDetails.fatherName}</p>
            <p>Aadhar Number: {customerDetails.aadharNumber}</p>
            <p>Date of Birth: {customerDetails.dob}</p>
            <p>Phone Number: {customerDetails.phoneNo}</p>
            <h3>Residential Address</h3>
            <p>Line 1: {customerDetails.resAddress.line1}</p>
            <p>Line 2: {customerDetails.resAddress.line2}</p>
            <p>Landmark: {customerDetails.resAddress.landmark}</p>
            <p>City: {customerDetails.resAddress.city}</p>
            <p>State: {customerDetails.resAddress.state}</p>
            <p>Pincode: {customerDetails.resAddress.pincode}</p>
            <h3>Permanent Address</h3>
            <p>Line 1: {customerDetails.perAddress.line1}</p>
            <p>Line 2: {customerDetails.perAddress.line2}</p>
            <p>Landmark: {customerDetails.perAddress.landmark}</p>
            <p>City: {customerDetails.perAddress.city}</p>
            <p>State: {customerDetails.perAddress.state}</p>
            <p>Pincode: {customerDetails.perAddress.pincode}</p>

            {/* Display other customer details */}
          </div>
        )}
      </div>
      <br/>

      <div>
        <h2 style={{ color: 'black' }}>Cash Deposit / Withdrawal</h2>
        <form onSubmit={handleTransactionSubmit}>
          <label style={{ color: 'blue' }}>
            Transaction Type :
            <select value={transactionType} onChange={event => setTransactionType(event.target.value)}>
              <option value="">Select Type</option>
              <option value="deposit">Cash Deposit</option>
              <option value="withdrawal">Cash Withdrawal</option>
            </select>
          </label>
          <br />
          {transactionType === 'deposit' ? (
            <label style={{ color: 'blue' }}>
              To Account:
              <input type="text" value={toAccount} onChange={event => setToAccount(event.target.value)} />
            </label>
          ) : (
            <label style={{ color: 'blue' }}>
              From Account:
              <input type="text" value={fromAccount} onChange={event => setFromAccount(event.target.value)} />
            </label>
          )}
          <br />
          <label style={{ color: 'blue' }}>
            Amount:
            <input type="text" value={transactionAmount} onChange={event => setTransactionAmount(event.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {transactionStatus && <div className="alert alert-success">{transactionStatus}</div>}
        {transactionError && <div className="alert alert-danger">{transactionError}</div>}
      </div>

      {message && <div className="alert alert-success">{message}</div>}
    </div>
  );
}

export default Admin;
