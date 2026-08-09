import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.js';
import ithaca1 from '../travel/ithaca-1.jpg';
import ithaca2 from '../travel/ithaca-2.jpg';
import ithaca3 from '../travel/ithaca-3.jpg';
import ithaca4 from '../travel/ithaca-4.jpg';
import colorado1 from '../travel/colorado-1.jpg';
import colorado2 from '../travel/colorado-2.jpg';
import colorado3 from '../travel/colorado-3.jpg';
import australia1 from '../travel/australia-1.jpg';
import australia2 from '../travel/australia-2.jpg';
import australia3 from '../travel/australia-3.jpg';
import australia4 from '../travel/australia-4.jpg';
import australia5 from '../travel/australia-5.jpg';
import round1 from '../travel/round-valley-1.jpg';
import round2 from '../travel/round-valley-2.jpg';
import belleplain from '../travel/belleplain.jpg';
import ricketts1 from '../travel/ricketts-glenn-1.jpg';
import ricketts2 from '../travel/ricketts-glenn-2.jpg';
import ben1 from '../travel/ben-frank-1.jpg';
import ben2 from '../travel/ben-frank-2.jpg';
import ben3 from '../travel/ben-frank-3.jpg';
import montreal1 from '../travel/montreal-1.jpg';
import montreal2 from '../travel/montreal-2.jpg';
import montreal3 from '../travel/montreal-3.jpg';
import nyc1 from '../travel/nyc-1.jpg';
import nyc2 from '../travel/nyc-2.jpg';
import '../styles/Travel.css';

function Travel() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await new Promise((r) => setTimeout(r, 2250));
      setIsLoading(false);
    };

    load();
  })

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="travel">
        <div className="current-container"><p className="current-page" id="page">TRAVEL</p></div>
        <h2 className="photo-desc">Lucifer Falls, Ithaca, NY, US</h2>
        <img src={ithaca1} alt="Ithaca" className="photo" />

        <img src={ithaca2} alt="Ithaca" className="photo" />

        <img src={ithaca3} alt="Ithaca" className="photo" />

        <h2 className="photo-desc">Taughannock Falls, Ithaca, NY, US</h2>
        <img src={ithaca4} alt="Ithaca" className="photo" />

        <h2 className="photo-desc">Rocky Mountain National Park, CO, US</h2>
        <img src={colorado1} alt="Colorado" className="photo" />

        <img src={colorado2} alt="Colorado" className="photo" />

        <img src={colorado3} alt="Colorado" className="photo" />

        <h2 className="photo-desc">The Twelve Apostles, Victoria, AUS</h2>
        <img src={australia1} alt="Australia" className="photo" />

        <img src={australia2} alt="Australia" className="photo" />

        <h2 className="photo-desc">Loch Ard Gorge, Victoria, AUS</h2>
        <img src={australia5} alt="Australia" className="photo" />

        <h2 className="photo-desc">Cradle Mountain, Tasmania, AUS</h2>
        <img src={australia3} alt="Australia" className="photo" />

        <img src={australia4} alt="Australia" className="photo" />

        <h2 className="photo-desc">Round Valley State Park, Lebanon, NJ, US</h2>
        <img src={round1} alt="Round Valley" className="photo" />

        <img src={round2} alt="Round Valley" className="photo" />

        <h2 className="photo-desc">Belleplain State Forest, Woodbine, NJ, US</h2>
        <img src={belleplain} alt="Belleplain" className="photo" />

        <h2 className="photo-desc">Ricketts Glen State Park, Benton, PA, US</h2>
        <img src={ricketts1} alt="Ricketts Glenn" className="photo" />

        <img src={ricketts2} alt="Ricketts Glenn" className="photo" />

        <h2 className="photo-desc">Benjamin Franklin Bridge, Philadelphia, PA, US</h2>
        <img src={ben1} alt="Benjamin Franklin Bridge" className="photo" />

        <img src={ben2} alt="Benjamin Franklin Bridge" className="photo" />

        <img src={ben3} alt="Benjamin Franklin Bridge" className="photo" />

        <h2 className="photo-desc">Montréal, Quebec, CA</h2>
        <img src={montreal1} alt="Montreal" className="photo" />

        <img src={montreal2} alt="Montreal" className="photo" />

        <img src={montreal3} alt="Montreal" className="photo" />

        <h2 className="photo-desc">New York City, NY, US</h2>
        <img src={nyc1} alt="New York City" className="photo" />

        <img src={nyc2} alt="New York City" className="photo" />

      </div>
    )
  }
}

export default Travel