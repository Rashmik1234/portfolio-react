import React,{ useEffect, useRef, useState } from  'react'
import './Contact.css'
import shape from '../../assets/shape1.jpg' 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "54c3fd3d-4016-474c-a931-0b8634e087e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully");
    }
  };

  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const element = heroRef.current;
          const rect = element.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom >= 0;
          setIsVisible(inView);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger once on mount
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} id='contact' className={`contact ${isVisible ? 'zoom-in' : ''}`}>
       <div className="contact-title">
          <h1>Get In Touch</h1>
          <img src={shape} alt="" />
       </div>

       <div className="contact-section">
           <div className="contact-left">
              <h1>Let's Talk</h1>
              <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                       <div className='img'><FaEnvelope/></div> <p>Kulkarnirashmi900@gmail.com</p>
                </div>
                <div className="contact-detail">
                       <div className='img'><FaPhone/></div> <p>+91 9325588081</p>
                </div>
                <div className="contact-detail">
                      <div className='img'><FaMapMarkerAlt/></div> <p>Mutke Hostel,Near Karnataka Bank,Chakan,Pune.</p>
                </div>
              </div>
           </div>

           <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' required/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='Enter Your Email' name='email' required/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" id="" placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
           </form>
       </div>
    </div>
  )
}

export default Contact
