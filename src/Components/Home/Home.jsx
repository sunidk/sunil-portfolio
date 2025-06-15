import { Link } from "react-router-dom";
import "./Home.css";
import sunil from "../../Images/sunil.webp";
import sunil_cv from "../../Images/sunil_cv.pdf";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div style={{ color: "blueviolet" }}>Hi,</div>
        <div>I'm Sunil Kotian</div>
        <div>NodeJs Developer</div>
        <p>
          Backend Developer with around 3 years of experience<br />
          in designing and maintaining scalable APIs using Node.js.
        </p>
        <div className="btn-div">
          <a href={sunil_cv} download>
            <button aria-label="Download CV">Download CV</button>
          </a>
          <Link to="/contact">
            <button aria-label="Contact Sunil">Contact Now</button>
          </Link>
        </div>
      </div>

      <div className="about-img-wrapper">
        <img
          src={sunil}
          alt="Sunil Kotian"
          className="about-img"
          width="400"
          height="400"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Home;
