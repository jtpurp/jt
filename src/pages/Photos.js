import React from 'react';
import ithaca1 from '../photos/ithaca-1.jpg';
import ithaca2 from '../photos/ithaca-2.jpg';
import '../styles/Photos.css';

function Photos() {
  return (
    <div className="photos">
      <h1>Photos</h1>
      
      <div className="left-container">
      <img src={ithaca1} alt="Ithaca" className="ithaca1"/>
      </div>
     
      <div className="right-container">
      <img src={ithaca2} alt="Ithaca" className="ithaca2"/>
      </div>

    </div>
  )
}

export default Photos