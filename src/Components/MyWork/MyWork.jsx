import React from 'react'
import './MyWork.css'
import shape from '../../assets/shape1.jpg'
import mywork from '../../assets/mywork'

const MyWork = () => {
    
      const handleMouseEnter = (event) => {
        event.target.play();
      };
    
      const handleMouseLeave = (event) => {
        event.target.pause();
        event.target.currentTime = 0; // Reset the video to the start
      };
  return (
    <div id='work' className='mywork'>
     <div className="mywork-title">
      <h1>My Projects</h1>
      <img src={shape} alt="" />
     </div>

     <div className="mywork-container">
     {mywork.map((video) => (
        <video
          key={video.w_no}
          src={video.w_vdo}
          // width="400"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
          
        />
      ))}
     </div>

     <div className="mywork-showmore">
        <p>Show More</p>
     </div>
    </div>
  )
}

export default MyWork