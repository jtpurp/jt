import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Portfolio from './components/Portfolio.js';
import FlowArts from './components/FlowArts.js';
import Photos from './components/Photos.js';
import Music from './components/Music.js';
import MusicDetail from './components/MusicDetail.js'
import Home from './components/Home.js';
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
            <Switch>
              <ReloadAtTop />
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
