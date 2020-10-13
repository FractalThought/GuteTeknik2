import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import mdxComponents from "./mdxComponents"
import MyCrumbs from "./MyCrumbs"
import TableOfContent from "./TableOfContent"

function Container({
  url,
  pages,
  pageinfo,
  crumbData,
  listOfContent,
  children,
}) {
  // Use string split for url
  let urlData = null

  if (typeof url !== "undefined") {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  const mainPage = urlData[0]

  // console.log(mainPage)
  // console.log(pageinfo);

  const currentPageData = pageinfo.filter(pageData => {
    return pageData.pageLink === mainPage
  })[0]

  console.log(currentPageData)

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
          <div className="page">
            <h1 className="printheader">GuteTeknik</h1>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            <script async src="https://static.codepen.io/assets/embed/ei.js" />
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
