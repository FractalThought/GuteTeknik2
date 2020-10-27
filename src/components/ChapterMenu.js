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

/*

Collect all references in the course
Check for duplicates
Write out

*/

function ChapterMenu({ course, chapter, hideTitle }) {
  function getTypeName(type) {
    const typeNamePairs = {
      exercise: "Övning",
      project: "Projekt",
      lesson: "Lektion",
    }

    if (typeNamePairs[type] === undefined || typeNamePairs[type] === null) {
      return "Lektion"
    }

    return typeNamePairs[type]
  }

  return (
    <>
      {!hideTitle && (
        <ChapterHeading id={chapter.link}>
          <Link to={`/${course}/${chapter.link}`}>{chapter.title}</Link>
        </ChapterHeading>
      )}

      <Section>
        <Divider>
          <div>
            <h2>Moment</h2>
            <ul>
              {chapter.pages.map((page, key) => {
                return (
                  <li key={key}>
                    <Link to={`/${course}/${chapter.link}/${page.link}`}>
                      <LinkContainer>
                        <MyImg
                          src={page.type + ".png"}
                          alt={getTypeName(page.type)}
                          width="50"
                        />
                        <span className="title">{page.title}</span>
                      </LinkContainer>
                      <span className="type">{getTypeName(page.type)}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2>Referenser</h2>
            {chapter.references !== null ? (
              <ul>
                {chapter.references.map((reference, key) => {
                  return (
                    <li key={key}>
                      <Link to={`/${course}/referenser/${reference.link}`}>
                        <LinkContainer>
                          <MyImg
                            src="reference.png"
                            alt="Referens"
                            width="50"
                          />
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
          </div>
        </Divider>
      </Section>
    </>
  )
}

export default ChapterMenu
