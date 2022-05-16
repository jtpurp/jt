import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Education from './pages/Education.js';
import Experience from './pages/Experience.js';
import Portfolio from './pages/Portfolio.js';
import FlowArts from './pages/FlowArts.js';
import Photos from './pages/Photos.js';
import Music from './pages/Music.js';
import MusicDetail from './pages/MusicDetail.js'
import Home from './pages/Home.js';
import ReloadAtTop from './ReloadAtTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="cont">
        <BrowserRouter basename="/jt">
          <div className="head">
            <Navbar />
          </div>
          <div className="bod">
          <ReloadAtTop />
            <Switch>
              <Route path='/education' component={Education}></Route>
              <Route path='/experience' component={Experience}></Route>
              <Route path='/portfolio' component={Portfolio}></Route>
              <Route path='/flow-arts' component={FlowArts}></Route>
              <Route path='/music/:musicId' component={MusicDetail}></Route>
              <Route path='/music' component={Music}></Route>
              <Route path='/photos' component={Photos}></Route>
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

export default App;
