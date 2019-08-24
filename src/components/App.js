import React, { Component } from "react";
import { recursiveDelay } from "./../utility/typeWriter";
import "./App.css";
import HeroHeader from "./HeroHeader";
import Cursor from "./cursor/Cursor";

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
        {/* <img className="profile-image" src="/profileWeb.png" alt="profile" /> */}
        <div style={{ height: "400px", backgroundColor: "#F4F4F9" }}>
          <h1>My portfolio stuff </h1>
        </div>
      </div>
    );
  }
}

export default App;
