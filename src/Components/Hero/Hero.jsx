import React,{ useEffect, useRef } from 'react'
import './Hero.css'
import resume from '../../assets/Rashmik_CV.pdf';
import Profile from '../../assets/profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const element = heroRef.current;
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (inView) {
          element.classList.add('animate');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger once on mount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div ref={heroRef} id='home' className='hero'>
            <img src={Profile} alt="" />
            <h1><span>I'm Rashmi Kulkarni</span>,Full stack developer based in India.</h1>
            <p>I am a Full Stack Developer Based in India. Proficient in frontend development, with strong knowledge of databases and experience in building WordPress sites and Mobile applications</p>
            <div className="hero-action">
                <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")} style={{width:'100%'}}>Connect With Me</p></AnchorLink>
                </div>

                   <a href={resume} target="_blank" rel="noopener noreferrer" >
                <div className="hero-resume">
                    My Resume
                    
                </div>
                    </a> 
            </div>
        </div>
    )
}

export default Hero