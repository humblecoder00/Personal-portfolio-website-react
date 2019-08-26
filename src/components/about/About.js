import React from "react";
import Heading from "../common/heading";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Heading text="ABOUT" />
      <div className="about-content">
        <div className="about-profile">
          <img className="profile-image" src="/profileWeb.png" alt="profile" />
        </div>
        <div className="about-description">
          <p>
            I enjoy making concepts come to life through building user friendly,
            functional web applications.
            <br />
            <br />
            On each project, my main focus is to turn complexities into simple,
            yet effective and maintainable solutions.
            <br />
            <br />
            When I'm not coding, I play computer / board games, play electric
            guitar / drums or watch contents related to mythology / space /
            history.
            <br />
            <br />
            I’m based in Malmö, Sweden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
