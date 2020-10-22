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
`

function Hidden({ isHidden, children }) {
  return <>{!isHidden && <LinkList>{children}</LinkList>}</>
}

function SidebarHeading({ chapter, mainPage, currentPage, currentChapter }) {
  const pages = chapter.pages
  const title = chapter.title
  const link = chapter.link

  let isCurrentChapter = false
  if (currentChapter !== undefined || currentChapter !== null) {
    isCurrentChapter = currentChapter === chapter.link
  }

  const [isHidden, setHidden] = useState(!isCurrentChapter)

  const toggle = () => {
    setHidden(!isHidden)
  }

  return (
    <Section>
      <ChapterTitle onClick={() => toggle()} expanded={!isHidden}>
        <Link to={"/" + mainPage + "/" + link}>
          <h2>{title}</h2>
        </Link>
        <ExpandButton expanded={!isHidden} onClick={() => toggle()}>
          {isHidden ? ">" : "X"}
        </ExpandButton>
      </ChapterTitle>
      <Hidden isHidden={isHidden}>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link
                to={"/" + mainPage + "/" + link + "/" + page.link}
                className={currentPage === page.link ? "active" : "inactive"}
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
