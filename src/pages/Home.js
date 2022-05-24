import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.js';
import '../styles/Home.css';

function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            await new Promise((r) => setTimeout(r, 2500));
            setIsLoading(false);
        };

        load();
    })

    if (isLoading) {
        return <Spinner />
    } else {
        return (
            <div className="home-container">
                <h1 id="hello">H E L L O</h1>
                <div id="my-name">
                    <span>My name is</span><span className="bio-word" id="jt"> JT Rupp </span><span>(he/they)</span>
                </div>
                <span id="small-text">and I'm an</span>
                <div className="bio-container">
                    <div>
                        <span id="bio" className="no-show">⚙️</span><span className="bio-word" id="bio">Engineer</span><span className="show" id="bio">⚙️</span>
                    </div>
                    <div>
                        <span id="bio" className="no-show">🌀</span><span className="bio-word" id="bio">Flow Artist</span><span className="show" id="bio">🌀</span>
                    </div>
                    <div>
                        <span id="bio" className="no-show">🎶</span><span className="bio-word" id="bio">Music Enthusiast</span><span className="show" id="bio">🎶</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home