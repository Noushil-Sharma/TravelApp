import React from 'react'
import './OurBenefit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import { faCouch,faUserShield,faUserTie } from '@fortawesome/free-solid-svg-icons';
const OurBenefit = () => {
  return (
    <div className='OurBenefit'>
      <div className="text-Section">
         <h1 className='head'>Our Benefit</h1>
         <br />
         <p className='benefit_content'>The point of using Lorem Ipsum is that it has a <br />
          more-or-less normal distribution of letters.</p>
        <div className="grid-container">
            <div className="grid-item">
                <h4><FontAwesomeIcon icon={faCalendar} /> Personal Schedule</h4>
                <br />
                <p>
                The point of using Lorem Ipsum is that <br />
                 it has a more-or-less normal distribution <br />
                 of letters, making it look like <br />
                 readable English. <br />
                </p>
            </div>
            <div className="grid-item">
            <h4><FontAwesomeIcon icon={faCouch} /> Luxury Interiors</h4>
                <br />
                <p>
                The point of using Lorem Ipsum is that <br />
                 it has a more-or-less normal distribution <br />
                 of letters, making it look like <br />
                 readable English. <br />
                </p>
            </div>
            <div className="grid-item">
            <h4><FontAwesomeIcon icon={faUserShield} /> Safe & Confidential</h4>
                <br />
                <p>
                The point of using Lorem Ipsum is that <br />
                 it has a more-or-less normal distribution <br />
                 of letters, making it look like <br />
                 readable English. <br />
                </p>
            </div>
            <div className="grid-item">
            <h4><FontAwesomeIcon icon={faUserTie} /> Professional Crew</h4>
                <br />
                <p>
                The point of using Lorem Ipsum is that <br />
                 it has a more-or-less normal distribution <br />
                 of letters, making it look like <br />
                 readable English. <br />
                </p>
            </div>
        </div>
      </div>
      <div className="image-Section">
            <div className="imgsec1">
                <div className="img1">
                    
                </div>
                <div className="img2">

                </div>
            </div>
            <div className="imgsec2">
               <div className="img3">
               </div>
               <div className="img4">

               </div>
            </div>
      </div>
    </div>
  )
}

export default OurBenefit
