import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const Section = styled.section``

const ChapterTitle = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5rem;

  background: rgba(205, 207, 214, 1);
  color: rgba(20, 44, 91, 1);

  &:hover {
    background: rgba(180, 183, 193, 1);
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  ${props =>
    props.expanded &&
    css`
      background: rgba(44, 96, 199, 1);
      color: rgba(205, 218, 244, 1);
      &:hover {
        background: rgba(54, 107, 211, 1);
      }
    `};
`

const ExpandButton = styled.button`
  border: none;
  padding: 0.2rem 0.4rem;
  background: none;
  font-weight: bold;
  font-size: 1.2em;
  color: rgba(155, 159, 173, 1);
`

const LinkList = styled.section`
  padding: 0.5rem;
  background: rgba(230, 231, 234, 1);

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: rgba(44, 96, 199, 1);
  }

  a:hover {
    color: rgba(104, 144, 222, 1);
    text-decoration: underline;
  }

  a.active {
    color: rgba(20, 44, 91, 1);
    text-decoration: underline;
  }

  a.active::before {
    content: "- ";
  }
`

function Hidden({ isHidden, children }) {
  return <>{!isHidden && <LinkList>{children}</LinkList>}</>
}

/*

Should take the following:
headingData, which contains a link, title, and pages

pages has title and link, and the link is the full link (chapterlink or referencelink / pagelink)
Actual link becomes courseLink/fullLink

Also need urlData, specifically need first, second, and third (if any) page.

Lastly, need courseLink

*/

// function SidebarHeading({ chapter, courseLink, currentPage, currentChapter }) {
  function SidebarHeading({ headingData, urlData }) {
  const {pages, title, link} = headingData;

  let isCurrentChapter = false
  if (urlData.chapter !== undefined || urlData.chapter !== null) {
    isCurrentChapter = (urlData.chapter === link)
  }

  const [isHidden, setHidden] = useState(!isCurrentChapter)

  const toggle = () => {
    setHidden(!isHidden)
  }

  return (
    <Section>
      <ChapterTitle onClick={() => toggle()} expanded={!isHidden}>
        {link!==null ? <Link to={"/" + urlData.course + "/" + link}>
          <h2>{title}</h2>
        </Link> : <h2>{title}</h2>}
        <ExpandButton expanded={!isHidden} onClick={() => toggle()}>
          {isHidden ? "+" : "-"}
        </ExpandButton>
      </ChapterTitle>
      <Hidden isHidden={isHidden}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                to={`/${urlData.course}${link!==null ? `/${link}` : ``}/${page.link}`}
                className={urlData.page === page.link ? "active" : "inactive"}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </Hidden>
    </Section>
  )
}

export default SidebarHeading
