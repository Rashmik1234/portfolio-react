import React from 'react'
import './About.css'
import shape from '../../assets/shape1.jpg'
import Profile from '../../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about_title">
            <h1>About Me</h1>
            <img src={shape} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={Profile}  alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>With 1.5 years of internship experience and a well-rounded skill set, I excel in both frontend and backend development</p>
                    <p>I effectively collaborate with clients, provide impactful solutions, and leverage strong communication skills to ensure high-quality results and project success.</p>
                </div>

                {/* <div className="about-hire">
                    <h1>Why Should Hire Me?</h1>
                    <div className="coz">
                      <div className="coz-left">

                    <p>Creative Solutions</p>
                    <p>Adaptability</p>
                    <p>Diverse Skill Set</p>
                      </div>
                      <div className="coz-right">

                    <p>Continuous Improvement</p>
                    <p>Adaptability</p>
                    <p>Client-Centric Approach</p>
                      </div>
                   
                    </div>
                </div> */}

             <div className="about-skills">
                    
                    <div className="about-skill"><p>HTML,CSS</p> <hr style={{width:"100%"}}/></div>
                    <div className="about-skill"><p>Bootstrap</p> <hr style={{width:"100%"}}/></div>
                    <div className="about-skill"><p>React Js</p> <hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>MySql</p> <hr style={{width:"90%"}}/></div>
                   
                    <div className="about-skill"><p>WordPress</p> <hr style={{width:"70%"}}/></div>
                    
                    <div className="about-skill"><p>Photoshop</p> <hr style={{width:"80%"}}/></div>
                </div> 
            </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1 >1+</h1>
                    <p>YEARS OF INTERNSHIP EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>7+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>

       
    </div>
  )
}

export default About