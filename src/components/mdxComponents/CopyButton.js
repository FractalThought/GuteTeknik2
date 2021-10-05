import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  margin: 0 0 1.5rem;
  border-radius: 0.2rem;
`;

function CopyButton({ children }) {
  let theCode = "";
  if (Array.isArray(children)) {
    children.forEach(child => {
      theCode += child.props.children + "\n\n";
    });
  } else {
    theCode = children.props.children;
  }

  console.log(theCode);
  function doCopy() {
    // Code for copying
    console.log(theCode);
  }

  return <Button onClick={doCopy}>Kopiera koden</Button>;
}

export default CopyButton;
