import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './PriceBox.css';

const PriceBox = ({ price }) => (
  <div className="price-box">
    <p><FontAwesomeIcon icon={faDollarSign} size="lg" color="green" />
    {price}</p>
  </div>
);

export default PriceBox;
