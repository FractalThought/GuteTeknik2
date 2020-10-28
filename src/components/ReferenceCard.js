import React from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import MyImg from "./MyImg"

const Section = Styled.section`
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  margin-top: 1rem;

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

  a {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }

  li:nth-child(odd) {
    background: white;
  }

  li:nth-child(even) {
    background: #F9F9FA;
  }

  li:hover {
    background: #E6E7EA;
  }

  .title {
    color: #366BD3;
  }

  a:hover .title {
    text-decoration: underline;
    color: #244FA3;
  }

  .type {
    color: #828798;
  }
`

const LinkContainer = Styled.span`
  display: flex;
`

function ReferenceCard({ course, references }) {
  return (
    <Section>
      {references !== null ? (
        <ul>
          {references.map((reference, key) => {
            return (
              <li key={key}>
                <Link to={`/${course}/referenser/${reference.link}`}>
                  <LinkContainer>
                    <MyImg src="reference.png" alt="Referens" width="50" />
                    <span className="title">{reference.title}</span>
                  </LinkContainer>
                  <span className="type">Referens</span>
                </Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>Inga referenser</p>
      )}
    </Section>
  )
}

export default ReferenceCard
