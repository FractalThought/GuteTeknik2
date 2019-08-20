import React, { useEffect } from "react"
import { Link } from "gatsby"
import SidebarHeading from "./SidebarHeading"

function Sidebar({ urlData }) {
  let topPage = "index"
  let currentPage = topPage

  if (typeof urlData !== "undefined" && urlData != null) {
    if (urlData.length >= 1) {
      topPage = urlData[0]

      if (urlData.length > 1) {
        currentPage = urlData[1]
      } else {
        currentPage = topPage
      }
    }
  }

  let pageData = require("../pageinfo/" + topPage + ".json")

  useEffect(() => {
    document.title = "GuteTeknik " + pageData.pageName
  })

  return (
    <React.Fragment>
      <section>
        <h1>{pageData.pageName}</h1>
        <Link to={"/" + pageData.pageLink}>{pageData.pageName}</Link>
      </section>
      {pageData.headings.map((heading, index) => (
        <SidebarHeading
          key={index}
          mainPage={pageData.pageLink}
          title={heading.title}
          subpages={heading.subpages}
          currentPage={currentPage}
        />
      ))}
    </React.Fragment>
  )
}

export default Sidebar
