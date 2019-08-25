import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { recursiveDelay } from "./../utility/typeWriter";
import Cursor from "./cursor/Cursor";
import About from "./about/About";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import Navbar from "./navbar/Navbar";
import "./App.css";
import Section from "./common/section";

class App extends Component {
  state = {
    textValue: `Hello, I'm Şahin Arslan.
I am a full-stack web developer.`,
    typingText: "",
    indexVal: -1
  };

  componentDidMount = () => {
    recursiveDelay(
      this.handleAutoTyping,
      this.state.textValue.length + 1,
      0.07
    );
  };

  handleAutoTyping = () => {
    let index = this.state.indexVal;
    let typingText = this.state.typingText;
    let text = this.state.textValue;

    if (index < text.length) {
      typingText += text.charAt(index);
      index++;
      this.setState({ typingText, indexVal: index });
    }
  };

  render() {
    const { typingText, textValue } = this.state;
    return (
      <div>
        <Section id="home">
          <div className="hero-header-container">
            <div className="greeting-container">
              <div>
                <pre className="introduction-text">
                  {typingText}
                  <Cursor />
                </pre>
              </div>
            </div>
            <button
              className={
                typingText.length === textValue.length
                  ? "button animate"
                  : "button"
              }
            >
              View my work
            </button>
          </div>
        </Section>
        <Navbar />
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="portfolio">
          <Portfolio />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>

        {/* <img className="profile-image" src="/profileWeb.png" alt="profile" /> */}
      </div>
    );
  }
}

export default App;
