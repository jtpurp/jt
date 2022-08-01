import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.js';
import TELogo from '../images/TELogo.png';
import UDLogo from '../images/UDLogo.png';
import '../styles/Education.css';

function Education() {

  //Loader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await new Promise((r) => setTimeout(r, 2200));
      setIsLoading(false);
    };

    load();
  })

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="education">
        <div className="current-container"><p className="current-page" id="page">Education</p></div>
        <div className="left-container" id="tech">
          <div className="info">
            <div className="tech-deets">
              <h2>Tech Elevator</h2>
              <h4>Philadelphia, PA</h4>
              <h5>January 2022 - April 2022</h5>
            </div>
            <div className="tech-desc">
              <p id="edu">Learned how to create dynamic web-based software systems involving:</p>
              <ul>
                <li>Object-Oriented Programming: Java, MVC Design</li>
                <li>Web Application Development: HTML, CSS, JavaScript, Spring Boot, Vue.js</li>
                <li>Database Programming: JDBC, Table Design, SQL, PostgreSQL, E/R diagrams</li>
                <li>Development Tools and Techniques: Agile, Unit Testing (JUnit), Integration Testing, Postman, Unix Command Line navigation, Git, IntelliJ, VS Code, pgAdmin 4</li>
              </ul>
            </div>
          </div>
          <a href="https://www.techelevator.com/?gclid=Cj0KCQjwyMiTBhDKARIsAAJ-9VvXOEenb2L4vbABYmV758c7tHYbH0evBt7zo9FaOxIcB-Jih8lfl1UaAj88EALw_wcB" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-edu" src={TELogo} alt='Tech Elevator Logo' /></a>
        </div>

        <div className="main-flex">
          <div className="right-container" id="ud">
            <a href="https://www.udel.edu/" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-edu" src={UDLogo} alt='University of Delaware Logo' /></a>
            <div className="info">
              <div className="ud-deets">
                <h2>University of Delaware</h2>
                <h4>Newark, DE</h4>
                <h5>September 2014 - May 2020</h5>
              </div>
              <div className="ud-desc">
                <p id="edu">Master in Civil Engineering - GPA: 3.633/4.000</p>
                <p id="edu">Concentration - Structural Engineering</p>
                <ul>
                  <li>Thesis Publication – <a href="https://udspace.udel.edu/bitstream/handle/19716/28753/Rupp_udel_0060M_14171.pdf?sequence=1&isAllowed=y" target="_blank" rel="noreferrer" id="edu-link">Uncoated Weathering Steel Bridge Data Collection and Performance Assessment: Bridge Maintenance Practices, Deicing Agent Use, and Field Sampling</a></li>
                </ul>

                <p id="edu">Bachelor in Civil Engineering - GPA: 3.384/4.000</p>
                <p id="edu">Minor in Business Administration</p>
                <ul>
                  <li>Research Report – <a href="https://www.linkedin.com/in/jtrupp/details/experience/1635490250690/single-media-viewer/" target="_blank" rel="noreferrer" id="edu-link">Utilizing Carbon Nanotube-Based Sensing Skin to Mitigate Issues of Fatigue in Steel Members</a></li>
                  <li>Study Abroad - Swinburne University, Melbourne, Australia</li>
                </ul>
              </div>
            </div>
            <a href="https://www.udel.edu/" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-edu" src={UDLogo} alt='University of Delaware Logo' /></a>
          </div>
        </div>

      </div>
    )
  }
}

export default Education