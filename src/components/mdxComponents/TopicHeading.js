import React from "react";

// TODO: Make it so when you hover over, an anchor link appears so you can link that specific thing
// TODO: Let that anchor link be the ID

const TopicHeading = ({ children, link }) => {
  return (
    <a id={link}>
      <h1>{children}</h1>
    </a>
  );
};

export default TopicHeading;
