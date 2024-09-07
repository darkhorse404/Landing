import React from 'react';
import { About, Collection, Create, Discover, Home, Top } from './container';
import { Navbar, Footer } from './components';
import './App.css';
import bgvideo from './asset/bgvid.mp4'

const App = () => (
  <div>
    <Navbar />
    <div clasName="h-screen w-screen p-0 mx-0 overflow-hidden flex justify-center items-center"><video className="object-cover w-screen h-screen px-0 mx-0 overflow-x-hidden" autoplay="true" loop="true" muted><source src={bgvideo} type="video/mp4" /></video>
      <div className='absolute top-0 flex items-center justify-center w-full h-screen -z-2'>
        <div class="flex flex-col h-max text-white text-xl">
          <h1 className='text-center text-7xl Bharat'>Bharat<span class="text-green-700">Se</span></h1>
          <p className='my-5 text-3xl'>Your Gateway to the Heart of India's Cultural Roots and Ethnic Heritage</p>
          <button className='px-5 py-3 button_3'>Get Started</button>
        </div>
      </div>
    </div>
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