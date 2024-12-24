import React from "react";
import "../assets/styling/groupframe.css"
import FriendsBg from "../assets/Images/FriendsBg.svg"

const GroupFrame = () =>
{
    return(
        <>
         <div className="container">
      <div className="image-section">
        <img src={FriendsBg} alt="Group" className="image" />
      </div>
      <div className="text-section">
        <h4>WAY WE STARTED</h4>
        <h2>IT started out as a simple idea and involved into our passion</h2>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque dolorum inventore tempora ratione iure id earum alias non accusantium?
        </p>
        <button className="cta-button">Discover Our Story &gt;</button>
      </div>
    </div>
        </>
    )
}
export default GroupFrame;