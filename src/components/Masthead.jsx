import React from "react";
import "../App.css";
import "./css/masthead.css";

const Masthead = () => {
  return (
    <section>
      <div id="masthead">
        <header className="masthead">
          <div className="MastheadContainer">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To On The Limb</div>

              <p style={{ fontSize: "45px", fontFamily: "san-serif" }}>
                The best place to learn fitness
              </p>
              <a href="#workouts">
                <button className="butn1">Get Started</button>
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Masthead;
