import React, { useContext, useState, useRef } from 'react';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import nav_dropdown from "../Assets/nav_dropdown.png"

import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef = useRef(null);

    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle('open');

    }


  return (

    <div className='navbar'>
       <div className='nav-logo'>
          <img src={logo} alt ="" />
          <p>कृषि बाजार</p>                                  


       </div>

       <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />

       <ul ref={menuRef} className='nav-menu'>
         <li onClick={ () => {setMenu("shop")}}> <Link style={{textDecoration:'none'}} to ="/">Shop</Link> {menu==="shop"? <hr/> : <></>} </li>
         <li onClick={ () => {setMenu("insecticides")}}><Link style={{textDecoration:'none'}}  to ="/insecticides">कीटकनाशक</Link> {menu==="insecticides"? <hr/> : <></>} </li>
         <li onClick={ () => {setMenu("fungicides")}}><Link style={{textDecoration:'none'}} to ="/fungicides">कवकनाशक</Link> {menu==="fungicides"? <hr/> : <></>} </li>
         <li onClick={ () => {setMenu("tonics")}}><Link style={{textDecoration:'none'}}  to ="/tonics">टॉनिक</Link> {menu==="tonics"? <hr/> : <></>} </li>
         <li onClick={ () => {setMenu("fertilizers")}}><Link style={{textDecoration:'none'}}  to ="/fertilizers">रसायनिक खाद्य</Link> {menu==="fertilizers"? <hr/> : <></>} </li>
       </ul>

--
       <div className='nav-login-cart'>
       {localStorage.getItem("auth-token")   //here if in local storeage our token named with auth token found that means one user is logged in succesfully ...so we have option to logout 
       ?<button onClick={()=> {localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
       : <Link to="/login"> <button>Login</button> </Link> }
         
          <Link to="/cart"> <img src ={cart_icon} alt ="" /></Link>
           
           <div className='nav-cart-count'>{getTotalCartItems()}</div>

       </div>


      
    </div>
  )
}

export default Navbar
