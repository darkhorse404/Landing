import React, {useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../asset/BharatSe_logo2.png'
import './Navbar.css';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
  <div className="w-screen">
    <nav className='app__navbar w-full fixed top-0 '>
      <div className="app__navbar-logo">
        <img className='h-full w-full object-cover' src={logo}></img>
      </div>
      <div className="app__navbar-links">
        <ul>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Resource</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div className="app__navbar-search bg-transparent">
        <div className="search">
          <input type="text" className='bg-transparent text-white' placeholder='Search' />
          <AiOutlineSearch className='search__icon' />
        </div>
      </div>
      <div className="app__navbar-button">
        <button className='button_1'>Connect Wallet</button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#3D00B7' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen-links'>
              <li><a href="#">Marketplace</a></li>
              <li><a href="#">Resource</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  </div>
  )
}
export default Navbar;