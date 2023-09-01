import React from 'react'
import ImageCarousel from './ImageCarousel';
import './FeaturePlace.css'
const FeaturePlace = () => {
  return (
    <div>
        <h1 className='Feature'>
            Feature Places
        </h1>
        <p className='text11'>
             The point of using Lorem Ipsum is that it has a more-or-less <br /> normal distribution of letters.
        </p>
      <ImageCarousel/>
    </div>
  )
}

export default FeaturePlace;
