import { FaBars } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';

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
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li className="links-item-container">
                <a href="/">Home</a>
              </li>
              <li className="links-item-container">
                <a href="#listing">Listing</a>
              </li>
              <li className="links-item-container">
                <a href="#testimonials">Testimonial</a>
              </li>
              <li className="links-item-container">
                <a href="/">About</a>
              </li>
              <div className="social-icons">
                <a href="/login">
                  <span>Login</span>
                </a>
                <a href="/signup">
                  <span>Sign Up</span>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;