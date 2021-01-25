import React from "react"
import { MDXProvider } from "@mdx-js/react"
import styled from "styled-components"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import mdxComponents from "./mdxComponents"
import MyCrumbs from "./MyCrumbs"
import TableOfContent from "./TableOfContent"
import RightStickyDiv from "./RightStickyDiv"

const ClearDiv = styled.div`
  clear: both;
`

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 50em;
`

function Container({
  url,
  pageInfo,
  crumbData,
  listOfContent,
  pageTitle,
  children,
}) {
  // Use string split for url
  let urlData = null

  if (typeof url !== "undefined" && url != null) {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  const mainPage = urlData[0]

  const currentPageData = pageInfo.filter(pageData => {
    return pageData.link === mainPage
  })[0]

  return (
    <>
      <Header mainPage={mainPage} />
      <div id="main-wrapper">
        <aside className="left">
          <Sidebar url={urlData} currentPageData={currentPageData} />
        </aside>
        <main>
          <MyCrumbs crumbData={crumbData} />
          <div className="page">
            <ContentContainer>
            <h1 className="page-heading">{pageTitle}</h1>
            {/* <h1 className="printheader">{pageTitle}</h1> */}
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            <ClearDiv></ClearDiv>
            </ContentContainer>
          </div>
        </main>
        <aside className="right">
          <RightStickyDiv>
            <TableOfContent listOfContent={listOfContent} />
          </RightStickyDiv>
        </aside>
      </div>
    </>
  )
}

export default Container
