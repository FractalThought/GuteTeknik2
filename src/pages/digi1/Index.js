import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"

const ClearDiv = styled.div`
  clear: both;
`

function Index({ pageContext }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
        edges {
          node {
            body
            fields {
              slug
              id
            }
            frontmatter {
              title
              headings
            }
          }
        }
      }
      allPageinfoJson {
        edges {
          node {
            pageName
            pageLink
            headings {
              title
              subpages {
                subPageName
                subPageLink
              }
            }
          }
        }
      }
    }
  `)

  console.log(pageContext)

  const pages = data.allMdx.edges

  let pageinfo = data.allPageinfoJson.edges

  // Just remove the .node-intermediate step
  pageinfo = pageinfo.map(page => {
    return page.node
  })

  // Use string split for url
  // let urlData = null

  // if (typeof url !== "undefined") {
  //   const urlArray = url.split("/")
  //   urlData = urlArray.filter(data => data !== "")
  // }

  const mainPage = "digi1"
  // const mainPage = urlData[0]

  // const currentPageData = pageinfo.filter(pageData => {
  //   return pageData.pageLink === mainPage
  // })[0]

  return (
    <>
      <Header mainPage={mainPage} />
      <div id="main-wrapper">
        <aside className="left"></aside>
        <main>
          <h1 className="page-heading">Page Title here</h1>
          <div className="page">
            <h1 className="printheader">Page Title here</h1>
            {/* CONTENT GOES HERE */}
            <p>Hello</p>
            <script async src="https://static.codepen.io/assets/embed/ei.js" />
            <ClearDiv></ClearDiv>
          </div>
        </main>
        <aside className="right"></aside>
      </div>
    </>
  )
}

export default Index
