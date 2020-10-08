import React from "react"
import styled, { css } from "styled-components"
import { useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import code from "./code"

const CalloutBox = styled.div`
  padding: 0.75rem 1rem 0.75rem 4rem;
  font-size: 0.8rem;
  margin: 0 0 1.5rem;
  border-radius: 0.1rem;

  color: ${props => props.color || "darkgray"};
  border: 1px solid ${props => props.color || "darkgray"};
  background: ${props => props.color || "lightgray"};
`

function Callout({ color, children }) {
  return (
    <CalloutBox color={color}>
      <MDXProvider components={code}>{children}</MDXProvider>
    </CalloutBox>
  )
}

function Warning({ children }) {
  return <Callout color="yellow">{children}</Callout>
}

export { Warning }
export default Callout
