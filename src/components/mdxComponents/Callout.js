import React from "react";
import styled, { css } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import code from "./code";

/*

Callout (default): Blue box, used for added info that would interrupt the normal flow of the document.
Notice: Yellow box, used to alert the reader of things to take care with, for example that substr is not the same thing as substring.
Output: Gray box, used for showing the output of a bit of code (usually console.log).
Failure: Red box, used both for showing failed code (errors), and high-alert warnings that Notice doesn't cover.
Success: Green box, used for showing successful code when used in junction with Failure, or for when success needs to be shown.
*/

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

  color: var(${props => props.boxColor || "--callout"}--900);
  border: 2px solid var(${props => props.boxColor || "--callout"}--300);
  background: var(${props => props.boxColor || "--callout"}--50);
`;

function Callout({ half, boxColor = "callout", children }) {
  boxColor = "--" + boxColor;
  return (
    <CalloutBox boxColor={boxColor} half={half}>
      <MDXProvider components={code}>{children}</MDXProvider>
    </CalloutBox>
  );
}

function Output({ half, children }) {
  const boxColor = "gray";
  return (
    <Callout half={half} boxColor={boxColor}>
      {children}
    </Callout>
  );
}
function Failure({ half, children }) {
  const boxColor = "failure";
  return (
    <Callout half={half} boxColor={boxColor}>
      {children}
    </Callout>
  );
}
function Notice({ half, children }) {
  const boxColor = "notice";
  return (
    <Callout half={half} boxColor={boxColor}>
      {children}
    </Callout>
  );
}
function Success({ half, children }) {
  const boxColor = "success";
  return (
    <Callout half={half} boxColor={boxColor}>
      {children}
    </Callout>
  );
}

export default Callout;
export { Output, Failure, Notice, Success };
