import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';
import Bali from '../assets/Bali.jpg';
import Phuket from '../assets/Phuket.jpg';
import Positano from '../assets/Positano.jpg'
import Philadelphia from '../assets/Philadelphia.png'
import Chicago from '../assets/Chicago.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const carouselItems = [
  {
    imageSrc: Phuket,
    title: 'Phuket,Thailand',
    description: '(120k rating)',
  },
  {
    imageSrc: Positano,
    title: 'Positano, Italy',
    description: '(200k rating)',
  },
  {
    imageSrc: Philadelphia,
    title: 'Philadelphia, USA',
    description: '(100k rating)',
  },
  {
    imageSrc: Chicago,
    title: 'Chicago, USA',
    description: '(150k rating)',
  },
  {
    imageSrc: Bali,
    title: 'Bali, Indonesia',
    description: '(90k rating)',
  },
];
const yellowStarStyle = {
    color: 'Blue'// Set the color to yellow
  };

const ImageCarousel = () => {
  const carouselSettings = {
    infiniteLoop: true,
    showThumbs: true, // Hide thumbnail navigation
    emulateTouch: true,
    showStatus: false, // Hide status indicator
    showArrows: true, // Show previous and next arrows
    centerMode: true, // Center the current slide
    centerSlidePercentage: 33.33, // Display three slides at a time
    swipeable: true, // Enable swipe gestures
  };

  return (
    <div className="carousel-container">
      <Carousel {...carouselSettings}>
        {carouselItems.map((item, index) => (
          <div key={`carousel-item-${index}`} className="carousel-item">
            <div className="card11">
              <img src={item.imageSrc} alt={`Image ${index + 1}`} width={100} height={200} />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p className='text11'>4<FontAwesomeIcon icon={faStar} style={yellowStarStyle}  /> {item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
