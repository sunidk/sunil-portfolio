import React from "react";
import "./Contact.css";
import contact from "../../Images/contact.png";
import phone from "../../Images/phone.png";
import email from "../../Images/email.png";
import github from "../../Images/github.png";
import linkedin from "../../Images/linkedin.png";
import website from "../../Images/website.png";

function Contact() {
  return (
    <div className="contact">
      <img src={contact} alt="Contact" className="contact-img" />
      <div className="contact-container">
        <div className="contact-info">
          <img src={phone} alt="Phone" className="contact-info-logo" />
          <a href="tel:+916363037828">+91 6363037828</a>
        </div>
        <div className="contact-info">
          <img src={email} alt="Email" className="contact-info-logo" />
          <a href="mailto:sunidk97@gmail.com">sunidk97@gmail.com</a>
        </div>
        <div className="contact-info">
          <img src={github} alt="GitHub" className="contact-info-logo" />
          <a
            href="https://github.com/sunidk"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sunidk
          </a>
        </div>
        <div className="contact-info">
          <img src={linkedin} alt="LinkedIn" className="contact-info-logo" />
          <a
            href="https://www.linkedin.com/in/sunil-kotian-914428109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/sunil-kotian-914428109/
          </a>
        </div>
        <div className="contact-info">
          <img src={website} alt="Website" className="contact-info-logo" />
          <a
            href="https://sunidk.github.io/sunil-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sunidk.github.io/sunil-portfolio/
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
