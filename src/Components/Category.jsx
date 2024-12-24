import React from "react";
import "../assets/styling/category.css"
import BusinessIcon from "../assets/Images/Business icon.svg"
import StartupIcon from "../assets/Images/StartupIcon.svg"
import EconomyIcon from "../assets/Images/EconomyIcon.svg"
import TechnologyIcon from "../assets/Images/TechnologyIcon.svg"

const Category = () => {
    return(
        <>
            <div className="category">
                <div className="category-heading">
                    <p className="category-text">Choose a Category</p>
                </div>
                <div className="category-choose">
                <div className="category-frame">
                    <div className="business-frame">
                        <div className="business-inner-frame">
                            <div className="icon-frame">
                            <img src={BusinessIcon} alt="" className="business-icon"/>
                            </div>
                        </div>
                        <div className="business-text">
                            <p className="business-heading">Business</p>
                        </div>
                        <div className="business-subtext">
                            <p className="business-subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nobis tempora voluptates consequuntur, qui magni? Nemo quibusdam minima ipsum perspiciatis.</p>
                        </div>
                    </div>
                </div>
                <div className="category-frame">
                    <div className="business-frame">
                        <div className="business-inner-frame">
                            <div className="icon-frame">
                            <img src={StartupIcon} alt="" className="business-icon"/>
                            </div>
                        </div>
                        <div className="business-text">
                            <p className="business-heading">Startup</p>
                        </div>
                        <div className="business-subtext">
                            <p className="business-subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nobis tempora voluptates consequuntur, qui magni? Nemo quibusdam minima ipsum perspiciatis.</p>
                        </div>
                    </div>
                </div>
                <div className="category-frame">
                    <div className="business-frame">
                        <div className="business-inner-frame">
                            <div className="icon-frame">
                            <img src={EconomyIcon} alt="" className="business-icon"/>
                            </div>
                        </div>
                        <div className="business-text">
                            <p className="business-heading">Economy</p>
                        </div>
                        <div className="business-subtext">
                            <p className="business-subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nobis tempora voluptates consequuntur, qui magni? Nemo quibusdam minima ipsum perspiciatis.</p>
                        </div>
                    </div>
                </div>
                <div className="category-frame">
                    <div className="business-frame">
                        <div className="business-inner-frame">
                            <div className="icon-frame">
                            <img src={TechnologyIcon} alt="" className="business-icon"/>
                            </div>
                        </div>
                        <div className="business-text">
                            <p className="business-heading">Technology</p>
                        </div>
                        <div className="business-subtext">
                            <p className="business-subheading">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nobis tempora voluptates consequuntur, qui magni? Nemo quibusdam minima ipsum perspiciatis.</p>
                        </div>
                    </div>
                </div>
                </div>
                
              
            </div>
        </>
    )
}
export default Category