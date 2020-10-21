import React from "react"
import styled, { css } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import code from "./code"

const CalloutBox = styled.div`
  padding: 0.25rem 1rem;
  font-size: 1rem;
  margin: 0 0 1.5rem;
  border-radius: 0.2rem;

  ${props =>
    props.half &&
    css`
      width: 50%;
      float: right;
      clear: both;
    `};

  color: hsla(${props => props.color || "0"}, 20%, 40%, 1);
  border: 2px solid hsla(${props => props.color || "0"}, 20%, 80%, 1);
  background: hsla(${props => props.color || "0"}, 80%, 98%, 1);
`

function Callout({ half, color, children }) {
  return (
    <CalloutBox color={color} half={half}>
      <MDXProvider components={code}>{children}</MDXProvider>
    </CalloutBox>
  )
}

function Warning({ half, children }) {
  return (
    <Callout half={half} color="50">
      {children}
    </Callout>
  )
}
function Error({ half, children }) {
  return (
    <Callout half={half} color="10">
      {children}
    </Callout>
  )
}
function Notice({ half, children }) {
  return (
    <Callout half={half} color="202">
      {children}
    </Callout>
  )
}
function Result({ half, children }) {
  return (
    <Callout half={half} color="90">
      {children}
    </Callout>
  )
}

export default Callout
export { Warning, Error, Notice, Result }
