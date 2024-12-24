import React from "react";
import "../assets/styling/posts.css"
import building from "../assets/Images/building.svg"

const Post = () => {
    return(
        <>
        <div className="post-frame">
        <div className="post">
        
        <p className="featured-text">Featured Post</p>
        <div className="text">
        <img src={building} alt="" className="building-image" />
        <div className="description">
            <p className="featured-name">By John Doe | May 23 , 2022</p>
            <p className="featured-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt ducimus quisquam?</p>
            <p className="featured-detail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sapiente excepturi fuga maxime enim cum laudantium aliquam quidem debitis suscipit.</p>
            <button className="featured-button">Read More ></button>
        </div>
      </div>
    
    </div>
        <div className="all-post-frame">
           <div className="all-post-text">
            <p className="all-post-heading">All Posts</p>
            <p className="all-post-view-all">View All</p>
           </div>
           <div className="post-inner-frame">
                <div className="post1">
                    <div className="post1-text">
                        <p className="all-post-date">By John Doe | May 23 , 2022</p>
                        <p className="all-post1-heading">8 Figma design  systems that you can 
                        download for free today.</p>
                    </div>
                </div>
                <div className="post1">
                    <div className="post1-text">
                        <p className="all-post-date">By John Doe | May 23 , 2022</p>
                        <p className="all-post1-heading">8 Figma design  systems that you can 
                        download for free today.</p>
                    </div>
                </div>
                <div className="post1">
                    <div className="post1-text">
                        <p className="all-post-date">By John Doe | May 23 , 2022</p>
                        <p className="all-post1-heading">8 Figma design  systems that you can 
                        download for free today.</p>
                    </div>
                </div>
                <div className="post1">
                    <div className="post1-text">
                        <p className="all-post-date">By John Doe | May 23 , 2022</p>
                        <p className="all-post1-heading">8 Figma design  systems that you can 
                        download for free today.</p>
                    </div>
                </div>
                <div className="post1">
                    <div className="post1-text">
                        <p className="all-post-date">By John Doe | May 23 , 2022</p>
                        <p className="all-post1-heading">8 Figma design  systems that you can 
                        download for free today.</p>
                    </div>
                </div>
           </div>
        </div>

        </div>
       
        </>
    )
}
export default Post;