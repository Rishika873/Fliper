import React from "react";
import "../assets/styling/authors.css"
import Author1 from "../assets/Images/Author1.svg"
import Author2 from "../assets/Images/Author2.svg"
import Author3 from "../assets/Images/Author3.svg"
import Author4 from "../assets/Images/Author4.svg"

import Facebook from "../assets/Images/Facebook.svg"
import Insta from "../assets/Images/Insta.svg"
import Linkedin from "../assets/Images/Linkedin.svg"
import Twitter from "../assets/Images/Twitter.svg"

const Author = () =>
{
    return(
        <>
           <div className="author">
                <div className="author-heading">
                    <p className="author-heading-text">List Of Authors</p>
                </div>
                <div className="authors-frame">
                    <div className="author1">
                        <div className="author-inner-frame">
                            <div className="author-image-frame">
                                <img src={Author1} alt="" className="author-image"/>
                            </div>
                        </div>
                        <div className="author-text">
                            <p className="author-inner-heading">Floyd Miles</p>
                            <p className="author-inner-subtext">Content-writer @Company</p>
                        </div>
                        <div className="authors-icon">
                            <img src={Facebook} alt="" className="Facebook-icon" />
                            <img src={Twitter} alt="" className="Twitter-icon" />
                            <img src={Insta} alt="" className="Insta-icon" />
                            <img src={Linkedin} alt="" className="Linkedin-icon" />
                        </div>
                    </div>
                    <div className="author1">
                        <div className="author-inner-frame">
                            <div className="author-image-frame">
                                <img src={Author2} alt="" className="author-image"/>
                            </div>
                        </div>
                        <div className="author-text">
                            <p className="author-inner-heading">Dianna Russel</p>
                            <p className="author-inner-subtext">Content-writer @Company</p>
                        </div>
                        <div className="authors-icon">
                            <img src={Facebook} alt="" className="Facebook-icon" />
                            <img src={Twitter} alt="" className="Twitter-icon" />
                            <img src={Insta} alt="" className="Insta-icon" />
                            <img src={Linkedin} alt="" className="Linkedin-icon" />
                        </div>
                    </div>
                    <div className="author1">
                        <div className="author-inner-frame">
                            <div className="author-image-frame">
                                <img src={Author3} alt="" className="author-image"/>
                            </div>
                        </div>
                        <div className="author-text">
                            <p className="author-inner-heading">Jenny Wilson</p>
                            <p className="author-inner-subtext">Content-writer @Company</p>
                        </div>
                        <div className="authors-icon">
                            <img src={Facebook} alt="" className="Facebook-icon" />
                            <img src={Twitter} alt="" className="Twitter-icon" />
                            <img src={Insta} alt="" className="Insta-icon" />
                            <img src={Linkedin} alt="" className="Linkedin-icon" />
                        </div>
                    </div>
                    <div className="author1">
                        <div className="author-inner-frame">
                            <div className="author-image-frame">
                                <img src={Author4} alt="" className="author-image"/>
                            </div>
                        </div>
                        <div className="author-text">
                            <p className="author-inner-heading">Leslie Alexander</p>
                            <p className="author-inner-subtext">Content-writer @Company</p>
                        </div>
                        <div className="authors-icon">
                            <img src={Facebook} alt="" className="Facebook-icon" />
                            <img src={Twitter} alt="" className="Twitter-icon" />
                            <img src={Insta} alt="" className="Insta-icon" />
                            <img src={Linkedin} alt="" className="Linkedin-icon" />
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default Author