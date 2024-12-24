import React from "react";
import "../assets/styling/blog.css"
import BlogImage from "../assets/Images/BlogImage1.svg"
import AllPosts1 from "../assets/Images/ALLpost1.svg";
import AllPosts2 from "../assets/Images/AllPost2.svg";
import AllPosts3 from "../assets/Images/AllPost3.svg";
import AllPosts4 from "../assets/Images/AllPost4.svg";
import BusinessIcon from "../assets/Images/Business icon.svg"
import StartupIcon from "../assets/Images/StartupIcon.svg"
import EconomyIcon from "../assets/Images/EconomyIcon.svg"
import TechnologyIcon from "../assets/Images/TechnologyIcon.svg"

const Blog = () => {
    return(
        <>
        <div className="blog-body">

       
            <div className="blog-container">
                <div className="blog-text-content">
                    <div className="blog-text">
                        <p className="blog-featured-post">Featured Post</p>
                        <p className="blog-text-heading">Step-by step guide to choosing 
                        best font-pairs</p>
                        <p className="blog-date-text">By John Doe| May 23, 2022</p>
                        <p className="blog-subtext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ratione neque maxime quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi qui ut impedit.</p>
                    </div>
                    <button className="blog-button">Read More ></button>

                </div>
                <div className="blog-image-container">
                    <img src={BlogImage} alt="" className="blog-image"/>
                </div>

            </div>
            <div className="allposts-container">
                <div className="allposts-heading">
                    <p className="allposts-heading-text">All Posts</p>
                </div>

                <div className="allposts-cards-frame">
                <div className="allposts-card1-container">
                    <div className="allposts-photo-frame">
                        <img src={AllPosts1} alt="" className="allposts-card-image"/>
                    </div>
                    <div className="allposts-card1-text-content">
                        <p className="allposts-card1-heading">Startup</p>
                        <p className="allposts-card1-text">Design tips for designers that cover 
                        everything you need</p>
                        <p className="allposts-card1-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut corrupti voluptatem quas eveniet magnam qui alias consequuntur nemo! Eveniet hic voluptate fugiat accusamus placeat nemo expedita autem illum sint.</p>
                    </div>
                </div>
                <div className="allposts-card1-container">
                    <div className="allposts-photo-frame">
                        <img src={AllPosts2} alt="" className="allposts-card-image"/>
                    </div>
                    <div className="allposts-card1-text-content">
                        <p className="allposts-card1-heading">Startup</p>
                        <p className="allposts-card1-text">Design tips for designers that cover 
                        everything you need</p>
                        <p className="allposts-card1-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut corrupti voluptatem quas eveniet magnam qui alias consequuntur nemo! Eveniet hic voluptate fugiat accusamus placeat nemo expedita autem illum sint.</p>
                    </div>
                </div>
                <div className="allposts-card1-container">
                    <div className="allposts-photo-frame">
                        <img src={AllPosts3} alt="" className="allposts-card-image"/>
                    </div>
                    <div className="allposts-card1-text-content">
                        <p className="allposts-card1-heading">Startup</p>
                        <p className="allposts-card1-text">Design tips for designers that cover 
                        everything you need</p>
                        <p className="allposts-card1-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut corrupti voluptatem quas eveniet magnam qui alias consequuntur nemo! Eveniet hic voluptate fugiat accusamus placeat nemo expedita autem illum sint.</p>
                    </div>
                </div>
                <div className="allposts-card1-container">
                    <div className="allposts-photo-frame">
                        <img src={AllPosts4} alt="" className="allposts-card-image"/>
                    </div>
                    <div className="allposts-card1-text-content">
                        <p className="allposts-card1-heading">Startup</p>
                        <p className="allposts-card1-text">Design tips for designers that cover 
                        everything you need</p>
                        <p className="allposts-card1-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut corrupti voluptatem quas eveniet magnam qui alias consequuntur nemo! Eveniet hic voluptate fugiat accusamus placeat nemo expedita autem illum sint.</p>
                    </div>
                </div>
                <div className="allposts-card1-container">
                    <div className="allposts-photo-frame">
                        <img src={AllPosts1} alt="" className="allposts-card-image"/>
                    </div>
                    <div className="allposts-card1-text-content">
                        <p className="allposts-card1-heading">Startup</p>
                        <p className="allposts-card1-text">Design tips for designers that cover 
                        everything you need</p>
                        <p className="allposts-card1-subtext">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ut corrupti voluptatem quas eveniet magnam qui alias consequuntur nemo! Eveniet hic voluptate fugiat accusamus placeat nemo expedita autem illum sint.</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="categories">
                <div className="categories-heading">
                    <p className="categories-heading-text">All Categories</p>
                </div>
                <div className="categories-frame">
                    <div className="categories-business-frame">
                        <div className="business-frame-description">
                            <div className="business-icon-frame">
                                <img src={BusinessIcon} alt="" className="business-icon-image"/>                
                            </div>
                            <div className="business-text">
                                <p className="business-text-heading">Business</p>
                            </div>
                            <div className="business-description">
                                <p className="business-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda iusto aut molestias nesciunt. Impedit eum, hic, </p>
                            </div>
                        </div>
                    </div>     
                    <div className="categories-business-frame">
                        <div className="business-frame-description">
                            <div className="business-icon-frame">
                                <img src={StartupIcon} alt="" className="startup-icon-image"/>                
                            </div>
                            <div className="business-text">
                                <p className="business-text-heading">Startup</p>
                            </div>
                            <div className="business-description">
                                <p className="business-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda iusto aut molestias nesciunt. Impedit eum, hic, </p>
                            </div>
                        </div>
                    </div>     
                    <div className="categories-business-frame">
                        <div className="business-frame-description">
                            <div className="business-icon-frame">
                                <img src={EconomyIcon} alt="" className="business-icon-image"/>                
                            </div>
                            <div className="business-text">
                                <p className="business-text-heading">Economy</p>
                            </div>
                            <div className="business-description">
                                <p className="business-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda iusto aut molestias nesciunt. Impedit eum, hic, </p>
                            </div>
                        </div>
                    </div>     
                    <div className="categories-business-frame">
                        <div className="business-frame-description">
                            <div className="business-icon-frame">
                                <img src={TechnologyIcon} alt="" className="business-icon-image"/>                
                            </div>
                            <div className="business-text">
                                <p className="business-text-heading">Technology</p>
                            </div>
                            <div className="business-description">
                                <p className="business-subtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis assumenda iusto aut molestias nesciunt. Impedit eum, hic, </p>
                            </div>
                        </div>
                    </div>     

                </div>

            </div>

            </div>
        </>
    )
}
export default Blog