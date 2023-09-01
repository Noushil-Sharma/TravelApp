import React from 'react'
import './Hero.css'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className='Hero'>
      <Navbar/>
      <div className='text-container'>
      <h1 className='head'>
          Let's Make Your Best <br/> Trip Ever
      </h1>
      <h4 className='head2'>
          Plan and book your perfect trip with expert advice, travel tips, destination <br/> information and inspiration from us.
      </h4>
      <div className='but'>
      <button className='button1'>Discover Now</button>
      </div>
      </div>
    </div>
  )
}

export default Hero;
