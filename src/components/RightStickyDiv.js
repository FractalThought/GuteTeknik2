import React from "react"
import styled from "styled-components"

const StickyDiv = styled.div`
  position: sticky;
  top: 1rem;

  h2 {
    margin: 0;
  }

  ul {
    margin: 0;
  }

  li {
    list-style: none;
    margin: 0;
  }
`

function RightStickyDiv({ children }) {
  return <StickyDiv>{children}</StickyDiv>
}

export default RightStickyDiv
