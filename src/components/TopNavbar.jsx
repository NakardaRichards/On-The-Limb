import React from "react";
import "./css/topnav.css";
import "../App.css";
const TopNavbar = () => {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-sm navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#masthead">
            On The Limb
          </a>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#workouts">
                  Exercises
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#trainers">
                  Trainers
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#recommendations"
                >
                  Recommendations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
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
