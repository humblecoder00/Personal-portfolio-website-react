import React from "react";

const Section = ({ id, children }) => {
  return (
    <div className="section-content" id={id}>
      {children}
    </div>
  );
};

export default Section;
