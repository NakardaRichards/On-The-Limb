import React from "react";
import "../App.css";
const Masthead = () => {
  return (
    <section>
      <header className="masthead">
        <div className="MastheadContainer">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To On The Limb</div>

            <p>The best place to learn fitness</p>

            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#workouts"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Masthead;
