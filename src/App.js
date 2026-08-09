import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Education from './pages/Education.js';
import Experience from './pages/Experience.js';
import Portfolio from './pages/Portfolio.js';
import FlowArts from './pages/FlowArts.js';
import Travel from './pages/Travel.js';
import Music from './pages/Music.js';
import MusicDetail from './pages/MusicDetail.js'
import Home from './pages/Home.js';
import ReloadAtTop from './ReloadAtTop';
import Background from './images/Background.jpg';
import BackgroundVert from './images/BackgroundVert.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useVerticalBackground: window.innerWidth <= 900
    };
  }

  componentDidMount() {
    this.handleResize = () => {
      this.setState({
        useVerticalBackground: window.innerWidth <= 900
      });
    };

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { useVerticalBackground } = this.state;
    const activeBackground = useVerticalBackground ? BackgroundVert : Background;

    const myStyle = {
      backgroundImage: `url(${activeBackground})`,
      marginTop: '0px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };
    return (
      <div className="App" style={myStyle}>
        <div className="cont">
          <BrowserRouter basename="/jtpurp">
            <div className="head">
              <Navbar />
            </div>
            <div className="bod">
              <ReloadAtTop />
              <Switch>
                <Route path='/experience' component={Experience}></Route>
                <Route path='/education' component={Education}></Route>
                <Route path='/portfolio' component={Portfolio}></Route>
                <Route path='/flow-arts' component={FlowArts}></Route>
                <Route path='/music/:musicId' component={MusicDetail}></Route>
                <Route path='/music' component={Music}></Route>
                <Route path='/travel' component={Travel}></Route>
                <Route path='/' component={Home}></Route>
              </Switch>
            </div>
            <div className="foot">
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
