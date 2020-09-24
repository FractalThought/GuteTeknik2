import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import mdxComponents from "./mdxComponents"
import MyCrumbs from "./MyCrumbs"

function Container({ url, pages, crumbData, children }) {
  // Use string split for url

  let urlData = null

  if (typeof url !== "undefined") {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  return (
    <>
      <Header />
      <div id="main-wrapper">
        <aside className="left">
          <Sidebar urlData={urlData} pages={pages} />
        </aside>
        <main>
          <MyCrumbs />
          <div className="page">
            <h1 className="printheader">GuteTeknik</h1>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
            <script async src="https://static.codepen.io/assets/embed/ei.js" />
          </div>
        </main>
        <aside className="right"></aside>
      </div>
    </>
  )
}

export default Container
