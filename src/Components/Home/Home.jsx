import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div>Hi,</div>
        <div>I'm Sunil Kotian</div>
        <div>NodeJs Developer</div>
        <div className="btn-div">
          <a href="/SUNIL_CV.pdf" download>
            <button>Download CV</button>
          </a>
          <Link to="/contact">
            <button>Contact Now</button>
          </Link>
        </div>
      </div>
      <img src="./sunil.png" alt="" className="about-img" />
    </div>
  );
}

export default Home;
