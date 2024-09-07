import React from 'react';
import { AiOutlineCreditCard, AiOutlineBarChart  } from 'react-icons/ai';
import images from '../../constants/images';
import './About.css';


const About = () => {
  return (
    <div>
    <div className='app__about px-16 pt-16 mt-20'>
      <div className="app__about-content-1">
        <h1>SEEMLESS DELIVERIES ACROSS THE WORLD WITH OUR VERY OWN</h1>
      </div>
      <div className="app__about-content-2">
        <AiOutlineCreditCard className='icon'/>
        <div>
          <h2>FAST AND SECURE</h2>
          <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
        </div>
      </div>
      <div className="app__about-content-3">
        <AiOutlineBarChart className='icon' />
          <div>
            <h2>QUALITY ASSURANCE WITH NFTs</h2>
            <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
          </div>
      </div>
    </div>
    <div className='app__about px-16 pb-16 pt-10 mb-20'>
      <div className="flex app__about-content-1 content-center">
        <img className="relative ps-6 w-24 rounded-lg content-center" src={images.IndianPost} alt="Image Collection 2" />
        <h1 className='text-center align-middle mx-3.5 m-3 text-red-700'>India Post</h1>
      </div>
      <div className="app__about-content-2">
        <AiOutlineCreditCard className='icon'/>
        <div>
          <h2>CUSTOMIZED RECCOMENDATIONS</h2>
          <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
        </div>
      </div>
      <div className="app__about-content-3">
        <AiOutlineBarChart className='icon' />
          <div>
            <h2>PROMOTION INDIAN ARTISTS & HERITAGE</h2>
            <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default About;