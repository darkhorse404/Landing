import React from 'react';
import { AiOutlineCreditCard, AiOutlineBarChart  } from 'react-icons/ai';
import images from '../../constants/images';
import './About.css';


const About = () => {
  return (
    <div>
    <div className='app__about section__padding'>
      <div className="app__about-content-1">
        <h1>THE AMAZING NFT ART OF THE WORLD HERE</h1>
      </div>
      <div className="app__about-content-2">
        <AiOutlineCreditCard className='icon'/>
        <div>
          <h2>Fast Transaction</h2>
          <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
        </div>
      </div>
      <div className="app__about-content-3">
        <AiOutlineBarChart className='icon' />
          <div>
            <h2>Growth Transaction</h2>
            <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
          </div>
      </div>
    </div>
    <div className='app__about section__padding'>
      <div className="flex app__about-content-1">
        <img className="relative top-0 w-24 rounded-lg" src={images.IndianPost} alt="Image Collection 2" />
        <h1 className='text-center align-middle mx-3.5 m-3 text-red-700'>India Post</h1>
      </div>
      <div className="app__about-content-2">
        <AiOutlineCreditCard className='icon'/>
        <div>
          <h2>Fast Transaction</h2>
          <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
        </div>
      </div>
      <div className="app__about-content-3">
        <AiOutlineBarChart className='icon' />
          <div>
            <h2>Growth Transaction</h2>
            <p className='p__font1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
          </div>
      </div>
    </div>
    </div>
    
  )
}

export default About;