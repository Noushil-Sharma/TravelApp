import React from 'react'
import './Navbar.css';
import img from '../assets/logo.png';
const Navbar = () => {
  return (
    <div className='nav-b'>
      <div className='logo'>
          <img src={img} alt="" width={150}/>
      </div>
      <div className='navbar'>
        
        <ul className='navlist'>
          <li className='Home'><a  href="#">Home</a></li>
          <li className='Pages'><a href="#">Pages</a></li>
          <li className='Blog'><a href="#">Blog</a></li>
          <li className='About_Us'><a href="#">About Us</a></li>
          <li className='Contact'><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
