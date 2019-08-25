import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import NavMenuIcon from "./../common/navMenuIcon";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.collapserRef = React.createRef();
    this.state = {
      menuOpen: false
    };
  }

  componentDidMount() {
    console.log(this.collapserRef);
    console.log(this.state);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  menuCollapser = () => {
    let { menuOpen } = this.state;
    !menuOpen ? (menuOpen = true) : (menuOpen = false);
    this.setState({ menuOpen });
    console.log(this.state);
  };

  menuClose = () => {
    let { menuOpen } = this.state;
    menuOpen = false;
    this.setState({ menuOpen });
  };

  getClass = () => {
    const { menuOpen } = this.state;
    if (menuOpen) {
      return "-collapsed";
    } else {
      return "";
    }
  };

  render() {
    const collapseOrNot = this.getClass();
    return (
      <div className="nav">
        <div className="hamburger-button" onClick={this.menuCollapser}>
          <NavMenuIcon />
        </div>
        <nav id="navbar">
          <div className={`nav-content${collapseOrNot}`}>
            <ul className={`nav-items${collapseOrNot}`}>
              <li className={`nav-item${collapseOrNot}`}>
                <Link
                  onClick={this.menuClose}
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  HOME
                </Link>
              </li>
              <li className={`nav-item${collapseOrNot}`}>
                <Link
                  onClick={this.menuClose}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  ABOUT
                </Link>
              </li>
              <li className={`nav-item${collapseOrNot}`}>
                <Link
                  onClick={this.menuClose}
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  SKILLS
                </Link>
              </li>
              <li className={`nav-item${collapseOrNot}`}>
                <Link
                  onClick={this.menuClose}
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className={`nav-item${collapseOrNot}`}>
                <Link
                  onClick={this.menuClose}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
