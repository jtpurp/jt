import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.js';
import '../styles/Home.css';

function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            await new Promise((r) => setTimeout(r, 2225));
            setIsLoading(false);
        };

        load();
    })

    if (isLoading) {
        return <Spinner />
    } else {
        return (
            <div>
                <div className="current-container"><p className="current-page" id="page">WELCOME</p></div>
                <div id="hello-container">
                    <h1 className="hello" id="h">H</h1><h1 className="hello" id="e">E</h1><h1 className="hello" id="l1">L</h1><h1 className="hello" id="l2">L</h1><h1 className="hello" id="o">O</h1>
                </div>
                <div id="bio">
                    <div id="my-name">
                        <span>My name is</span><span className="gradient-word" id="jt"> JT Rupp </span>
                    </div>
                    <div id="small-line"></div>
                    <div id="skill-container">
                        <div className="skill">
                            <div id="skill1">⚙️</div><div className="gradient-word" id="skill1">Engineer</div><div id="skill1">⚙️</div>
                        </div>
                        <div className="skill">
                            <div id="skill2">🌀</div><div className="gradient-word" id="skill2">Flow Artist</div><div id="skill2">🌀</div>
                        </div>
                        <div className="skill">
                            <div id="skill3">🌐</div><div className="gradient-word" id="skill3">Traveler</div><div id="skill3">🌐</div>
                        </div>
                        <div className="skill">
                            <div id="skill4">🎶</div><div className="gradient-word" id="skill4">Music Enthusiast</div><div id="skill4">🎶</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home