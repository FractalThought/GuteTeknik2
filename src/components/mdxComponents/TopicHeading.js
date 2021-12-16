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

// TODO: Make so all h1s are added
// TODO: Make it so h2s are also added but as subheadings to h1s
// TODO: Solve what happens if there is no h1 to the first h2

const TopicHeading = ({ children }) => {
  const MainInfo = useContext(MainContext);

  const link = children.replace(/ /g, "-");

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
