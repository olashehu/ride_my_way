
import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';

import HamburgerIcon from '../../../icons/HamburgerIcon';
import headerData from '../../../staticData/landingPage/homePageData';
import './NavigationBar.css';

const NavigationBar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };

    useEffect(() => {
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      if (showLinks) {
        linksContainerRef.current.style.height = `${linksHeight}px`;
      } else {
        linksContainerRef.current.style.height = '0px';
      }
    }, [showLinks]);

    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h1 className="logo-text">RMW</h1>
            <button className="nav-toggle" onClick={toggleLinks}>
              <HamburgerIcon />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {headerData.map((link, index) => {
                return(
                  <Link to={link.path} key={index}>
                    <li className="links-item-container" key={link.id}>
                      <span>{link.title}</span>
                    </li>
                  </Link>
                )
              })}
              <div className="social-icons">
                <Link to='/user/login'>
                  <span>Login</span>
                </Link>
                <Link to='/user/signup'>
                  <span>Sign Up</span>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;