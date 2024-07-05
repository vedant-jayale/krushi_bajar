import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
        <img src={footer_logo} alt =" " />

        <p>कृषि बाजार</p>

       </div>

       <ul className='footer-links'>
            <li><Link style={{textDecoration:'none'}} to="/Company">Company</Link></li>
            <li><Link style={{textDecoration:'none'}} to="/">Products</Link></li>
            <li><Link style={{textDecoration:'none'}} to="/AdminLogin">Admin</Link></li>
            <li><Link style={{textDecoration:'none'}} to="/Company">About</Link></li>
            <li><Link style={{textDecoration:'none'}} to="/Contact">Contact</Link></li>
        </ul>

       <div className='footer-social-icons'>
           <div className='footer-icon-container'> 
              <img src={instagram_icon} alt="" />
           </div>

           <div className='footer-icon-container'> 
              <img src={pintester_icon} alt="" />
           </div>
           <div className='footer-icon-container'> 
              <img src={whatsapp_icon} alt="" />
           </div>
         
       </div>
       <div className='footer-copyright'>

        <hr/>
        <p>Copyright @2024 -All Right Reserved</p>
       </div>
      
    </div>
  )
}

export default Footer
