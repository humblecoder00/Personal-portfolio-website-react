import React from "react";
import Heading from "../common/heading";
import "./Skills.css";

const frontEnd = [
  { name: "HTML", iconPath: "/skillIcons/html5.png" },
  { name: "CSS", iconPath: "/skillIcons/css3.png" },
  { name: "Javascript", iconPath: "/skillIcons/javascript.png" },
  { name: "React", iconPath: "/skillIcons/react.png" },
  { name: "Redux", iconPath: "/skillIcons/redux.png" }
];

const backEnd = [
  { name: "Node", iconPath: "/skillIcons/nodejs.png" },
  { name: "Express", iconPath: "/skillIcons/expressjs.png" },
  { name: "MongoDB", iconPath: "/skillIcons/mongodb.png" },
  { name: "MySQL", iconPath: "/skillIcons/MySQL.png" }
];

const tools = [
  { name: "Git", iconPath: "/skillIcons/git.png" },
  { name: "Heroku", iconPath: "/skillIcons/heroku.png" },
  { name: "Netlify", iconPath: "/skillIcons/netlify.png" },
  { name: "VS Code", iconPath: "/skillIcons/vscode.png" },
  { name: "Draw.io", iconPath: "/skillIcons/drawio.png" },
  { name: "GIMP", iconPath: "/skillIcons/gimp.png" }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <Heading text="SKILLS" />
      <div className="skills-content">
        <div className="list-container">
          <h3 className="skill-column-header">Front-end</h3>
          <ul className="skill-list">
            {frontEnd.map((f, index) => {
              return (
                <li key={index} className="skill-row">
                  <img className="skill-icon" src={f.iconPath} alt={f.name} />
                  <div className="skill-text">{f.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list-container">
          <h3 className="skill-column-header">Back-end</h3>
          <ul className="skill-list">
            {backEnd.map((b, index) => {
              return (
                <li key={index} className="skill-row">
                  <img className="skill-icon" src={b.iconPath} alt={b.name} />
                  <div className="skill-text">{b.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list-container">
          <h3 className="skill-column-header">Tools</h3>
          <ul className="skill-list">
            {tools.map((t, index) => {
              return (
                <li key={index} className="skill-row">
                  <img className="skill-icon" src={t.iconPath} alt={t.name} />
                  <div className="skill-text">{t.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
