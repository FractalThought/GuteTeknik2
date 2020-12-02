import React from "react"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"

const BoxedListDiv = styled.div`
  ul {
    margin-left: 0;
  }

  li {
    margin-left: 0;
    list-style: none;
    padding: 1rem 0.75rem;
    margin: 0;
    margin-bottom: 0.25rem;
    background: #f1f5fd;
    
    border-left: 1rem solid #C5D6F7;
    border-radius: 1px;
    transition: all 0.3s;
  }

  li:nth-child(even) {
    background: #f7f7f8;
    border-left: 1rem solid #DCDCE0;
  }

  li:hover {
    background: #34363D;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`

function BoxedList({ children }) {

  return (
    <BoxedListDiv>
      <MDXProvider>
          {children}
      </MDXProvider>
    </BoxedListDiv>
  )
}

export default BoxedList
