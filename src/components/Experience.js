import React from 'react'
import VNHLogo from '../images/VNHLogo.png';
import AECOMLogo from '../images/AECOMLogo.png';
import HDRLogo from '../images/HDRLogo.png';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h1>Technical Skills</h1>
      <div className="skills-flex">
        <div id="skills">
          <p id="skills-p">Java</p>
          <p id="skills-p">•</p>
          <p id="skills-p">IntelliJ</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Spring Boot</p>
          <p id="skills-p">•</p>
          <p id="skills-p">PostgreSQL</p>
          <p id="skills-p">•</p>
          <p id="skills-p">pgAdmin 4</p>
          <p id="skills-p">•</p>
          <p id="skills-p">React.js</p>
          <p id="skills-p">•</p>
          <p id="skills-p">JSX</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Vue.js</p>
          <p id="skills-p">•</p>
          <p id="skills-p">JavaScript</p>
          <p id="skills-p">•</p>
          <p id="skills-p">HTML</p>
          <p id="skills-p">•</p>
          <p id="skills-p">CSS</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Responsive Design</p>
          <p id="skills-p">•</p>
          <p id="skills-p">VS Code</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Git</p>
          <p id="skills-p">•</p>
          <p id="skills-p">JUnit</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Postman</p>
          <p id="skills-p">•</p>
          <p id="skills-p">JSON</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Mathcad</p>
          <p id="skills-p">•</p>
          <p id="skills-p">MATLAB</p>
          <p id="skills-p">•</p>
          <p id="skills-p">AutoCAD</p>
          <p id="skills-p">•</p>
          <p id="skills-p">STAAD</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Python</p>
          <p id="skills-p">•</p>
          <p id="skills-p">Data Analytics</p>
        </div>
      </div>

      <h1>Professional Experience</h1>
      <div className="left-container" id="vnh">
        <div className="info">
          <div className="vnh-deets">
            <h2>Van Note-Harvey Associates, Inc.</h2>
            <h4>Civil Design Engineer</h4>
            <h5>Cape May Court House, NJ</h5>
            <h6>April 2021 - November 2021</h6>
          </div>
          <div className="vnh-desc">
            <ul>
              <li>Utilized AutoCAD to design roadway gradings, drainage systems, and parking lot striping</li>
              <li>Designed a reinforced concrete support beam following ACI building code requirements</li>
              <li>Inspected and documented roadway and utility construction projects using PlanGrid</li>
            </ul>
          </div>
        </div>
        <a href="https://vannoteharvey.com/" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-exp" src={VNHLogo} alt='Van Note-Harvey Associates, Inc. Logo' /></a>
      </div>

      <div className="main-flex">
        <div className="right-container" id="aecom">
          <a href="https://aecom.com/" target="_blank" rel="noreferrer" id="logo-right"><img className="logo-exp" src={AECOMLogo} alt='AECOM Logo' /></a>
          <div className="info">
            <div className="aecom-deets">
              <h2>AECOM</h2>
              <h4>Structural Engineer</h4>
              <h5>Philadelphia, PA</h5>
              <h6>June 2020 - March 2021</h6>
            </div>
            <div className="aecom-desc">
              <ul>
                <li>Inspected and documented the Benjamin Franklin Bridge (BFB) cable rehabilitation project</li>
                <li>Reviewed and revised BFB cable rehabilitation project submitalls</li>
                <li>Managed BFB cable rehabilitation project documents, meeting minutes, and other field office tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="left-container" id="hdr">
        <div className="info">
          <div className="hdr-deets">
            <h2>HDR, Inc.</h2>
            <h4>Construction Inspector</h4>
            <h5>New York City, NY</h5>
            <h6>June 2018 - November 2018</h6>
          </div>
          <div className="hdr-desc">
            <ul>
              <li>Inspected and documented the Franklin D. Roosevelt (FDR) Drive painting project</li>
              <li>Developed steel reinforcement and concrete pedestal repair reports and details along with construction cost estimates for the FDR Drive using AutoCAD</li>
            </ul>
          </div>
        </div>
        <a href="https://www.hdrinc.com/" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-exp" src={HDRLogo} alt='HDR, Inc. Logo' /></a>
      </div>

    </div>
  )
}

export default Experience