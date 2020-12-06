import React from "react";
import "../App.css";
import "./css/contact.css";
import "../assets/img/cont.png";

const handleClick = () => {
  alert("Your Message has been successfully sent.");
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="Contactcontainer">
        {/* <h2>Contact Us</h2> */}

        <div className="Contactdetails">
          <h3 style={{ fontSize: "40px" }}>Telephone: </h3>
          <p style={{ textAlign: "center", fontSize: "40px" }}>
            1-876-the-limb
          </p>

          <h3 style={{ fontSize: "40px" }}>Email:</h3>
          <p style={{ textAlign: "center", fontSize: "40px" }}>
            onthelimb101@gmail.com
          </p>
        </div>
        <div class="container5">
          <div class="wrapper">
            <div class="contact">
              <h3 class="contact-us">Contact Form</h3>
              <div class="alert">Your message has been sent!</div>
              <form id="contactForm">
                <p class="name-field">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input type="text" name="name" id="name" required />
                </p>
                <p class="email-field">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input type="email" name="email" id="email" required />
                </p>
                <p class="phone-field">
                  <label>Phone</label>
                  <input type="text" name="phone" id="phone" />
                </p>
                <p class="message-field full">
                  <label>Message</label>
                  <textarea name="message" rows="5" id="message"></textarea>
                </p>
                <p class="required-field">
                  Required field <span>*</span>
                </p>

                <p class="submit-button">
                  <button onClick={handleClick} type="submit">
                    Submit
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
