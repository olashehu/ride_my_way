import React from 'react';
import { Link } from 'react-router-dom';
import CarLogoIcon from '../../../icons/CarLogoIcon';
import EnvelopeIcon from '../../../icons/EnvelopeIcon';
import FacebookIcon from '../../../icons/FacebookIcon';
import GoogleIcon from '../../../icons/GoogleIcon';
import HomeIcon from '../../../icons/HomeIcon';
import Linkdin from '../../../icons/Linkdin';
import PhoneIcon from '../../../icons/PhoneIcon';
import TwitterIcon from '../../../icons/TwitterIcon';
import './newFooter.css';

const NewFooter = () => {
    return (
      <div className="footer-wrapper">
        <header className="footer-header">
          <p className="footer-header-text">Get connected with us on social media</p>
          <div className="footer-header-icons">
            <Link to="/www.facebook.com" className="link-icons">
              <FacebookIcon />
            </Link>
            <Link to="/www.twitter.com" className="link-icons">
              <TwitterIcon />
            </Link>
            <Link to="/www.google.com" className="link-icons">
              <GoogleIcon />
            </Link>
            <Link to="/www.linkdin.com" className="link-icons">
              <Linkdin />
            </Link>
          </div>
        </header>
        <div className="new-footer-body">
          <div className="company-name-wrapper">
            <Link to="/" className="company-logo-wrapper">
              <CarLogoIcon />
              <span className="rmw-container">RMW</span>
            </Link>
            <p className='company-name-subtitle'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos modi,
              perferendis!
            </p>
          </div>
          <div className="products">
            <span className="footer-link-headers">Products</span>
            <ul className="products-lists">
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  Product
                </Link>
              </li>
            </ul>
          </div>
          <div className="usrful-links-wrapper">
            <span className="footer-link-headers">Link</span>
            <ul className="useful-link-lists">
              <li>
                <Link to="/#top" className="new-footer-links-wrapper">
                  Your Account
                </Link>
              </li>
              <li>
                <Link to="#testimonial" className="new-footer-links-wrapper">
                  Testimonial
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="new-footer-links-wrapper">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <span className="footer-link-headers">Contact</span>
            <ul className="contactus-wrapper">
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  <>
                    <HomeIcon />
                    <span className="contactus-text-wrapper">
                      20, Olaolu str, isolo, Lagos.
                    </span>
                  </>
                </Link>
              </li>
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  <>
                    <EnvelopeIcon />
                    <span className="contactus-text-wrapper">info@example.com</span>
                  </>
                </Link>
              </li>
              <li>
                <Link to="/" className="new-footer-links-wrapper">
                  <>
                    <PhoneIcon />
                    <span className="contactus-text-wrapper">09012345678</span>
                  </>
                </Link>
              </li>
              <li>
                <Link to=""></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right-wrapper">
          <p className="copyright-container">
            &copy; 2021 copyright ease-mytrip.netlify.app
          </p>
        </div>
      </div>
    );
}

export default NewFooter
