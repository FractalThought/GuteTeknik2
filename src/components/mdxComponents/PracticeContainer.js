import React from "react"
import styled, { css } from "styled-components"
import { useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import code from "./code"

const Hidden = styled.section`
  font-size: 16px;
  padding: 0.5rem;
  background: lightgray;
  animation-duration: 0.3s;
  animation-name: slidein;
  border-radius: 0 0.2rem 0.2rem 0.2rem;

  @keyframes slidein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const ShowButton = styled.button`
  font-size: 1rem;
  background: green;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: white;

  transition: all 0.3s ease-in-out;

  &:hover {
    background: darkgreen;
  }

  ${props =>
    props.expanded &&
    css`
      border-radius: 0.2rem 0.2rem 0 0;
      background: red;
      &:hover {
        background: darkred;
      }
    `};
`

function HiddenDiv({ isHidden, children }) {
  return <>{!isHidden && <Hidden>{children}</Hidden>}</>
}

function PracticeContainer({ children, title }) {
  const show = () => {
    setHidden(!isHidden)
  }

  const [isHidden, setHidden] = useState(true)

  return (
    <>
      <ShowButton expanded={!isHidden} onClick={() => show()}>
        {isHidden ? "Visa" : "Dölj"} {title || "lösning"}
      </ShowButton>
      <HiddenDiv isHidden={isHidden}>
        <MDXProvider components={code}>{children}</MDXProvider>
      </HiddenDiv>
    </>
  )
}

export default PracticeContainer
