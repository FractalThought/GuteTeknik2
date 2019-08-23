import React from "react"
import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"

function Container({ url, children }) {
  // Use string split for url

  let urlData = null

  if (typeof url !== "undefined") {
    // the variable is defined

    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  return (
    <React.Fragment>
      <Header />
      <div id="main-wrapper">
        <aside>
          <Sidebar urlData={urlData} />
        </aside>
        <main>
          {children}
          <script async src="https://static.codepen.io/assets/embed/ei.js" />
        </main>
      </div>
    </React.Fragment>
  )
}

export default Container
