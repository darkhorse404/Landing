import React, {useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi';
import {MdClose} from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../asset/BharatSe_logo2.png'
import smalllogo from '../../asset/logo1.png'
import './Navbar.css';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <nav className='app__navbar w-screen fixed top-0 shadow-2xl'>
    <div className="app__navbar-logo">
      <img className='h-full w-full object-cover' src={logo}></img>
    </div>
    <div className="app__navbar-logo_small">
      <img className='h-full w-full object-cover' src={smalllogo}></img>
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
    <div className="app__navbar-smallscreen items-center">
      
        {toggleMenu?<MdClose color='#eaeaea' className='-mr-2' fontSize={34} onClick={() =>{toggleMenu?setToggleMenu(false):setToggleMenu(true)} }/>:<GiHamburgerMenu color='#eaeaea' fontSize={27} onClick={() =>{toggleMenu?setToggleMenu(false):setToggleMenu(true)} } />}
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay slide-bottom flex flex-col items-end fixed top-16 right-2'>
            {/* <MdClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} /> */}
            <ul className='app__navbar-smallscreen-links items-end'>
              <li className='my-2 text-right'><a href="#">Marketplace</a></li>
              <li className='my-2 text-right'><a href="#">Resource</a></li>
              <li className='my-2 text-right'><a href="#">About</a></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
  )
}
export default Navbar;