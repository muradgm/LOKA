import { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AnimationContext } from '../../../contexts/AnimationContext'

import gsap from 'gsap'
import * as Icons from "react-icons/md";

import './AppHeader.scss'
import Logo from '../../../assets/logo/raspberry.png'

export const AppHeader = () => {
  const [mobile, setMobile] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <768) {
        setMobile(true);
      } else {
        setMobile(false);
        setBurgerMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <header className="app-header">
      <div className="app-header-logo">
        <img src={Logo} alt="LOKA" /> 
        <Link to="/main">Loka</Link>
      </div>
      {mobile ? (
        <div className="mobile-toggle">
          <div className="mobile-toggle-icons" onClick={() => setBurgerMenu(!burgerMenu)}>
            {/* burgerMenu && */}
              <Icons.MdMenu className="toggle-icon" />
          </div>
        </div>
      ) : (
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/discover">Discover</Link>
              </li>
              <li className="nav-item">
                <Link to="/feed">Feed</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/create">Create</Link>
              </li>
              <li className="nav-item">
                  <input type="" placeholder="Search" className="search"/>
                  <Icons.MdOutlineSearch className="search-icon" />
              </li>
            </ul>
          </nav>
      )}
    </header>

    <div className={burgerMenu ? "burger-menu active" : "burger-menu"}>
        <ul className="burger-menu-list">
          <li className="burger-menu-list-item">
            <Link to="/discover">Discover</Link>
              </li>
              <li className="burger-menu-list-item">
            <Link to="/feed">Feed</Link>
              </li>
              <li className="burger-menu-list-item">
            <Link to="/profile">Profile</Link>
          </li>
              <li className="burger-menu-list-item">
            <Link to="/create">Create</Link>
          </li>
          <li className="burger-menu-list-item">
            <input type="" placeholder="Search" className="mobile-search"/>
            <Icons.MdOutlineSearch className="search-icon" />
          </li>
        </ul>
        
        <Icons.MdClose className='close-icon' onClick={() => setBurgerMenu(false)} />
      </div>
    </>
  );
}

export default AppHeader;
