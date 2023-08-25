import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar=()=>{
    const [loginState,setLoginState]=useState(false);
    useEffect(()=>{
        const token=sessionStorage.getItem("token");
        if(token){
            setLoginState(true);
        }
    },[]);
    const Logout=()=>{
        sessionStorage.removeItem('token');
    };
    return(
        <nav className="navbar">
           <a class="navbar-brand" href="#">
           <img src="images/logo.jpg"   width="60" height="50" class=" d-inline-block " />
          &nbsp; Prism Bank
           </a>
            <ul className="nav-list">
                <li >
                    <Link to="/" className="nav-item">Home</Link>
                </li>
               
                {!loginState && <li >
                    <Link to="/login" className="nav-item" >Login</Link>
                </li> }
                { loginState && <li onClick={Logout} className="nav-item">Logout</li>}
                <li >
                    <Link to="/netbanking" className="nav-item" >Internet Banking</Link>
                </li>
                <li >
                    <Link to="/register" className="nav-item">Register</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;