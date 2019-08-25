import React from "react";
import { Link } from "react-scroll";
import Cursor from "./../cursor/Cursor";

const Home = ({ typingText, textValue }) => {
  return (
    <div className="hero-header-container">
      <div className="greeting-container">
        <div>
          <pre className="introduction-text">
            {typingText}
            <Cursor />
          </pre>
        </div>
      </div>

      <div style={{ justifySelf: "center" }}>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <button
            className={
              typingText.length === textValue.length
                ? "button animate"
                : "button"
            }
          >
            View my work
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
