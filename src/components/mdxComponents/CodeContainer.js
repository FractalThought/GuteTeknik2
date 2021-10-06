import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
  }
`;

function CodeContainer({ children }) {
  return <Container>{children}</Container>;
}

export default CodeContainer;
