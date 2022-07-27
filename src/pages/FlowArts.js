import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.js';
import ReactPlayer from 'react-player';
import '../styles/FlowArts.css';

function FlowArts() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await new Promise((r) => setTimeout(r, 2200));
      setIsLoading(false);
    };

    load();
  })

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="flow-arts">
        <h1>Flow Arts</h1>

        <div className="videos-container">

          <div className='player-wrapper' id="assassin">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/NlWflFV_-Ko'
              width={270}
              height={350}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="flutter">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/p7mghPShPQc'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="circles">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/2cf5o_altbM'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          {/* <div className='player-wrapper' id="someone">
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/8VYhqNB751o'
            width={280}
            height={500}
            controls={true}
          />
          </div> */}

          <div className='player-wrapper' id="bloom">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/vCcTW70JiQ4'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="alive">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/T62mCefKoc8'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="life-on-hold">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/SxWMGp3zfVE'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="riptide">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/LgMe0ktm-rI'
              width={270}
              height={350}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="snowcone">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/wk6uneSMn0c'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="another-world">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/OATiLRL1C4Q'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          {/* <div className='player-wrapper' id="tauk">
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/PnEPBltqpqk'
            width={280}
            height={500}
            controls={true}
          />
          </div> */}

          <div className='player-wrapper' id="shooting-arrows">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/vZx7AsDewPM'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="kanzan">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/19cH94Mvpt4'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="miles">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/Vno4M3HdG1k'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="take-some-time">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/EHmjjWu4iT8'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="healing">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/2SP7rcnxqx8'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          {/* <div className='player-wrapper' id="ben">
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/lxDuEgOEPiI'
            width={280}
            height={500}
            controls={true}
          />
          </div> */}

          {/* <div className='player-wrapper' id="mercy">
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/t7vYKxiSDF4'
            width={280}
            height={500}
            controls={true}
          />
          </div> */}

          {/* <div className='player-wrapper' id="groundhog-day">
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/eWwcayKTVtk'
            width={280}
            height={500}
            controls={true}
          />
          </div> */}

          <div className='player-wrapper' id="traitor">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/EZT5ZWzFw2s'
              width={250}
              height={440}
              controls={true}
            />
          </div>

          <div className='player-wrapper' id="gravity">
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/bMdO_usZbfo'
              width={270}
              height={350}
              controls={true}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default FlowArts