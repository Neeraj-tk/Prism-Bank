import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

<<<<<<< HEAD
const NavBar=()=>{
    const [loginState,setLoginState]=useState(false);
    useEffect(()=>{
        const token=sessionStorage.getItem("token");
        if(token){
            setLoginState(true);
        }
    },[]);
=======
const NavBar=(props)=>{
   
>>>>>>> 09ba1fee676bc7be6216bfbaf050b99f02b9dd2a
    const Logout=()=>{
        sessionStorage.removeItem('token');
        props.setLoggedIn(false);
    };
    return(
        <nav className="navbar">
           <a class="navbar-brand" href="#">
           <img src="images/logo.jpg"   width="60" height="50" class=" d-inline-block " />
          &nbsp; Prism Bank
           </a>
            <ul className="nav-list">
            {!props.loggedIn && <li >
                    <Link to="/" className="nav-item">Home</Link>
                </li>}

                {props.loggedIn && <li >
                    <Link to="/profile" className="nav-item">Profile</Link>
                </li>}
               
                {!props.loggedIn && <li >
                    <Link to="/login" className="nav-item" >Login</Link>
                </li> }
                { props.loggedIn && <li onClick={Logout} className="nav-item">Logout</li>}
                {!props.loggedIn && <li >
                    <Link to="/netbanking" className="nav-item" >Internet Banking</Link>
                </li>}
                {!props.loggedIn && <li >
                    <Link to="/register" className="nav-item">Register</Link>
                </li>}
            </ul>
        </nav>
    )
}
export default NavBar;