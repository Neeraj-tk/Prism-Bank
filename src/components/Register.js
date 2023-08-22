
import "../style/Register.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const history=useNavigate();

    const[customer,setCustomer]=useState({
        salutation:"",
        firstName:"",
        middleName:"",
        lastName:"",
        fatherName:"",
        aadharNumber:"",
        dob:"",
        email:"",
        phoneNo:"",
        resAddress:{
            line1:"",
            line2:"",
            landmark:"",
            city:"",
            state:"",
            pincode:""
        },
        perAddress:{
            line1:"",
            line2:"",
            landmark:"",
            city:"",
            state:"",
            pincode:""
        }

        
    })
    return (
        <div>
            <br></br>
            <h1>Account Opening Form</h1>
            <div className="registration-container">
                <form className="form">
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="salutation">Salutation</label>
                            <select class="form-control" name="salutation">
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="fname">First Name</label>
                            <input type="text" class="form-control" name="firstName" placeholder="John" />
                        </div>
                        <div class="form-group col-md-2">
                            <label for="mname">Middle Name</label>
                            <input type="text" class="form-control" name="middleName" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="lname">Last Name</label>
                            <input type="text" class="form-control" name="lastName" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="faname">Father Name</label>
                            <input type="text" class="form-control" name="fatherName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="aadhar">Aadhar Number</label>
                            <input type="number" class="form-control" name="aadharNumber" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="dob">Date of Birth</label>
                            <input type="date" class="form-control" name="dob" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" name="email" placeholder="example@gmail.com" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="phone">Phone No.</label>
                            <input type="number" class="form-control" name="phoneNo" />
                        </div>
                    </div>
                    <h3>Residential Address</h3>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Address Line 1</label>
                            <input type="text" class="form-control" name="resAddress.line1" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress2">Address Line 2</label>
                            <input type="text" class="form-control" name="resAddress.line2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress3">Landmark</label>
                            <input type="text" class="form-control" name="resAddress.landmark" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" name="resAddress.city" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" name="resAddress.state" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="pin">Pincode</label>
                            <input type="text" class="form-control" name="resAddress.pincode" />
                        </div>
                    </div>
                    <h3>Permanent Address</h3>
                    <input type="checkbox" aria-label="Use same as permanent address" />
                    <label>&nbsp;Use same as current Address </label>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Address Line 1</label>
                            <input type="text" class="form-control" name="perAddress.line1" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress2">Address Line 2</label>
                            <input type="text" class="form-control" name="perAddress.line2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress3">Landmark</label>
                            <input type="text" class="form-control" name="perAddress.landmark" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" name="perAddress.city" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" name="perAddress.state" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="pin">Pincode</label>
                            <input type="text" class="form-control" name="perAddress.pincode" />
                        </div>
                    </div>
                    <br />
                    <button type="button" class="btn btn-success btn-lg">Register</button>
                </form>
            </div>
        </div>

    );
}

export default Register;