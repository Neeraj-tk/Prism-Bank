import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminService from '../service/AdminService';
import AuthenticationService from '../service/AuthenticationService'; 

function Admin() {
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

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

  const approveRequest = accountNumber => {
    AdminService.approveRequest(accountNumber).then(response => {
      // Handle success or error here
      // For example, you could refresh the customer list after approving
      fetchRequests();
      setMessage('Request approved successfully.'); 
      setTimeout(() => {
        setMessage('');
      }, 2000);
    });
  };

  const deleteRequest = accountNumber => {
    AdminService.deleteRequest(accountNumber).then(() => {
       // setProducts(products.filter(product => product.id !== id));
       fetchRequests(); // Refresh products list
        setMessage('Account deleted successfully.'); 
         // Clear the message after 3 seconds
         setTimeout(() => {
            setMessage('');
        }, 2000);
    });
};

const viewCustomer = async accountNumber => {
    try {
      const response = await AdminService.viewCustomer(accountNumber);
      setSelectedCustomer(response.data);
    } catch (error) {
        // Handle error
        console.error('Error fetching customer details:', error);
      }
    };

    const closeViewModal = () => {
        setSelectedCustomer(null);
    };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="container">Welcome {user}</div>
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
              <tr key={customer.id}>
                <td>{customer.accountNumber}</td>
                <td>{customer.firstName} {customer.middleName} {customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.accountType}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => approveRequest(customer.id)}
                  >
                    <FontAwesomeIcon icon="check"></FontAwesomeIcon> Approve
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteRequest(customer.id)}
                  >
                    <FontAwesomeIcon icon="trash"></FontAwesomeIcon> Delete
                  </button>
                  &nbsp;
                  <button className="btn btn-secondary" onClick={() => viewCustomer(customer.accountNumber)}>
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
            <h2>View Customer Details</h2>
            <p>Account Number: {selectedCustomer.accountNumber}</p>
            <p>Name: {selectedCustomer.firstName} {selectedCustomer.middleName} {selectedCustomer.lastName}</p>
            <p>Email: {selectedCustomer.email}</p>
            {/* Display other customer details */}
          </div>
        </div>
      )}
      {message && <div className="alert alert-success">{message}</div>}
    </div>
  );
}

export default Admin;
