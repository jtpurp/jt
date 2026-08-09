import React from 'react';
import '../styles/LinkList.css';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function LinkList() {
    return (
        <div>
            <div className="link-list">
                <Link to="/experience" className="listed-link" id="link">EXPERIENCE</Link>
                <Link to="/education" className="listed-link" id="link">EDUCATION</Link>
                <Link to="/portfolio" className="listed-link" id="link">PORTFOLIO</Link>
                <Link to="/flow-arts" className="listed-link" id="link">FLOW ARTS</Link>
                <Link to="/travel" className="listed-link" id="link">TRAVEL</Link>
                <Link to="/music" className="listed-link" id="link">MUSIC</Link>
            </div>
        </div>
    )
}

export default LinkList;

