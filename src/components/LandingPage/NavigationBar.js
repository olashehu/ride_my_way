import { FaBars } from 'react-icons/fa';
import {links} from './data';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='nav-center'>
          <div className='nav-header'>
           <h1 className="logo-text">RMW</h1>
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map((link) => {
                const { id, url, text,} = link;
                return (
                  <li key={id}>
                    <a href = {url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='social-icons'>
            <Link to ="/login"> <span >Login</span></Link>
            <Link to ="/signup"><span >Sign Up</span></Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;