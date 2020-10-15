import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import mdxComponents from "./mdxComponents"
import MyCrumbs from "./MyCrumbs"
import TableOfContent from "./TableOfContent"

const ClearDiv = styled.div`
  clear: both;
`

function Index({
  url,
  pages,
  pageinfo,
  crumbData,
  listOfContent,
  pageTitle,
  children,
}) {
  const data = useStaticQuery(graphql`
  query() {
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

const allInfo = data.allMdx.edges

  let pageinfo = data.allPageinfoJson.edges

  // Just remove the .node-intermediate step
  pageinfo = pageinfo.map(page => {
    return page.node
  })

  // Use string split for url
  let urlData = null

  if (typeof url !== "undefined") {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  const mainPage = urlData[0]

  const currentPageData = pageinfo.filter(pageData => {
    return pageData.pageLink === mainPage
  })[0]

  return (
    <>
      <Header mainPage={mainPage} />
      <div id="main-wrapper">
        <aside className="left">
          <Sidebar
            urlData={urlData}
            pages={pages}
            currentPageData={currentPageData}
          />
        </aside>
        <main>
          <h1 className="page-heading">{pageTitle}</h1>
          <div className="page">
            <h1 className="printheader">{pageTitle}</h1>
            {/* CONTENT GOES HERE */}
            <script async src="https://static.codepen.io/assets/embed/ei.js" />
            <ClearDiv></ClearDiv>
          </div>
        </main>
        <aside className="right">
        </aside>
      </div>
    </>
  )
}

export default Container
