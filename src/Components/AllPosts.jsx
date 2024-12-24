import React from 'react'
import "../assets/styling/allposts.css"
import Allpost1 from "../assets/Images/ALLpost1.svg"

function AllPosts() {
  return (
   <>
  
   <div className="allposts-container">
        <div className="allposts-heading">
        <p className='allposts-text-heading'>All Posts</p>
        </div>
        <div className="allposts-card-container">
            <div className="allposts-card-frame">
                {/* <img src={Allpost1} alt="" className='allposts-card1-photo' /> */}
                

            </div>

        </div>
       

   </div>

  
  
   
   
   </>
  )
}

export default AllPosts
