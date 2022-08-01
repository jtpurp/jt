import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkList from '../components/LinkList.js'
// import MusicPlayer from '../components/MusicPlayer.js'
import LogoPurple from '../images/LogoPurple.png';
import '../styles/Navbar.css';

function Navbar() {

    const [isLinkListShown, setIsLinkListShown] = useState(false);
    const showLinkList = event => {
        setIsLinkListShown(current => !current);
    }


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="flex-left">
                    <Link to="/education" className="education" id="link">Education</Link>
                    <Link to="/experience" className="experience" id="link">Experience</Link>
                    <Link to="/portfolio" className="portfolio" id="link">Portfolio</Link>
                </div>
                    <div className="flex-center">
                        <Link to="/" className="home" id="logo-link"><img id="logo" src={LogoPurple} alt='Home' /></Link>
                    </div>
                <div className="flex-right">
                    <Link to="/flow-arts" className="flow-arts" id="link">Flow Arts</Link>
                    <Link to="/photos" className="photos" id="link">Photos</Link>
                    <Link to="/music" className="music" id="link">Music</Link>
                </div>

                <div className="responsive-menu">
                    <div>
                        <Link to="/" className="home" id="logo-link"><img id="logo" src={LogoPurple} alt='Home' /></Link>
                    </div>
                    <div className="drop" onClick={showLinkList}>
                        <div id="dot1"></div><div id="dot2"></div><div id="dot3"></div>
                    </div>
                </div>
            </div>
            <div className="responsive-menu">
                {isLinkListShown && <div onClick={showLinkList}><LinkList /></div>}
            </div>
        </nav>
    )
}

export default Navbar;