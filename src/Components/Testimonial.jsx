import React from "react";
import "../assets/styling/testimonial.css"
import Johnnathon from "../assets/Images/JOnnathon.svg"
import WhiteArrow from "../assets/Images/WhiteArrow.svg"

const Testimonial = () => 
{
    return(
        <>
        <div className="testimonial-container">
            <div className="testimonial-frame">

            </div>
            <div className="testimonial-inner-frame">
                <div className="testimonial-inner-text">
                    <p className="testimonial-heading">TESTIMONIALS</p>
                    <p className="tesimonial-text">What People Say
                    about your Blog</p>
                    <p className="testimonial-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, quam? Ut harum facere ratione praesentium!</p>
                </div>
                <div className="testimonial-line">

                </div>
                <div className="testimonial-second-part">
                    <div className="testimonial-second-subtext">
                        <p className="testimonial-second-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur commodi sint deleniti omnis aliquid. Adipisci veritatis aliquam autem quos consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur hic commodi facilis voluptatibus dolore, accusamus voluptates optio accusantium nam quisquam consequatur quos doloribus minima a architecto corrupti eveniet et.</p>
                    </div>
                    <div className="johnnathon-container">
                        <div className="johnnathon-frame">
                            <div className="johnnathon-image-frame">
                                <img src={Johnnathon} alt="" className="johnnathon-image"/>
                            </div>
                            <div className="johnnathon-name">
                                <p className="johnnathon-first-name">Johnnathon Vallem</p>
                                <p className="johnnathon-address">New york, USA</p>
                            </div>
                        </div>
                        <div className="johnnathon-arrows">
                            <div className="johnnathon-white-arrow">
                                <img src={WhiteArrow} alt="" className="white-arrow"/>
                            </div>
                            <div className="johnnathon-black-arrow">
                                <img src={WhiteArrow} alt="" className="black-arrow"/>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Testimonial