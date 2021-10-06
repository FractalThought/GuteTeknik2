import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  margin: 0 0 1.5rem;
  border-radius: 0.2rem;
`;

function CopyButton({ children }) {
  const [isCopied, setCopied] = useState(false);

  let theCode = "";
  if (Array.isArray(children)) {
    // if the code has empty lines, it gets divided to multiple paragraph nodes
    children.forEach(child => {
      theCode += child.props.children + "\n\n"; // Add in two break lines to recreated the empty lines between the code lines
    });
  } else {
    theCode = children.props.children;
  }

  function doCopy() {
    // Code for copying
    navigator.clipboard.writeText(theCode).then(
      function() {
        /* clipboard successfully set */
        // Visa meddelande att den har kopierat koden.
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      function() {
        /* clipboard write failed */
      }
    );
  }

  return (
    <Button onClick={doCopy}>
      {isCopied ? "Koden kopierad" : "Kopiera koden"}
    </Button>
  );
}

export default CopyButton;
