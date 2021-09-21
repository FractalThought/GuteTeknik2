import React, { useContext } from "react";
import { MainContext } from "../hooks/MainContext";
import styled from "styled-components";

const Heading = styled.h1`
  position: relative;

  a {
    opacity: 0;
    position: absolute;
    left: -1.75rem;
    text-decoration: none;
  }

  a:hover {
    opacity: 1;
  }

  :hover a {
    opacity: 1;
  }
`;

// TODO: Make it so when you hover over, an anchor link appears so you can link that specific thing
// TODO: Let that anchor link be the ID

const TopicHeading = ({ children, link }) => {
  const MainInfo = useContext(MainContext);
  const topicInfo = {
    name: children,
    link: link,
  };

  MainInfo.currentHeadings.push(topicInfo);

  return (
    <Heading>
      <a id={link} href={"#" + link}>
        #
      </a>
      {children}
    </Heading>
  );
};

export default TopicHeading;
