import React from "react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

function Container({ url, pages, children }) {
  // Use string split for url

  let urlData = null

  if (typeof url !== "undefined") {
    // the variable is defined

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
          {children}
          <script async src="https://static.codepen.io/assets/embed/ei.js" />
        </main>
        <aside className="right">Information</aside>
      </div>
    </>
  )
}

export default Container
