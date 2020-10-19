import React from "react"
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

function Container({
  url,
  pages,
  pageinfo,
  crumbData,
  listOfContent,
  pageTitle,
  children,
}) {
  // Use string split for url
  let urlData = null

  if (typeof url !== "undefined") {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  const mainPage = urlData[0]

  const currentPageData = pageinfo.filter(pageData => {
    return pageData.link === mainPage
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
          <MyCrumbs crumbData={crumbData} />
          <h1 className="page-heading">{pageTitle}</h1>
          <div className="page">
            <h1 className="printheader">{pageTitle}</h1>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            <script async src="https://static.codepen.io/assets/embed/ei.js" />
            <ClearDiv></ClearDiv>
          </div>
        </main>
        <aside className="right">
          <TableOfContent listOfContent={listOfContent} />
        </aside>
      </div>
    </>
  )
}

export default Container
