import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner.js';
import LogoPurple from '../images/LogoPurple.png';
import PTLogo from '../images/PTLogo.png';
import Payment from '../images/Payment.png';
import Vending from '../images/Vending.png';
import Wellness from '../images/Wellness.png';
import Road from '../images/Road.png';
import Composite from '../images/Composite.png';
import Beam from '../images/Beam.png';
import Unsymmetric from '../images/Unsymmetric.png';
import Weathering from '../images/Weathering.png';
import Carbon from '../images/Carbon.png';
import FDRRepair from '../images/FDRRepair.png';
import RedToad from '../images/RedToad.png';
import '../styles/Portfolio.css';

function Portfolio() {

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
      <div className="portfolio">

        <div className="technical-projects">
          <h1>Technical Projects</h1>

          <div className="left-container" id="website">
            <div className="info">
              <div className="desc">
                <h2>This Website</h2>
                <p className="proj-desc">A place to organize and express my education, professional experience, projects, hobbies, and interests in a creative way.
                  The Education, Experience, and Portfolio pages detail my accomplishments along with corresponding images that are links to external references.
                  My hobbies and interests are showcased in the Flow Arts, Photos, and Music pages.
                  The Flow Arts page displays some clips of my favorite flow moments, the Photos page contains some of my favorite pictures I’ve taken, and the Music page serves as a place for visitors to share and explore music suggestions as well as listen to some of my music picks!</p>
                <h6 className="technologies">Technologies – React.js, JSX, JavaScript, HTML, CSS, Spring Boot, Java, PostgreSQL</h6>
              </div>
            </div>
            <a href="https://jtpurp.github.io/jt/" id="logo-left"><img className="logo-port" src={LogoPurple} alt='Website Logo' /></a>
          </div>

          <div className="main-flex">
            <div className="right-container" id="pothole">
              <a href="https://github.com/jtpurp/Pothole-Tracker" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-port" src={PTLogo} alt='Pothole Tracker Logo' /></a>
              <div className="info">
                <div className="desc">
                  <h2>Pothole Tracker</h2>
                  <p className="proj-desc" id="left-align">A mob programmed, full-stack, responsively designed web application intended for reporting and tracking potholes across the City of Philadelphia.
                    A list of the reported potholes is displayed along with their corresponding geolocations marked on a map.
                    Individual pothole details can be accessed as well as updated and deleted from the system.</p>
                  <h6 className="technologies" id="left-align">Technologies – Vue.js, JavaScript, HTML, CSS, Mapbox API, Spring Boot, Java, PostgreSQL</h6>
                </div>
              </div>
              <a href="https://github.com/jtpurp/Pothole-Tracker" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-port" src={PTLogo} alt='Pothole Tracker Logo' /></a>
            </div>
          </div>

          <div className="left-container" id="payment">
            <div className="info">
              <div className="desc">
                <h2>Online Payment Transfer Service</h2>
                <p className="proj-desc">A pair programmed RESTful API server and command-line application that allows authenticated users to transfer monetary payments between one another.
                  Users can also view a list of transfers they’ve sent or received as well as details regarding any individual transfer.</p>
                <h6 className="technologies">Technologies – Java, Spring Boot, JUnit, PostgreSQL</h6>
              </div>
            </div>
            <a href="https://github.com/jtpurp/Online-Payment-Transfer-Service" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-port" src={Payment} alt='Payment Service' /></a>
          </div>

          <div className="main-flex">
            <div className="right-container" id="vending">
              <a href="https://github.com/jtpurp/Vending-Machine-Application" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-port" src={Vending} alt='Vending Machine' /></a>
              <div className="info">
                <div className="desc">
                  <h2>Vending Machine Application</h2>
                  <p className="proj-desc" id="left-align">A pair programmed Java application intended to operate as a command-line for a vending machine.
                    The user can navigate through a menu designed to interact with the machine in terms of displaying available items, purchasing items, and receiving change.
                    The application has the ability to read an inventory file, process user input, handle vending transactions, and write to an audit log.</p>
                  <h6 className="technologies" id="left-align">Technologies – Java, JUnit</h6>
                </div>
              </div>
              <a href="https://github.com/jtpurp/Vending-Machine-Application" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-port" src={Vending} alt='Vending Machine' /></a>
            </div>
          </div>

          <div className="left-container" id="wellness">
            <div className="info">
              <div className="desc">
                <h2>Wellness Application</h2>
                <p className="proj-desc">A Java application intended to help improve users' mental health through journaling as well as keeping track of goals to manifest and positive self-affirmations.
                  Each journal is uploaded to a user’s journal directory for them to save and view past entries.</p>
                <h6 className="technologies">Technologies – Java</h6>
              </div>
            </div>
            <a href="https://github.com/jtpurp/Wellness-Application" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-port" src={Wellness} alt='Mental Health' /></a>
          </div>
        </div>

        <div className="engineering-projects">
          <h1>Engineering Projects</h1>

          <div className="main-flex">
            <div className="right-container" id="road">
              <a href="https://github.com/jtpurp/Roadway-Grading-Design" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-port" src={Road} alt='Road Grade Sign' /></a>
              <div className="info">
                <div className="desc">
                  <h2>Roadway Grading Design Program</h2>
                  <p className="proj-desc" id="left-align">An Excel program developed to expedite the process of designing roadway grades and to report construction cost estimates based on input design parameters.</p>
                </div>
              </div>
              <a href="https://github.com/jtpurp/Roadway-Grading-Design" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-port" src={Road} alt='Road Grade Sign' /></a>
            </div>
          </div>

          <div className="left-container" id="composite">
            <div className="info">
              <div className="desc">
                <h2>Composite Concrete Beam Design Program</h2>
                <p className="proj-desc">A Mathcad program that calculates loading limitations and facilitates design of composite concrete beams based on input design parameters while adhering to ACI Building Code requirements.</p>
              </div>
            </div>
            <a href="https://github.com/jtpurp/Composite-Concrete-Beam-Design" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-port" src={Composite} alt='Composite Concrete Bridge' /></a>
          </div>

          <div className="main-flex">
            <div className="right-container" id="beam">
              <a href="https://github.com/jtpurp/AASHTO-I-Beam-Design" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-port" src={Beam} alt='I-Beam' /></a>
              <div className="info">
                <div className="desc">
                  <h2>AASHTO I-Beam Design Program</h2>
                  <p className="proj-desc" id="left-align">An Excel program that calculates loading limitations and facilitates design of structural steel I-beams based on input design parameters while adhering to AASHTO LRFD standards.</p>
                </div>
              </div>
              <a href="https://github.com/jtpurp/AASHTO-I-Beam-Design" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-port" src={Beam} alt='I-Beam' /></a>
            </div>
          </div>

          <div className="left-container" id="unsymmetric">
            <div className="info">
              <div className="desc">
                <h2>Unsymmetric Bending Design Program</h2>
                <p className="proj-desc" id="left-align">An Excel program that can be used to calculate stresses in beams with different cross-sections experiencing unsymmetric bending based on input design parameters.</p>
              </div>
            </div>
            <a href="https://github.com/jtpurp/Unsymmetric-Bending-Design" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-port" src={Unsymmetric} alt='Unsymmetric Bending' /></a>
          </div>

          <div className="main-flex">
            <div className="right-container" id="weathering">
              <a href="https://udspace.udel.edu/bitstream/handle/19716/28753/Rupp_udel_0060M_14171.pdf?sequence=1&isAllowed=y" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-port" src={Weathering} alt='Weathering Steel Bridge' /></a>
              <div className="info">
                <div className="desc">
                  <h2>Thesis Publication</h2>
                  <h5>Uncoated Weathering Steel Bridge Data Collection and Performance Assessment: Bridge Maintenance Practices, Deicing Agent Use, and Field Sampling</h5>
                  <ul className="proj-desc" id="left-align">
                    <li>Assessed long-term performance of uncoated weathering steel (UWS) bridges in the U.S.</li>
                    <li>Developed inspection protocols and collected rust samples from UWS bridges in the field</li>
                    <li>Managed and analyzed a database consisting of performance and environmental data for UWS bridges across the U.S.</li>
                  </ul>
                </div>
              </div>
              <a href="https://udspace.udel.edu/bitstream/handle/19716/28753/Rupp_udel_0060M_14171.pdf?sequence=1&isAllowed=y" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-port" src={Weathering} alt='Weathering Steel Bridge' /></a>
            </div>
          </div>

          <div className="left-container" id="carbon">
            <div className="info">
              <div className="desc">
                <h2>Research Report</h2>
                <h5>Utilizing Carbon Nanotube-Based Sensing Skin to Mitigate Issues of Fatigue in Steel Members</h5>
                <ul className="proj-desc">
                  <li>Contributed to the improvement of methods for acquiring strain data from steel members by researching carbon nanotube-based sensing skin</li>
                  <li>Instrumented strain gauges to steel beams to collect data in the lab and in the field</li>
                  <li>Developed a research report to organize and summarize findings</li>
                </ul>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/jtrupp/details/experience/1635490250690/single-media-viewer/" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-port" src={Carbon} alt='Carbon Nanotube-Based Sensing Skin' /></a>
          </div>

          <div className="main-flex">
            <div className="right-container" id="fdr">
              <a href="https://www.linkedin.com/in/jtrupp/details/experience/1635490070022/single-media-viewer/" target="_blank" rel="noreferrer" id="logo-right" className="bigger-screen"><img className="logo-port" src={FDRRepair} alt='FDR Repair Detail' /></a>
              <div className="info">
                <div className="fdr-desc">
                  <h2>Franklin D. Roosevelt (FDR) Drive Repairs</h2>
                  <p className="proj-desc" id="left-align">A collection of steel reinforcement and concrete pedestal repair reports and details made using AutoCAD for the FDR Drive.</p>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/jtrupp/details/experience/1635490070022/single-media-viewer/" target="_blank" rel="noreferrer" id="logo-right" className="smaller-screen"><img className="logo-port" src={FDRRepair} alt='FDR Repair Detail' /></a>
            </div>
          </div>

          <div className="left-container" id="red-toad">
            <div className="info">
              <div className="red-toad-desc">
                <h2>Senior Design Project</h2>
                <ul className="proj-desc">
                  <li>Conferred with classmates as a mock engineering firm to design a site expansion project</li>
                  <li>Redesigned a bridge and retaining wall using AutoCAD with cost estimates and TS&L plans</li>
                </ul>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/jtrupp/details/experience/1612920381877/single-media-viewer/" target="_blank" rel="noreferrer" id="logo-left"><img className="logo-port" src={RedToad} alt='Red Toad Engineering Logo' /></a>
          </div>

        </div>

      </div>
    )
  }
}

export default Portfolio