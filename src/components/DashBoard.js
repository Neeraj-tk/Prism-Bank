import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/DashBoard.css";
import UserService from "../service/UserService";

const DashBoard = (props) => {
    
    const history = useNavigate();
    if(!props.loggedIn){
        history("/login");
    }
    
    const [transactions,setTransactions]=useState([]);
    const[user,setUser]=useState({});
    const[balance,setBalance]=useState(0);
    const accountNumber=props.accountNo;

    useEffect(()=>{
        UserService.getUserData(accountNumber).then((res)=>{
            setUser(res);
        }).catch((error)=>{
            console.log(error);
        });

        UserService.getlast5Transaction(accountNumber).then((res)=>{
            setTransactions(res);
        }).catch((error)=>{
            console.log(error);
        });

        UserService.getBalance(accountNumber).then((res)=>{
            setBalance(res);
        }).catch((error)=>{
            console.log(error);
        });
    },[accountNumber]);

    return (
        <div>
            <div class="d-flex flex-row">
                <div class="p-3">
                    <div className="menu-container">
                        <ul >
                            <li >
                                <Link to="/" className="nav-item">Account Summary</Link>
                            </li>
                            <li>
                                <Link to="/viewBeneficiary" className="nav-item" >Manage Beneficiary</Link>
                            </li>
                            <li >
                                <Link to="/transfer" className="nav-item" >Transfer Money</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="p-3">
                    <div class="d-flex flex-row card">
                        <div class="p-2 data">
                            <div><span> <label>Account Number :&nbsp;</label>{accountNumber}</span></div>
                            <div><span> <label>Customer Name:&nbsp; </label>{user.firstName}&nbsp;{user.lastName}</span></div>
                            <div><span> <label>Email ID : &nbsp; </label>{user.email}</span></div>
                        </div>
                        <div class="p-2 data">
                            <div><span> <label>Phone Number: &nbsp; </label>{user.phoneNo}</span></div>
                            <div><span> <label>Account Type : &nbsp; </label>{user.accountType}</span></div>
                            <div><span> <label>Balance : &nbsp; </label>RS.{balance}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-success w-auto">
                <thead>
                    <tr className="table-danger">
                        <th>Transaction Id</th>
                        <th> Account number</th>
                        <th> Date</th>
                        <th> Type</th>
                        <th> Amount</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(
                        t =>
                            <tr key={t.transactionId}>
                                <td> {t.transactionId} </td>
                                <td> {t.senderAccount.accountNo} </td>
                                <td> {t.timestamp} </td>
                                <td> {t.mode} </td>
                                <td> {t.amount} </td>
                                <td>{t.remarks}</td>
                            </tr>
                    )}</tbody>
            </table>

        </div>

    );
};

export default DashBoard;

