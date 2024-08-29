import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import shape1 from '../../assets/shape1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

  const[menu,setMenu]=useState("home")
  const menuRef=useRef();
  const openMenu=()=>{
     menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
     menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <div className="nav-mob-open" onClick={openMenu}>

       <FaBars/>
      </div>
        <ul ref={menuRef} className="nav-menu">
          <div className="nav-mob-close" onClick={closeMenu}>

          <FaTimes/>
          </div>
          <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={shape1} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={shape1} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<img src={shape1} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={shape1} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={shape1} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={shape1} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect">
         <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}> Connect With Me</p></AnchorLink>
         
        </div>
    </div>
  )
}

export default Navbar