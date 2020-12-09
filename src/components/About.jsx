import React from "react";
import "../App.css";
import "./css/about.css";
const About = () => {
  return (
    <section id="about">
      <div className="AboutContainer">
        <h2>About Us</h2>
        <div className="imgContainer2">
          <img src="https://image.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg"  alt="freepik.com"/>
        </div>
        <div className="aboutText">
          <p>
            On The Limb is an online / physical gym that focuses on giving each
            member an one on one experience safe from the comfort of their
            homes. We provide the best and most effective exercise that helps
            with improving your core, lowering body fat percentage and also
            improving your body posture. If you are here to become a bodybuilder
            this isn't the place for you. You can always check Fusion Fitness
            out. Our gym mainly targets students they are always stressed out
            because of the heaps of assignments they get. Exercising has been
            scientifically proven to reduce stress and improve mentally
            processes and that's why we are here for you. If your not a fan of
            the online gym experience you can always come to one of our 25
            facilities across Jamaica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
