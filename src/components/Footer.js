import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { HiOutlineMail } from "react-icons/hi";
// import { HiOutlinePhone } from "react-icons/hi";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <ul className="social-icons">
          <li><a href="https://www.linkedin.com/in/jtrupp/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fab fa-linkedin fa-3x" icon={faLinkedin}></FontAwesomeIcon></a></li>
          <li><a href="https://github.com/jtpurp" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fab fa-github fa-3x" icon={faGithub}></FontAwesomeIcon></a></li>
          <li><a href="https://www.instagram.com/jt.purp/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="fab fa-instagram fa-3x" icon={faInstagram}></FontAwesomeIcon></a></li>
        </ul>

        {/* <div className="contact-container"> */}
          {/* <div id="email"> */}
            {/* <span></span> */}
              {/* <HiOutlineMail /> */}
          {/* </div> */}
          {/* <a className="resume" href="" target="_blank" rel="noreferrer">Resume</a> */}
          {/* <div id="phone"> */}
            {/* <span></span> */}
              {/* <HiOutlinePhone /> */}
          {/* </div> */}
        {/* </div> */}
    </div>
  )
}

export default Footer