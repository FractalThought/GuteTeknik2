import React from "react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "./mdxComponents"

function Container({ url, pages, children }) {
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
          <h1 className="printheader">GuteTeknik</h1>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          <script async src="https://static.codepen.io/assets/embed/ei.js" />
        </main>
        <aside className="right"></aside>
      </div>
    </>
  )
}

export default Container
