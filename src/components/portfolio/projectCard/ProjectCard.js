import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ data }) => {
  return (
    <div className="project-container">
      <div className="description-container">
        <div className="text-area">
          <h2 className="project-name">{data.name}</h2>
          <p className="project-description">{data.projectDescription}</p>
          <p className="project-description">{data.techDescription}</p>
          {(!data.liveLink) ? (
            <p
              style={{
                color: 'red',
                fontWeight: 500
            }}>
              Note: Live preview is temporarily unavailable due to external API changes. This will be updated soon.
            </p>
          ) : null}
          <div className="techstack-container">
            <ul className="techstack-list">
              {data.techStack.map((t, index) => {
                return (
                  <li key={index}>
                    <img className="tech-icon" src={t.iconPath} alt={t.name} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="image-area">
          <img
            className="project-image"
            src={data.projectView}
            alt={data.name}
          />
        </div>
        <div className="link-container">
          {(!data.liveLink) ? (
            <a href={data.liveLink} target="none" rel="noopener noreferrer">
              <button className="link-button-disabled">Live Preview</button>
            </a>
          ) : (
            <a href={data.liveLink} target="_blank" rel="noopener noreferrer">
              <button className="link-button">Live Preview</button>
            </a>
          )}
          <a href={data.sourceCode} target="_blank" rel="noopener noreferrer">
            <button className="link-button">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
