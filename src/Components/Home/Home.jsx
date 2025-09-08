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
        <div>Full Stack Developer</div>
        <p>
          Software Engineer with around 3 years of
          backend experience (Node.js, Express.js, Nest.js, PostgreSQL) and
          around 1 year in React.js. Skilled in building scalable RESTful APIs,
          microservices in containerized environments, and experienced with AWS,
          GCP, Redis, and authentication, with a strong Backend Engineer focus.
        </p>
        <div className="btn-div">
          <a href={sunil_cv} download="Sunil Kotian - NodeJs Developer.pdf">
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
