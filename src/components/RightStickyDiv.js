import React from "react";
import styled from "styled-components";

const StickyDiv = styled.div`
  position: sticky;
  top: 0;

  h2 {
    margin-top: var(--lg3);
    font-size: var(--lg2);
    font-weight: 400;
}
  }

  ul {
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
  }
`;

function RightStickyDiv({ children }) {
  return <StickyDiv>{children}</StickyDiv>;
}

export default RightStickyDiv;
