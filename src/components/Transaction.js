import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import "../style/Transaction.css";
import UserService from "../service/UserService";

const Transaction = ({accountNo,loggedIn}) => {

    const history = useNavigate();
    const [beneficiaryList, setBeneficiaryList] = useState([]);
    const [beneficiary, setBeneficiary] = useState(0);
    const [mode, setMode] = useState('');
    const [amount, setAmount] = useState(0.0);
    const [transactionPassword, setTransactionPassword] = useState("");
    const [remarks, setRemarks] = useState("");

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(()=>{
        UserService.getBeneficiary(accountNo).then((res)=>{
            setBeneficiaryList(res);
        }).catch((error)=>{
            console.log(error);
        });
    },[accountNo]);

    function handleBeneficary(e){
        setBeneficiary(e.target.value);
    }

    function handleSubmit() {
        const data = {
            fromAccount:accountNo ,
            toAccount: Number(beneficiary) ,
            amount, mode, remark:remarks, transactionPassword
        };
        UserService.makePayment(data).then((res)=>{
            setSuccessMessage(res.data);
        }).catch((error)=>{
            
            setErrorMessage("An error occured during transaction "+error.response.data );
        })
        setTimeout(()=>{
            history("/profile");
        },5000);
    }

    return (
        <div>
            <div className="transaction-container">
                <h1>Transfer Money</h1>
                <form className="form">
                    < div className="form-group">
                        <label>choose beneficiary</label>
                        <select className="form-control" value={beneficiary} onChange={handleBeneficary} name="beneficiary">
                            {beneficiaryList.map(item =>
                                <option key={item.bid} >{item.accountNo}</option>
                            )}
                        </select>
                    </div>
                    <div class="form-group">
                        <label >Acount Number</label>
                        <input value={beneficiary}
                            onChange={handleBeneficary}
                            type="text" class="form-control" name="beneficiary" />
                    </div>
                    < div className="form-group">
                        <label>choose mode of payment</label>
                        <select className="form-control" value={mode} onChange={(e) => setMode(e.target.value)} name="mode">
                            <option>IMPS</option>
                            <option>RTGS</option>
                            <option>NEFT</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label >Amount</label>
                        <input value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            type="text" class="form-control" name="amount" />
                    </div>
                    <div class="form-group">
                        <label >Transaction Password</label>
                        <input value={transactionPassword}
                            onChange={(e) => setTransactionPassword(e.target.value)}
                            type="text" class="form-control" name="transactionPassword" />
                    </div>
                    <div class="form-group ">
                        <label >Remarks</label>
                        <input value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            type="text" class="form-control" name="remarks" />
                    </div>
                    <button type="button" onClick={handleSubmit} class="btn btn-success btn-lg">PAY</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Transaction;