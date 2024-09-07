import React from 'react';
import { About, Collection, Create, Discover, Home, Top } from './container';
import { Navbar, Footer } from './components';
import './App.css';
import bgvideo from './asset/bgvid.mp4'

const App = () => (
  <div>
    <Navbar />
    <div clasName="h-screen w-screen p-0 mx-0 overflow-hidden"><video className="h-screen w-screen overflow-x-hidden mx-0 px-0" autoplay="true" loop="true" muted><source src={bgvideo} type="video/mp4" /></video></div>
    <Home />
    <About />
    <Top />
    <Collection />
    <Create />
    <Discover />
    <Footer />
  </div>
)

export default App;