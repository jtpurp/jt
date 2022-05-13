import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/FlowArts.css';

function FlowArts() {
  return (
    <div className="flow-arts">
      <h1>Flow Arts</h1>
     <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/2cf5o_altbM'
          width={300}
          height={500}
          controls={true}
        />
      </div> 

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/vCcTW70JiQ4'
          width={300}
          height={500}
          controls={true}
        />
      </div> 
      
       <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/T62mCefKoc8'
          width={300}
          height={500}
          controls={true}
        />
      </div> 

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/LgMe0ktm-rI'
          width={350}
          height={450}
          controls={true}
        />
      </div> 

      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://youtu.be/bMdO_usZbfo'
          width={350}
          height={450}
          controls={true}
        />
      </div>

    </div>
  )
}

export default FlowArts