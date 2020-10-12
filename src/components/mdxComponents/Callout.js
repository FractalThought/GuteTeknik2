import React from "react"
import styled, { css } from "styled-components"
import { useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import code from "./code"

const CalloutBox = styled.div`
  padding: 0.25rem 1rem;
  font-size: 1rem;
  margin: 0 0 1.5rem;
  border-radius: 0.2rem;
  width: 50%;
  float: left;

  color: hsla(${props => props.color || "0"}, 20%, 40%, 1);
  border: 2px solid hsla(${props => props.color || "0"}, 20%, 80%, 1);
  background: hsla(${props => props.color || "0"}, 80%, 98%, 1);
`

function Callout({ color, children }) {
  return (
    <CalloutBox color={color}>
      <MDXProvider components={code}>{children}</MDXProvider>
    </CalloutBox>
  )
}

function Warning({ children }) {
  return <Callout color="50">{children}</Callout>
}
function Error({ children }) {
  return <Callout color="10">{children}</Callout>
}
function Notice({ children }) {
  return <Callout color="202">{children}</Callout>
}
function Result({ children }) {
  return <Callout color="90">{children}</Callout>
}

export default Callout
export { Warning, Error, Notice, Result }
