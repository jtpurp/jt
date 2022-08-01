import React from 'react';
import '../styles/LinkList.css';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function LinkList() {
    return (
        <div>
            <div className="link-list">
                <Link to="/education" className="listed-link" id="link">Education</Link>
                <Link to="/experience" className="listed-link" id="link">Experience</Link>
                <Link to="/portfolio" className="listed-link" id="link">Portfolio</Link>
                <Link to="/flow-arts" className="listed-link" id="link">Flow Arts</Link>
                <Link to="/photos" className="listed-link" id="link">Photos</Link>
                <Link to="/music" className="listed-link" id="link">Music</Link>
            </div>
        </div>
    )
}

export default LinkList;

