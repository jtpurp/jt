import React from 'react';
import LogoPlain from '../images/LogoPlain.png';
import '../styles/Spinner.css';

function Spinner() {
    return (
    <div className="spinner-container">
        <img src={LogoPlain} className="spinner" alt="Logo Spinner"/>
            <img src={LogoPlain} className="anti-spinner" alt="Logo Spinner"/>
                <img src={LogoPlain} className="same-spinner" alt="Logo Spinner"/>
    </div>
  )
}

export default Spinner