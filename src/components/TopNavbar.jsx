import React from "react";
import "./css/topnav.css";
import "../App.css";

const TopNavbar = () => {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="container">
          <div className="navbar-collapse collapse " id="navbarResponsive">
            <a className="navbar-brand " href="#masthead">
              On The Limb
            </a>

            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#workouts">
                  Exercises
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#trainers">
                  Trainers
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#recommendations">
                  Recommendations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
