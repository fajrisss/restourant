import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

 
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>

      <div className="app__navbar-logo">
        <h2>Unch-Unch</h2>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opnensans"> <a href="#home">home</a> </li>
        <li className="p__opnensans"> <a href="#about">about</a> </li>
        <li className="p__opnensans"> <a href="#menu">menu</a> </li>
        <li className="p__opnensans"> <a href="#awards">awards</a> </li>
        <li className="p__opnensans"> <a href="#contact">contact</a> </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / register</a>
        <div />
        <a href="/" className="p__opensans">book table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='fff' fontSize={27} onClick={() =>setToggleMenu(true)}/>

        {toggleMenu &&(
        <div className="app__navbar-smallscreen_overlay flex-center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() =>setToggleMenu(false)}/>
          <ul className="app__navbar-smallscreen-links">
            <li className="p__opnensans"> <a href="#home">home</a> </li>
            <li className="p__opnensans"> <a href="#about">about</a> </li>
            <li className="p__opnensans"> <a href="#menu">menu</a> </li>
            <li className="p__opnensans"> <a href="#awards">awards</a> </li>
            <li className="p__opnensans"> <a href="#contact">contact</a> </li>
          </ul>
        </div>
        )}
      </div>

    </nav>
  )
  }

export default Navbar;
