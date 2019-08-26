import React from "react";

const Heading = ({ text }) => {
  return (
    <React.Fragment>
      <h1 className="section-header">{text}</h1>
    </React.Fragment>
  );
};

export default Heading;
