import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar=()=>{
    return(
        <nav className="navbar">
            <ul className="nav-list">
                <li >
                    <Link to="/" className="nav-item">Home</Link>
                </li>
                <li >
                    <Link to="/register" className="nav-item">Register</Link>
                </li>
                <li >
                    <Link to="/login" className="nav-item" >Login</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;