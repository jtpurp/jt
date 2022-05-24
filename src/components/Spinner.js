import React from 'react';
import LogoPlain from '../images/LogoPlain.png';
import '../styles/Spinner.css';
import '../styles/Spinner.scss';

function Spinner() {
    return (
    <div className="spinner-container">
        <img src={LogoPlain} className="spinner" alt="Logo Spinner"/>
            <img src={LogoPlain} className="anti-spinner" alt="Logo Spinner"/>
                <img src={LogoPlain} className="same-spinner" alt="Logo Spinner"/>
                <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
	</div>

	<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<filter id="goo">
				<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="9" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -7" result="goo" />
				<feBlend in2="goo" in="SourceGraphic" result="mix" />
			</filter>
		</defs>
	</svg>
        
    </div>
  )
}

export default Spinner