import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ChapterMenu from "../components/ChapterMenu"
import RightStickyDiv from "../components/RightStickyDiv"

const QuickList = styled.section`
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
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    list-style: none;
    margin: 0;
  }

  a {
    color: #366bd3;
    font-size: 1.5rem;
  }

  a:hover {
    text-decoration: underline;
    color: #244fa3;
  }
`

const ClearDiv = styled.div`
  clear: both;
`

function CoursePage({ course, children, url }) {
  const data = useStaticQuery(graphql`
    query {
      allPageinfoJson {
        edges {
          node {
            name
            link
            chapters {
              title
              link
              pages {
                title
                link
                type
              }
              references {
                title
                link
              }
            }
          }
        }
      }
    }
  `)

  /*
  Remove the .node-intermediate step, filter out the currrent page,
  and reduce down to a single object
  */

  const pageInfo = data.allPageinfoJson.edges
    .map(page => {
      return page.node
    })
    .filter(node => {
      return node.link === course
    })[0]

  // Use string split for url
  let urlData = null

  if (typeof url !== "undefined" && url != null) {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  return (
    <>
      <Header mainPage={course} />
      <div id="main-wrapper">
        <aside className="left">
          <Sidebar url={urlData} currentPageData={pageInfo} />
        </aside>
        <main>
          <h1 className="page-heading">{pageInfo.name}</h1>
          <div className="page">
            <h1 className="printheader">{pageInfo.name}</h1>
            {children}
            <ClearDiv></ClearDiv>
          </div>
          <QuickList>
            <h1>Kapitel</h1>
            <ul>
              {pageInfo.chapters.map((chapter, key) => {
                return (
                  <li key={key}>
                    <a href={`#${chapter.link}`}>{chapter.title}</a>
                  </li>
                )
              })}
            </ul>
          </QuickList>
          {pageInfo.chapters.map((chapter, key) => {
            return <ChapterMenu key={key} course={course} chapter={chapter} />
          })}
        </main>
        <aside className="right">
          <RightStickyDiv>
            <h2>Innehåll</h2>
            <ul>
              <li>
                <a href="#toppen">Gå till toppen</a>
              </li>
              {pageInfo.chapters.map((chapter, key) => {
                return (
                  <li key={key}>
                    <a href={`#${chapter.link}`}>{chapter.title}</a>
                  </li>
                )
              })}
            </ul>
          </RightStickyDiv>
        </aside>
      </div>
    </>
  )
}

export default CoursePage
