import React from "react";
import ProjectCard from "./projectCard/ProjectCard";
import Heading from "../common/heading";
import "./Portfolio.css";

const projects = [
  {
    name: "Medialender",
    projectDescription:
      "Medialender is a responsive full stack web application for an imaginary movie renting / management business. Users can sign-up and access / modify data based on their level of authorization.",
    techDescription:
      "Front-end: Built with using ReactJS, along with some handy npm packages. Bootstrap for speeding the CSS work as well as custom hard coded CSS on some areas (example: Responsive Navbar Menu, Loading spinner. Back-end: Built with using NodeJS and Express, along with some handy npm packages. Database is running on MongoDB Atlas cloud service.",
    projectView: "/projectViews/medialender.png",
    techStack: [
      { name: "React", iconPath: "/skillIcons/react.png" },
      { name: "Node", iconPath: "/skillIcons/nodejs.png" },
      { name: "Express", iconPath: "/skillIcons/expressjs.png" },
      { name: "MongoDB", iconPath: "/skillIcons/mongodb.png" },
      { name: "Bootstrap", iconPath: "/skillIcons/bootstrap.png" },
      { name: "Heroku", iconPath: "/skillIcons/heroku.png" }
    ],
    liveLink: "https://medialenderonline.herokuapp.com",
    sourceCode:
      "https://github.com/humblecoder00/Personal-Full-stack-project---Medialender"
  },
  {
    name: "Skåne Departures",
    projectDescription: `Skåne Departures is a responsive SPA which helps to search the closest departures based on given criterias:

Start Point: Address, Place or Station. Date: Starting date. Time: Starting time.

It uses Skånetrafiken's Open API endpoints to perform related queries.`,
    techDescription:
      "Built with using ReactJS, along with couple handy npm packages. CSS is fully custom hard-coded, background picture is taken personally.",
    projectView: "/projectViews/skaneDepartures.png",
    techStack: [
      { name: "React", iconPath: "/skillIcons/react.png" },
      { name: "Heroku", iconPath: "/skillIcons/heroku.png" }
    ],
    // liveLink: "https://skanedepartures.herokuapp.com",
    liveLink: null,
    sourceCode:
      "https://github.com/humblecoder00/Personal-React-SPA-project--Skane-departures"
  },
  {
    name: "YouTubeViewer",
    projectDescription:
      "YouTubeViewer is a responsive SPA, a simplified clone of YouTube's video view & search section. It uses YouTube Data API v3 to perform the queries.",
    techDescription:
      "Built with using ReactJS, along with couple handy npm packages. Redux for state management and Redux Thunk for handling asynchronous actions. CSS is mainly handled by using Semantic UI framework together with JSX inline styles on several parts.",
    projectView: "/projectViews/youtubeViewer.png",
    techStack: [
      { name: "React", iconPath: "/skillIcons/react.png" },
      { name: "Redux", iconPath: "/skillIcons/redux.png" },
      { name: "SemanticUI", iconPath: "/skillIcons/semanticui.png" },
      { name: "Netlify", iconPath: "/skillIcons/netlify.png" }
    ],
    // liveLink: "https://youtubeviewer.netlify.com/",
    liveLink: null,
    sourceCode:
      "https://github.com/humblecoder00/Personal-React-Redux-SPA-project--YouTubeViewer"
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Heading text="PORTFOLIO" />
      <ul className="portfolio-list">
        {projects.map((p, index) => {
          return (
            <li key={index}>
              <ProjectCard data={p} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
