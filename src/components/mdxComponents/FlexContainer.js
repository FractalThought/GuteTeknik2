import React from "react"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"

const FlexContainerDiv = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`

function BoxedList({ children }) {

  return (
    <FlexContainerDiv>
      <MDXProvider>{children}</MDXProvider>
    </FlexContainerDiv>
  )
}

export default FlexContainerDiv
