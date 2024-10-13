import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <img src="./contact.png" alt="Contact" className="contact-img" />
      <div className="contact-container">
        <div className="contact-info">
          <img src="./phone.png" alt="Phone" className="contact-info-logo" />
          <Link to="/contact">+91 6363037828</Link>
        </div>
        <div className="contact-info">
          <img src="./email.png" alt="Email" className="contact-info-logo" />
          <a href="mailto:sunidk97@gmail.com">sunidk97@gmail.com</a>
        </div>
        <div className="contact-info">
          <img src="./github.png" alt="GitHub" className="contact-info-logo" />
          <a
            href="https://github.com/sunidk"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sunidk
          </a>
        </div>
        <div className="contact-info">
          <img
            src="./linkedin.png"
            alt="LinkedIn"
            className="contact-info-logo"
          />
          <a
            href="https://www.linkedin.com/in/sunil-kotian-914428109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/sunil-kotian-914428109/
          </a>
        </div>
        <div className="contact-info">
          <img
            src="./website.png"
            alt="Website"
            className="contact-info-logo"
          />
          <a
            href="https://github.com/sunidk"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sunidk
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
