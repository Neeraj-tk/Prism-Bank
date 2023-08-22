import "../style/Register.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from "../service/AuthenticationService";

const Register = () => {
    const history = useNavigate();

    const [customer, setCustomer] = useState({
        salutation: "",
        firstName: "",
        middleName: "",
        lastName: "",
        fatherName: "",
        aadharNumber: "",
        dob: "",
        email: "",
        phoneNo: "",
        resAddress: {
            line1: "",
            line2: "",
            landmark: "",
            city: "",
            state: "",
            pincode: ""
        },
        perAddress: {
            line1: "",
            line2: "",
            landmark: "",
            city: "",
            state: "",
            pincode: ""
        }
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [checked,setChecked]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            try {
                await AuthenticationService.registerDealer(customer);
                setSuccessMessage('Registration successful!');
                alert("Registration Successfull");
                setTimeout(() => {
                    history('/login'); // navigates to Login Component
                }, 3000);

            }

            catch (error) {
                console.error('Registration error', error);
                setSuccessMessage('An error occurred during registration.');
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setCustomer((prevCustomer) => ({
                ...prevCustomer,
                [parent]: {
                    ...prevCustomer[parent],
                    [child]: value
                }
            }));
        } else {
            setCustomer((prevCustomer) => ({
                ...prevCustomer,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        let validationErrors = {};

        if (!customer.email) {
            validationErrors.email = 'Email is required.';
        }
        if (!customer.firstName) {
            validationErrors.fname = 'First name is required.';
        }
        else if (!/^[a-zA-Z]*$/.test(customer.firstName)) {
            validationErrors.fname = 'Enter Alphabets Only';
        }

        if (!customer.lastName) {
            validationErrors.lname = 'Last name is required.';
        }

        if (!customer.dob) {
            validationErrors.dob = 'Date of Birth is required.';
        }

        if (!customer.phoneNo) {
            validationErrors.phoneNo = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(customer.phoneNo)) {
            validationErrors.phoneNo = 'Invalid phone number. Please enter a 10-digit number.';
        }

        if (!customer.resaddress.street) {
            validationErrors['address.street'] = 'Street is required.';
        }

        if (!customer.resaddress.city) {
            validationErrors['address.city'] = 'City is required.';
        }

        if (!customer.resaddress.pincode) {
            validationErrors['address.pincode'] = 'Pin Code is required.';
        }
        if (!customer.peraddress.street) {
            validationErrors['address.street'] = 'Street is required.';
        }

        if (!customer.peraddress.city) {
            validationErrors['address.city'] = 'City is required.';
        }

        if (!customer.peraddress.pincode) {
            validationErrors['address.pincode'] = 'Pin Code is required.';
        }

        return validationErrors;
    };

    return (
        <div>
            <br></br>
            <h1>Account Opening Form</h1>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <div className="registration-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="salutation">Salutation</label>
                            <select class="form-control" name="salutation" value={customer.salutation}
                                onChange={handleChange}
                                className={errors.salutation && 'error'}>
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="fname">First Name</label>
                            <input type="text" value={customer.firstName}
                                onChange={handleChange}
                                className={errors.firstName && 'error'} class="form-control" name="firstName" placeholder="John" />
                        </div>
                        <div class="form-group col-md-2">
                            <label for="mname">Middle Name</label>
                            <input value={customer.middleName}
                                onChange={handleChange}
                                className={errors.middleName && 'error'} type="text" class="form-control" name="middleName" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="lname">Last Name</label>
                            <input type="text" value={customer.lastName}
                                onChange={handleChange}
                                className={errors.lastName && 'error'}class="form-control" name="lastName" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="faname">Father Name</label>
                            <input type="text" onChange={handleChange} value={customer.fatherName} className={errors.fatherName &&'error'} class="form-control" name="fatherName" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="aadhar">Aadhar Number</label>
                            <input type="number" class="form-control" onChange={handleChange} value ={customer.aadharNumber} className={errors.aadharNumber && 'error'} name="aadharNumber" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="dob">Date of Birth</label>
                            <input value={customer.dob}
                                onChange={handleChange}
                                className={errors.dob && 'error'} type="date" class="form-control" name="dob" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Email</label>
                            <input type="email" value={customer.email}
                                onChange={handleChange}
                                className={errors.email && 'error'} class="form-control" name="email" placeholder="example@gmail.com" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="phone">Phone No.</label>
                            <input type="number" value={customer.phoneNo}
                                onChange={handleChange}
                                className={errors.phoneNo && 'error'}class="form-control" name="phoneNo" />
                        </div>
                    </div>
                    <h3>Residential Address</h3>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Address Line 1</label>
                            <input type="text" value={customer.resAddress.line1}
                                onChange={handleChange}
                                className={errors.resAddress.line1 && 'error'} class="form-control" name="resAddress.line1" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress2">Address Line 2</label>
                            <input type="text" class="form-control" value={customer.resAddress.line2}
                                onChange={handleChange}
                                className={errors.resAddress.line2 && 'error'} name="resAddress.line2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress3">Landmark</label>
                            <input type="text" value={customer.resAddress.landmark}
                                onChange={handleChange}
                                className={errors.resAddress.landmark && 'error'} class="form-control" name="resAddress.landmark" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text"  value={customer.resAddress.city}
                                onChange={handleChange}
                                className={errors.resAddress.city && 'error'}class="form-control" name="resAddress.city" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" value={customer.resAddress.state}
                                onChange={handleChange}
                                className={errors.resAddress.state && 'error'} name="resAddress.state" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="pin">Pincode</label>
                            <input type="text" value={customer.resAddress.pincode}
                                onChange={handleChange}
                                className={errors.resAddress.pincode && 'error'} class="form-control" name="resAddress.pincode" />
                        </div>
                    </div>
                    <h3>Permanent Address</h3>
                    <input type="checkbox" aria-label="Use same as permanent address" />
                    <label>&nbsp;Use same as current Address </label>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Address Line 1</label>
                            <input type="text" value={customer.perAddress.line1}
                                onChange={handleChange}
                                className={errors.perAddress.line1 && 'error'} class="form-control" name="perAddress.line1" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress2">Address Line 2</label>
                            <input type="text" value={customer.perAddress.line2}
                                onChange={handleChange}
                                className={errors.perAddress.line2 && 'error'} class="form-control" name="perAddress.line2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress3">Landmark</label>
                            <input type="text" value={customer.perAddress.landmark}
                                onChange={handleChange}
                                className={errors.perAddress.landmark && 'error'} class="form-control" name="perAddress.landmark" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text"  value={customer.perAddress.city}
                                onChange={handleChange}
                                className={errors.perAddress.city && 'error'} class="form-control" name="perAddress.city" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text"  value={customer.perAddress.state}
                                onChange={handleChange}
                                className={errors.perAddress.state && 'error'} name="perAddress.state" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="pin">Pincode</label>
                            <input type="text" value={customer.perAddress.pincode}
                                onChange={handleChange}
                                className={errors.perAddress.pincode && 'error'} class="form-control" name="perAddress.pincode" />
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