import React, { useState } from "react";
import "../style/Transaction.css";
import UserService from "../service/UserService";

const Transaction = () => {

    const [beneficiaryList, setBeneficiaryList] = useState([1234, 12567, 2463786, 8234]);
    const [beneficiary, setBeneficiary] = useState(0);
    const [mode, setMode] = useState('');
    const [amount, setAmount] = useState(0.0);
    const [transactionPassword, setTransactionPassword] = useState("");
    const [remarks, setRemarks] = useState("");

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    function handleSubmit() {
        const data = {
            fromAccount: { accountNo: 12423 },
            toAccount: { accountNo: beneficiary },
            amount, mode, remarks, transactionPassword
        };
        // UserService.makePayment(data);
        if(true){
            setSuccessMessage("Payment successfull !");
        }
        else{
            setErrorMessage("Some error occured during payment, please try again later");
        }
        setTimeout(()=>{
            history("/profile");
        },2000);
    }

    return (
        <div>
            <div className="transaction-container">
                <h1>Transfer Money</h1>
                <form className="form">
                    < div className="form-group">
                        <label>choose beneficiary</label>
                        <select className="form-control" value={beneficiary} onChange={(e) => setBeneficiary(e.target.value)} name="beneficiary">
                            {beneficiaryList.map(item =>
                                <option key={item}>{item}</option>
                            )}
                        </select>
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
                            type="text" class="form-control" name="amount" />
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