import React from 'react'
import './Footer.css'
import logo from '../../assets/logo1.png'
import { FaUser} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a Full Stack Developer based in India. Proficient in frontend development, with strong knowledge of databases and experience in building WordPress sites and Mobile applications</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                      <FaUser/>
                      <input type="text" placeholder='Enter Your Company Name' />
                </div>
                <div className="footer-subscribe">
                    Hire Me
                </div>
            </div>
        </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                © 2024 Rashmi Kulkarni. All rights reserved.
                </div>
                <div className="footer-bottom-right">
                    <p>Term Of Services</p>
                    <p>Privacy Policy</p>
                    <p>Contact Me</p>
                </div>
            </div>
        
    </div>
  )
}

export default Footer