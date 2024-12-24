import React from "react";
import "../assets/styling/logo.css"
import Logo1 from "../assets/Images/Logo1.svg"
import Logo2 from "../assets/Images/Logo2.svg"
import Logo3 from "../assets/Images/Logo3.svg"
import Logo4 from "../assets/Images/Logo4.svg"
import Logo5 from "../assets/Images/Logo5.svg"

const Logo = ()=>
{
    return(
        <>
        <div className="logo-container">
            <div className="logo-text">
                <p className="logo-heading">We are</p>
                <p className="logo-subtext">Featured in</p>
            </div>
            <div className="logo-image">
                <img src={Logo1} alt="" className="logo1-style"/>
                <img src={Logo2} alt="" className="logo2-style"/>
                <img src={Logo3} alt="" className="logo3-style"/>
                <img src={Logo4} alt="" className="logo4-style"/>
                <img src={Logo5} alt="" className="logo5-style"/>
            </div>
        </div>
        </>
    )
}
export default Logo