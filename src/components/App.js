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

    // NOTE: You may apply the writing pointer based on the end of string.

    if (index < text.length) {
      typingText += text.charAt(index);
      index++;
      this.setState({ typingText, indexVal: index });
    }
  };

  render() {
    return (
      <div>
        <div className="hero-header-container">
          <div className="greeting-container">
            <div>
              <pre className="introduction-text">
                {this.state.typingText}
                <Cursor />
              </pre>
            </div>
          </div>
          <button className="button">View my work</button>
        </div>
        <img className="profile-image" src="/profileWeb.png" alt="profile" />
      </div>
    );
  }
}

export default App;
