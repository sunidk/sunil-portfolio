import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import sunil from "../../Images/sunil.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div style={{ color: "blueviolet" }}>Hi,</div>
        <div>I'm Sunil Kotian</div>
        <div>NodeJs Developer</div>
        <p>
          Backend Developer with around 2 years of experience<br/>in designing and
          maintaining scalable APIs using Node.js.
        </p>
        <div className="btn-div">
          <a href="/sunil_cv.pdf" download>
            <button>Download CV</button>
          </a>
          <Link to="/contact">
            <button>Contact Now</button>
          </Link>
        </div>
      </div>
      <img src={sunil} alt="" className="about-img" />
    </div>
  );
}

export default Home;
