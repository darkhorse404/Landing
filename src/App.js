import React from 'react';
import { About, Collection, Create, Discover, Home, Top } from './container';
import { Navbar, Footer } from './components';
import './App.css';
import bgvideo from './asset/bgvid.mp4'

const App = () => (
  <div>
    <Navbar />
    <div clasName="h-screen w-screen p-0 mx-0 overflow-hidden flex justify-center items-center"><video className="h-screen w-screen overflow-x-hidden mx-0 px-0 object-cover" autoplay="true" loop="true" muted><source src={bgvideo} type="video/mp4" /></video>
      <div className='absolute h-screen w-full top-0 flex justify-center items-center -z-2'>
        <div class="flex flex-col h-max text-white text-xl">
          <h1 className='text-5xl text-orange-400 text-center'>Bharat<span class="text-green-400">Se</span></h1>
          <p className='my-5'>Delivering Happiness to your doorstep</p>
          <button className='py-3 px-5 button_3'>Get Started</button>
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