import React from "react";
import { Link } from "gatsby";
import Styled from "styled-components";
import MyImg from "./MyImg";

/*

TODO: Make chapter data into JSON to source from

*/

const Section = Styled.section`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(55, 38, 89, 0.1), 0px 2px 4px rgba(55, 38, 89, 0.06);
  padding: 1rem;
  margin: var(--large) 0;

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
    padding: 0.5rem 0.25rem;
    text-decoration: none;
  }

  li:nth-child(odd) {
    background: var(--gray--50);
  }
  
  li:nth-child(even) {
    background: var(--gray--100);
  }

  li:hover {
    background: var(--gray--300);
  }

  a:hover .title {
    text-decoration: underline;
  }

  .type {
    color: var(--gray--500);
  }
`;

const LinkContainer = Styled.span`
  display: flex;
`;

const Line = Styled.hr`
  border-top: 0.15rem solid var(--primary--600);
  margin: 0.5rem 0;
  opacity: 1;
`;

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
      lesson: "Förklaring",
    };

    if (typeNamePairs[type] === undefined || typeNamePairs[type] === null) {
      return "Förklaring";
    }

    return typeNamePairs[type];
  }

  return (
    <Section>
      {!hideTitle && (
        <h2 id={chapter.link}>
          <Link to={`/${course}/${chapter.link}`}>{chapter.title}</Link>
        </h2>
      )}
      <Line />
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
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default ChapterMenu;
