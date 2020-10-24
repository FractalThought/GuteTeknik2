import React from 'react'
import styled from "styled-components"

const StickyDiv = styled.div`
  position: sticky;
  top: 1rem;

  ul {
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
  }

  a {
    color: rgba(44, 96, 199, 1);
  }

  a:hover {
    color: rgba(104, 144, 222, 1);
    text-decoration: underline;
  }
`

function RightStickyDiv({children}) {
    return (
        <StickyDiv>{children}</StickyDiv>
    )
}

export default RightStickyDiv
