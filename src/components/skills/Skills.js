import React from "react";
import Heading from "../common/heading";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <Heading text="SKILLS" />
      <div className="skills-content">
        <div className="list-container">Front-end</div>
        <div className="list-container">Back-end</div>
        <div className="list-container">Tools</div>
      </div>
    </div>
  );
};

export default Skills;
