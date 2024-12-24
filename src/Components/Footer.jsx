import React from "react";
import "../assets/styling/footer.css"
import FooterLogo from "../assets/Images/Logo.svg"
import FooterFB from "../assets/Images/Facebook.svg"
import FooterInsta from "../assets/Images/Insta.svg"
import FooterLinkedin from "../assets/Images/Linkedin.svg"
import FooterTwitter from "../assets/Images/Twitter.svg"

const Footer = () => 
{
    return(
        <>
        <div className="footer-container">
            <div className="footer-all-content">
                <div className="footer-navbar">
                    <div className="footer-logo">
                        <img src={FooterLogo} alt="" className="footer-logo"/>
                    </div>
                    <div className="navbar-footer-content">
                        <p className="footer-home">Home</p>
                        <p className="footer-blog">Blog</p>
                        <p className="footer-aboutus">About Us</p>
                        <p className="footer-contactus">Contact Us</p>
                        <p className="footer-privacy">Privacy Policy</p>
                    </div>

                </div>
                <div className="footer-inner-frame">
                    <div className="footer-inner-content">
                        <div className="footer-inner-text">
                            <p className="footer-inner-subtext">Subscribe to our newsletters to get
                            latest updates and news.</p>

                        </div>
                        <div className="footer-inner-placeholder">
                            <input type="text" placeholder="Enter your E-mail" className="footer-placeholder"/>
                        </div>
                        <div className="footer-subscribe-button">
                            <button className="footer-button">Subscribe</button>
                        </div>

                    </div>

                </div>
                <div className="footer-lowest-part">
                    <div className="footer-fintown-lowertext">
                        <p className="footer-fintown-heading">Finstreet 118 2561 Fintown</p>
                        <p className="footer-fintown-address">Hello@finsweet.com 020 7993 2905</p>

                    </div>
                    <div className="footer-inner-icons">
                        <div className="footer-fb">
                            <img src={FooterFB} alt="" className="footer-fb-image" />
                        </div>
                        <div className="footer-twitter">
                            <img src={FooterTwitter} alt="" className="footer-twitter-image"/>

                        </div>
                        <div className="footer-insta">
                            <img src={FooterInsta} alt="" />

                        </div>
                        <div className="footer-linkedin">
                            <img src={FooterLinkedin} alt="" className="footer-linkedin-image"/>
                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
export default Footer