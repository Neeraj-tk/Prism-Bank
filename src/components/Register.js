import React from "react";
import "../style/Register.css";

const Register = () => {
    return (
        <div>
            <div className="content">
                <form className="form">
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="salutation">Salutation</label>
                            <select class="form-control" id="salutation">
                                <option>Mr</option>
                                <option>Mrs</option>
                                <option>Ms</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="fname">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="John" />
                        </div>
                        <div class="form-group col-md-2">
                            <label for="mname">Middle Name</label>
                            <input type="text" class="form-control" id="mname" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="lname">Last Name</label>
                            <input type="text" class="form-control" id="lname" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="faname">Father Name</label>
                            <input type="text" class="form-control" id="faname" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="aadhar">Aadhar Number</label>
                            <input type="number" class="form-control" id="aadhar" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-2">
                            <label for="dob">Date of Birth</label>
                            <input type="date" class="form-control" id="dob" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="example@gmail.com" />
                        </div>
                        <div class="form-group col-md-5">
                            <label for="phone">Phone No.</label>
                            <input type="number" class="form-control" id="phone" />
                        </div>
                    </div>
                    <h3>Current Address</h3>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Address Line 1</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress2">Address Line 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress3">Landmark</label>
                            <input type="text" class="form-control" id="inputAddress3" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" id="inputState" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="pin">Pincode</label>
                            <input type="text" class="form-control" id="pin" />
                        </div>
                    </div>
                    <h3>Permanent Address</h3>
                    <label>Use same as current Address</label>
                    <input type="checkbox" aria-label="Use same as permanent address" />
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputAddress">Address Line 1</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress2">Address Line 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputAddress3">Landmark</label>
                            <input type="text" class="form-control" id="inputAddress3" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <input type="text" id="inputState" class="form-control" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="pin">Pincode</label>
                            <input type="text" class="form-control" id="pin" />
                        </div>
                    </div>
                    <input type="checkbox" aria-label="Use same as permanent address" />
                    <br />
                    <button type="button" class="btn btn-success btn-lg">Register</button>
                </form>
            </div>
        </div>

    );
}

export default Register;