import React from 'react'
import './SpecialOffers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PriceBox from './PriceBox';

const SpecialOffers = () => {
  return (
    <div className='specialoffer'>
      <div className="header1">
        <div className='heading'>
          <h1 className='head'>Special Offers</h1>
        </div>
        <div className='text1'>
        Whether you're seeking a beach paradise, a city adventure, or family fun, our handpicked <br />
        options promise unforgettable stays at incredible prices. Book now and turn your travel <br />
        dreams into reality!
        </div>
      </div>
      <div className="card-container">
        <div className="card">
            <div className="img-container1">     
            </div>
            <div className="text-container-1">
                <h4>
                    <a href="" className="">Known monument in the black hills of south</a>
                </h4>
                <div className='p_data'>
                <p className='inner_data'> <FontAwesomeIcon icon={faMapMarkerAlt} color='green' />  Lake Grove, New York
                </p>
                <p className='price_b'><PriceBox price={110}/></p>
                </div>  
            </div>
        </div>

        <div className="card">
            <div className="img-container2">     
            </div>
            <div className="text-container-1">
                <h4>
                    <a href="" className="">Known monument in the black hills of south</a>
                </h4>
                <div className='p_data'>
                <p className='inner_data'> <FontAwesomeIcon icon={faMapMarkerAlt} color='green' />  Lake Grove, New York
                </p>
                <p className='price_b'><PriceBox price={110}/></p>
                </div>  
            </div>
        </div>
        <div className="card">
            <div className="img-container3">     
            </div>
            <div className="text-container-1">
                <h4>
                    <a href="" className="">Known monument in the black hills of south</a>
                </h4>
                <div className='p_data'>
                <p className='inner_data'> <FontAwesomeIcon icon={faMapMarkerAlt} color='green' />  Lake Grove, New York
                </p>
                <p className='price_b'><PriceBox price={110}/></p>
                </div>  
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default SpecialOffers
