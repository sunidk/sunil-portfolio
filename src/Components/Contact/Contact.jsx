import "./Contact.css";
import contact from "../../Images/contact.webp";
import phone from "../../Images/phone.webp";
import email from "../../Images/email.webp";
import github from "../../Images/github.webp";
import linkedin from "../../Images/linkedin.webp";
import website from "../../Images/website.webp";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <img
          src={contact}
          alt="Contact Illustration"
          className="contact-img"
          loading="lazy"
        />
      </div>

      <div className="contact-right">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-info">
          <img src={phone} alt="Phone" className="contact-icon" loading="lazy" />
          <a href="tel:+916363037828">+91 6363037828</a>
        </div>
        <div className="contact-info">
          <img src={email} alt="Email" className="contact-icon" loading="lazy" />
          <a href="mailto:sunidk97@gmail.com">sunidk97@gmail.com</a>
        </div>
        <div className="contact-info">
          <img src={github} alt="GitHub" className="contact-icon" loading="lazy" />
          <a href="https://github.com/sunidk" target="_blank" rel="noopener noreferrer">
            github.com/sunidk
          </a>
        </div>
        <div className="contact-info">
          <img src={linkedin} alt="LinkedIn" className="contact-icon" loading="lazy" />
          <a
            href="https://www.linkedin.com/in/sunil-kotian-914428109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/sunil-kotian-914428109
          </a>
        </div>
        <div className="contact-info">
          <img src={website} alt="Website" className="contact-icon" loading="lazy" />
          <a
            href="https://sunidk-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sunidk-portfolio.netlify.app
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
