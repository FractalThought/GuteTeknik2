import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ChapterMenu from "../components/ChapterMenu"

const ClearDiv = styled.div`
  clear: both;
`

function ChapterPage({ course, chapter, children, url }) {
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

  const chapterInfo = pageInfo.chapters.filter(chapterObject => {
    return chapterObject.link === chapter
  })[0]

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
          <h1 className="page-heading">{chapterInfo.title}</h1>
          <div className="page">
            <h1 className="printheader">{chapterInfo.title}</h1>
            {children}
            <ClearDiv></ClearDiv>
          </div>
          <ChapterMenu course={course} chapter={chapterInfo} hideTitle={true} />
        </main>
        <aside className="right"></aside>
      </div>
    </>
  )
}

export default ChapterPage
