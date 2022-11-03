import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BsArrowDownShort } from 'react-icons/bs'
import Logo from "../assets/images/HisestLogoWhite.png";

const Mobilenav = ({ toggle }) => {
  return (
    <div className="mobile-nav_content">
      
        <Link to="/" className="logo-img">
          <img src={Logo} alt="logo" className='logo'/>
        </Link>
      
      <span className="mobile-nav__close" onClick={toggle}>
        <FaTimes />
      </span>
      <div className="mobile-nav_container">
        <ul className="mobile-menu" onClick={toggle}>
          <li className="current">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li className="dropdown">
            <span>Subsidiaries <BsArrowDownShort /></span>
            <ul>
              <li>
                <Link to="/senitechplus">Senitechplus</Link>
              </li>
              <li>
                <Link to="/caramous-geospatial">Caramos geospatial</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobilenav;
