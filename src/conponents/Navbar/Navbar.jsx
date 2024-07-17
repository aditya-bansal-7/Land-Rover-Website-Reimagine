import './Navbar.css';
import React, { useState } from 'react';

const Navbar = () => {
  const [isSubHomeVisible, setSubHomeVisible] = useState(false);
  const [isTrapezoidLowered, setTrapezoidLowered] = useState(false);

  const handleExpandHomeMouseOver = () => {
    setSubHomeVisible(true);
  };

  const handleSubnavbtnMouseOver = () => {
    setSubHomeVisible(false);
  };

  const handleTrapezoidMouseEnter = () => {
    setTrapezoidLowered(true);
  };

  const handleTrapezoidMouseLeave = () => {
    setTrapezoidLowered(false);
    setSubHomeVisible(false);
  };

  return (
    <div className=' pointer-events-auto absolute flex h-1/5 w-full top-0'>
      <nav className="navbar">
        <div
          id="trapezoid"
          onMouseEnter={handleTrapezoidMouseEnter}
          onMouseLeave={handleTrapezoidMouseLeave}
          style={{ marginTop: isTrapezoidLowered ? '0px' : '-53px' }}
        >
          <a
            className="sub-home"
            href="#"
            style={{ display: isSubHomeVisible ? 'block' : 'none' }}
          >
            Home
          </a>
          <a
            href="#About"
            className="expandHome"
            onMouseOver={handleExpandHomeMouseOver}
          >
            About
          </a>
          <div className="subnav">
            <button
              className="subnavbtn"
              onMouseOver={handleSubnavbtnMouseOver}
            >
              Clients <i className="fa fa-caret-down"></i>
            </button>
            <div className="subnav-content">
              <div id="subnav-trapezoid">
                <a href="#Clients">Burger King</a>
                <a href="#Clients">Southwest Airlines</a>
                <a href="#Clients">Levi Strauss</a>
              </div>
            </div>
          </div>

          <div className="subnav">
            <button
              className="subnavbtn"
              onMouseOver={handleSubnavbtnMouseOver}
            >
              Services <i className="fa fa-caret-down"></i>
            </button>
            <div className="subnav-content">
              <div className="subnav-trapezoid">
                <a href="#Services">Print Design</a>
                <a href="#Services">Web Design</a>
                <a href="#Services">Mobile App Development</a>
              </div>
            </div>
          </div>
          <a href="https://codepen.io/pec-man" className="expandHome">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
