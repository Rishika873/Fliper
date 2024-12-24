import React from "react";
import "../assets/styling/aboutus.css"
import YellowImage from "../assets/Images/yellow shape.svg"
import PurpleImage from "../assets/Images/purple shape.svg"

const AboutUs = ()=>
{
    return(
        <>
         <div className="about-us">
            <div className="lines">
                <div className="shape-yellow">
                <img src={YellowImage} alt="" />
                </div>
                <div className="shape-purple">
                <img src={PurpleImage} alt="" />
                </div>
            </div>
            <div className="content-part">
                <div className="content-inner-frame">
                    <div className="about-us-frame">
                        <p className="about-us-heading">ABOUT US</p>
                        <p className="about-us-content">We are a community of Content writers who share their learnings.</p>
                        <p className="about-us-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quia velit tempore atque sequi! Labore.</p>
                        <p className="about-us-read-more">Read More></p>
                    </div>
                </div>
                <div className="our-mission">
                    <p className="our-mission-heading">OUR MISSION</p>
                    <p className="our-mission-content">Creating Valuable content for creatives 
                    all around the world</p>
                    <p className="our-mission-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur qui ducimus cum saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, impedit.</p>
                </div>
            </div>
         </div>
        </>
    )
}
export default AboutUs;