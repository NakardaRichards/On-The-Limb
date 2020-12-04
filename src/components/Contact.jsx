import React from "react";
import "../App.css";
import "./css/contact.css";
import "../assets/img/cont.png";
const Contact = () => {
  return (
    <section id="contact">
      <div className="Contactcontainer">
        {/* <h2>Contact Us</h2> */}
        <div className="imgContainer">
          <img src="https://image.freepik.com/free-vector/contact-us-concept-idea-support-service-communication-with-customers-providing-them-with-useful-information-online-by-phone-call-illustration_277904-1629.jpg" />
        </div>

        <h3 style={{ fontSize: "40px" }}>Telephone: </h3>
        <p style={{ textAlign: "center", fontSize: "40px" }}>1-876-the-limb</p>

        <h3 style={{ fontSize: "40px" }}>Email:</h3>
        <p style={{ textAlign: "center", fontSize: "40px" }}>
          onthelimb101@gmail.com
        </p>
      </div>
      
    </section>
  );
};

export default Contact;
