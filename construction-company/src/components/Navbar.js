import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/HisestLogo.png";
import Mobilenav from "./Mobilenav";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggle = () => {
    setMobileNav(!mobileNav);
  };

  const location = useLocation();

  return (
    <header className="nav-header">
      <nav className="nav-header-container">
        <div className="nav-content">
          <Link to="/" style={{ paddingLeft: "16px" }}>
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          {/* nav menu */}
          <ul className="nav-menu" style={{ paddingRight: "16px" }}>
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
              <span>
                Subsidiaries <BsArrowDownShort />
              </span>
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
          <span
            className="mobile-toggler"
            style={{ paddingRight: "16px" }}
            onClick={toggle}
          >
            <FaBars />
          </span>
          <div className={`${mobileNav ? "left0" : "left-100"} mobile-wrapper`}>
            <div className="mobile-overlay" onClick={toggle}></div>
            <Mobilenav toggle={toggle} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
