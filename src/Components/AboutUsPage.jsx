import React from 'react'
import "../assets/styling/aboutuspage.css"
import FriendsBg from "../assets/Images/FriendsBg.svg"
import GroupHands from "../assets/Images/GroupHandsAboutUs.svg"
import ThreePeople from "../assets/Images/3PeopleAboutUs.svg"
import Author1 from '../assets/Images/Author1.svg'
import Author2 from "../assets/Images/Author2.svg"
import Author3 from "../assets/Images/Author3.svg"
import Author4 from "../assets/Images/Author4.svg"
import Author5 from "../assets/Images/Author5.svg"
import Author6 from "../assets/Images/Author6.svg"
import Author7 from "../assets/Images/Author7.svg"
import Author8 from "../assets/Images/Author8.svg"
import Facebook from "../assets/Images/Facebook.svg"
import Twitter from "../assets/Images/Twitter.svg"
import Insta from "../assets/Images/Insta.svg"
import Linkedin from "../assets/Images/Linkedin.svg"
import JoinTeam from './JoinTeam'
import Footer from './Footer'


function AboutUsPage() {
  return (
   <div className="aboutuspage">
    <div className="aboutuspage-content">
        <div className="aboutuspage-text">
            <p className='aboutuspage-heading'>ABOUT US</p>
            <p className='aboutuspage-subtext'>We are a team of content writers who share their learnings</p>
        </div>
        <div className="aboutuspage-subtext-content">
            <p className='aboutuspage-subtext-content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quae vero sapiente consequuntur, necessitatibus cupiditate consequatur facere omnis dignissimos ex in quibusdam inventore voluptates ducimus!</p>
        </div>
    </div>
    <div className="ourmission-frame">
        <div className="ourmission-content-image">
            <img src={FriendsBg} alt="" className='ourmission-content-photo'/>
        </div>
        <div className="ourmission-vision-content">
            <div className="ourmission-content">
                <p className='ourmission-content-heading'>OUR MISSION</p>
                <p className='ourmission-content-subheading'>Creating valuable content for
                creatives all around the world</p>
                <p className='ourmission-content-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, corporis possimus, tempore commodi excepturi dolorum dolores minima et libero provident molestias voluptas enim fuga illum.</p>
            </div>
            <div className="ourvision-content">
            <p className='ourvision-content-heading'>OUR VISION</p>
            <p className='ourvision-content-subheading'>A plateform that empowers individuals to improve</p>
            <p className='ourvision-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laudantium quas cumque, dolorum repellendus reprehenderit autem maiores neque tempore itaque est eligendi eos ut exercitationem.</p>
        </div>
        </div>
        </div>
        <div className="aboutuspage-ourteam">
            <div className="team-of-creatives">
                <p className='team-of-creatives-heading'>Our team of creatives</p>
                <p className='team-of-creatives-subheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, quos voluptate. Corrupti nemo aliquid quia!</p>
                <p className='team-of-creatives-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni nam ipsum culpa harum aliquid, eum unde, obcaecati laboriosam explicabo magnam voluptates voluptas quam vitae tempore.</p>
            </div>
            <div className="team-photoframe-frame">
                <div className="team-photoframe">
                    <img src={GroupHands} alt="" className='team-photo'/>
                </div>
            </div>
        </div>
        <div className="westarted-blog">
            <div className="aboutuspage-photoframe2">
                <div className="aboutuspage-image-frame">
                    <img src={ThreePeople} alt="" className='aboutuspage-photo2' />
                </div>
            </div>
            <div className="westarted-blog-textcontent">
                <p className='westarted-blog-heading'>Why we started this Blog</p>
                <p className='westarted-blog-subheading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga qui ut soluta, ipsa dolores debitis!</p>
                <p className='westarted-blog-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, accusamus consequuntur voluptatum hic, sint libero assumenda error doloremque cupiditate illo doloribus saepe aliquam! Quasi, cumque!</p>
            </div>
        </div>
        <div className="aboutuspage-authors">
            <div className="aboutuspage-authors-heading">
                <p className='authors-heading'>List Of Authors</p>
            </div>
            <div className="aboutuspage-authors-framecard">
                <div className="aboutuspage-authors-above">
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author1} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author2} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author3} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author4} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutuspage-authors-below">
                <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author5} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author6} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author7} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                    <div className="author1-frame">
                        <div className="author-inner-frame">
                            <div className="author-photoframe">
                                <img src={Author8} alt="" className='author1-photo' />
                            </div>
                            <div className="author-name">
                                <p className='author-name-text'>Floyd Miles</p>
                                <p className='author-role-text'>Content-writer @Company</p>
                            </div>
                            <div className="aboutuspage-authors-icon">
                                <img src={Facebook} alt="" className='authors-fb-icon'/>
                                <img src={Twitter} alt="" className='authors-twitter-icon'/>
                                <img src={Insta} alt="" className='authors-insta-icon' />
                                <img src={Linkedin} alt="" className='authors-linkedin-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    <JoinTeam/>
    <Footer/>

   </div>
  )
}

export default AboutUsPage
