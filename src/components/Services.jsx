import React from "react";
import "../App.css";
import "./css/services.css";
const Services = () => {
  return (
    <section id="services">
      <div className="ServicesContainer">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Services</h2>
            <h3 className="services">
              We offer Personal trainers to work with a single client or a small
              group. We may train you in a gym or in your home because we have a
              mobile unit. We assess the client's level of physical fitness and
              help them set and reach their fitness goals. Our gym has some of
              the best trainers in the world based on our numbers and our
              results. Come and get slim or put on some muscles today!
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <h4 className>Free Medical Monitoring</h4>
            <p>
              Nurses work in our gym and play a key role in monitoring your
              health. Every month, for free, they monitor your heart and
              circulatory system, weigh you, and chart your body fat percentage.
              They use computer estimates to determine your body age, which
              decreases month to month, as your other fitness components
              improve. These benefits are all provided free of charge.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Free InBody Screenings</h4>
            <p>
              In less than 60 seconds, the InBody Screening not only examines
              the composition of your body, but also reveals percentage of body
              fat, muscle distribution, and body water balance which are
              components that are key in understanding more about your body. The
              inBody Test gives you a true and complete assessment of your body,
              allowing you to track your progress accurately. Go beyond the
              scale and see what you’re made of.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Free Nutritional Counseling</h4>
            <p>
              Our nutritionists help you with your nutritional program. Proper
              nutrition is an essential complement to exercise for high energy,
              and lasting health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
