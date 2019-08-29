import React from "react";

const Section = ({ id, children, height }) => {
  return (
    <div
      style={{ backgroundColor: "#f4f4f9", minHeight: `${height}vh` }}
      id={id}
    >
      {children}
    </div>
  );
};

export default Section;
