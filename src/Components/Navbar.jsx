import React from "react";
import "../assets/styling/navbar.css"
import Logo from "../assets/Images/Logo.svg"
import { Link } from "react-router-dom";


const Navbar = ()=>
{ 
   
    return(
        <>
        <div className="navbar">
            
            <div className="inner-navbar">
                <div className="logo">
                    <img src={Logo} alt="" className="navbar-logo"/>
                </div>
                <div className="navbar-home">
       
                    <li className="navbar-content"><a href="/">Home</a></li>
                    <li className="navbar-content"><a href="/blog">Blog</a></li>
                    <li className="navbar-content"><a href="/aboutus">About Us</a></li>
                    <li className="navbar-content"><a href="#"></a>Contact Us</li>
                    <button className="navbar-button">Subscribe</button>
                </div>
                
            </div>

        </div>
        </>
    )
}
export default Navbar;