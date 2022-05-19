import React from 'react';
import ithaca1 from '../photos/ithaca-1.jpg';
import ithaca2 from '../photos/ithaca-2.jpg';
import ithaca3 from '../photos/ithaca-3.jpg';
import ithaca4 from '../photos/ithaca-4.jpg';
import colorado1 from '../photos/colorado-1.jpg';
import colorado2 from '../photos/colorado-2.jpg';
import colorado3 from '../photos/colorado-3.jpg';
import australia1 from '../photos/australia-1.jpg';
import australia2 from '../photos/australia-2.jpg';
import australia3 from '../photos/australia-3.jpg';
import australia4 from '../photos/australia-4.jpg';
import australia5 from '../photos/australia-5.jpg';
import round1 from '../photos/round-valley-1.jpg';
import round2 from '../photos/round-valley-2.jpg';
import belleplain from '../photos/belleplain.jpg';
import ricketts1 from '../photos/ricketts-glenn-1.jpg';
import ricketts2 from '../photos/ricketts-glenn-2.jpg';
import ben1 from '../photos/ben-frank-1.jpg';
import ben2 from '../photos/ben-frank-2.jpg';
import ben3 from '../photos/ben-frank-3.jpg';
import montreal1 from '../photos/montreal-1.jpg';
import montreal2 from '../photos/montreal-2.jpg';
import nyc1 from '../photos/nyc-1.jpg';
import nyc2 from '../photos/nyc-2.jpg';
import '../styles/Photos.css';

function Photos() {
  return (
    <div className="photos">
      <h1>Photos</h1>

      <img src={ithaca1} alt="Ithaca" className="photo"/>
 
      <img src={ithaca2} alt="Ithaca" className="photo"/>
 
      <img src={ithaca3} alt="Ithaca" className="photo"/>

      <img src={ithaca4} alt="Ithaca" className="photo"/>

      <img src={colorado1} alt="Colorado" className="photo"/>

      <img src={colorado2} alt="Colorado" className="photo"/>

      <img src={colorado3} alt="Colorado" className="photo"/>

      <img src={australia1} alt="Australia" className="photo"/>

      <img src={australia2} alt="Australia" className="photo"/>

      <img src={australia3} alt="Australia" className="photo"/>

      <img src={australia4} alt="Australia" className="photo"/>

      <img src={australia5} alt="Australia" className="photo"/>

      <img src={round1} alt="Round Valley" className="photo"/>
      
      <img src={round2} alt="Round Valley" className="photo"/>

      <img src={belleplain} alt="Belleplain" className="photo"/>

      <img src={ricketts1} alt="Ricketts Glenn" className="photo"/>

      <img src={ricketts2} alt="Ricketts Glenn" className="photo"/>

      <img src={ben1} alt="Benjamin Franklin Bridge" className="photo"/>

      <img src={ben2} alt="Benjamin Franklin Bridge" className="photo"/>

      <img src={ben3} alt="Benjamin Franklin Bridge" className="photo"/>

      <img src={montreal1} alt="Montreal" className="photo"/>

      <img src={montreal2} alt="Montreal" className="photo"/>

      <img src={nyc1} alt="New York City" className="photo"/>

      <img src={nyc2} alt="New York City" className="photo"/>    

    </div>
  )
}

export default Photos