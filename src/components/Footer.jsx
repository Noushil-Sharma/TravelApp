import React from 'react'
import './Footer.css';
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt,faFacebookF } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
       <div className='Footer'>
        <div className='logo-sec'>
            <img src={logo} alt="" height={50} className='logoimg'/>
        </div>
        <div className="about">
            <p>
            Plan and book your perfect trip with expert advice, travel tips, destination <br />
information and inspiration from us.
            </p>
        </div>
        <div className="icons">
        {/* <FontAwesomeIcon icon={faFacebookF} /> */}
            
                <ul className='icons'>
                <li className='lii'>
                    <a href="#">
                    <i class="fab fa-facebook-f icon"></i>    </a>
                </li>
                <li className='lii'>
                    <a href="#"><i class="fab fa-twitter icon"></i></a>
                </li>
                <li className='lii'>
                    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
                <li className='lii'>
                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
                </ul>

        </div>
        <div className='lastsec'>
          <ul className='navlist2 lastsec'>
          <li className='Home'><a  href="#">Home</a></li>
          <li className='Pages'><a href="#">Pages</a></li>
          <li className='Blog'><a href="#">Blog</a></li>
          <li className='About_Us'><a href="#">About Us</a></li>
          <li className='Contact'><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="copyright">
        <p className='copyright'>Copyright ©2023 All rights reserved | Made by Noushil</p>
      </div>
      </div>
      

    </div>
  )
}

export default Footer;
