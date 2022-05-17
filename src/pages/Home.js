import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home-flex">
            <div className="home-container">
                <h1 id="hello">H E L L O</h1>
                <div id="my-name">
                    <span>My name is</span><span className="bio-word" id="jt"> JT Rupp </span><span>(he/they)</span>
                </div>
                <span id="small-text">and I'm an</span>
                <div className="bio-container">
                    <div>
                        <span id="bio" className="no-show">⚙️</span><span className="bio-word" id="bio">Engineer</span><span id="bio">⚙️</span>
                    </div>
                    <div>
                        <span id="bio" className="no-show">🌀</span><span className="bio-word" id="bio">Flow Artist</span><span id="bio">🌀</span>
                    </div>
                    <div>
                        <span id="bio" className="no-show">🎶</span><span className="bio-word" id="bio">Music Enthusiast</span><san id="bio">🎶</san>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home