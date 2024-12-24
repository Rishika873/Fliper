import React from "react";
import "../assets/styling/home.css"
import bgImage from "../assets/Images/background screen1.svg"

const Home = ()=>
{
    return(
        <>
    <div className="home">
        <div className="inner-frame">
            <div className="text-content">
            <p className="posted-text">Posted on startup</p>
           <p className="posted-heading">Step-by step guide to choosing 
           best font-pairs</p>
           <p className="posted-date">By Lorem ipsum| May 23, 2022</p>
           <p className="posted-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium impedit mollitia ut rem repellat sunt beatae ex obcaecati?
             Odit eum inventore velit sequi magni dolore? Facere velit doloribus tempora?</p>
            </div>
           <button className="home-button">Read More ></button>
        </div>
       
    </div>
        </>
    )
}
export default Home