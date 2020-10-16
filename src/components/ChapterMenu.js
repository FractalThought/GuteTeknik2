import React from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import MyImg from "./MyImg"

/*

TODO: Make chapter data into JSON to source from

*/

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

  ul li {
    list-style: none;
    margin: 0;
  }

  ul li a {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }

  ul li:nth-child(odd) {
    background: white;
  }

  ul li:nth-child(even) {
    background: #F9F9FA;
  }

  ul li:hover {
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

const ChapterHeading = Styled.h1`

  a {
    color: #142C5B;
  }

  a:hover {
    color: #366BD3;
    text-decoration: underline;
  }

`

const LinkContainer = Styled.span`
  display: flex;
`

const Divider = Styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

// Need a container for splitting elements and references

const data = {
  title: "",
  baseLink: "",
  elements: [
    {
      name: "Lektion 1",
      link: "linktolesson",
      type: "lesson",
      typeName: "Lektion",
    },
  ],
  references: [
    {
      name: "En referens här",
      link: "linktoreference",
    },
  ],
}

function ChapterMenu({ course, data }) {
  return (
    <>
      <ChapterHeading>
        <Link to={`/${course}/${data.baseLink}`}>{data.title}</Link>
      </ChapterHeading>
      <Section>
        <Divider>
          <div>
            <h2>Moment</h2>
            <ul>
              {data.elements.map((element, key) => {
                return (
                  <li key={key}>
                    <Link to={`/${course}/${data.baseLink}/${element.link}`}>
                      <LinkContainer>
                        <MyImg
                          src={element.type + ".png"}
                          alt={element.typeName}
                          width="50"
                        />
                        <span className="title">{element.name}</span>
                      </LinkContainer>
                      <span className="type">{element.typeName}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2>References</h2>
            <ul>
              {data.references.map((reference, key) => {
                return (
                  <li key={key}>
                    <Link to={`/${course}/${data.baseLink}/${reference.link}`}>
                      <LinkContainer>
                        <MyImg src="reference.png" alt="Referens" width="50" />
                        <span className="title">{reference.name}</span>
                      </LinkContainer>
                      <span className="type">Referens</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </Divider>
      </Section>
    </>
  )
}

export default ChapterMenu
