import React from "react";
import "./Contact.css";
import Heading from "../common/heading";

const contactInfo = [
  {
    name: "outlook",
    iconPath: "/contactIcons/outlookcontact.png",
    link: "mailto:sahin__arslan@hotmail.com"
  },
  {
    name: "linkedin",
    iconPath: "/contactIcons/linkedincontact.png",
    link: "https://www.linkedin.com/in/sahin-arslan/"
  },
  {
    name: "github",
    iconPath: "/contactIcons/githubcontact.png",
    link: "https://github.com/humblecoder00"
  },
  {
    name: "gitlab",
    iconPath: "/contactIcons/gitlabcontact.png",
    link: "https://gitlab.com/humblecoder00"
  }
];

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <Heading text="CONTACT" />
        <p className="question-text">
          Have a question or want to work together?
        </p>
        <ul className="contact-info-list">
          {contactInfo.map((c, index) => {
            return (
              <li key={index} className="contact-element">
                <a href={c.link} target="_blank" rel="noopener noreferrer">
                  <img className="contact-icon" src={c.iconPath} alt={c.name} />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="footer-note">ŞAHİN ARSLAN © 2019</p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
