import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SidebarHeading from "./SidebarHeading"

function extractTopPage(url) {
  let topPage,
    currentPage = "index"

  if (typeof url !== "undefined" && url != null) {
    if (urlData.length >= 1) {
      topPage = url[0]

      if (url.length > 1) {
        currentPage = url[1]
      } else {
        currentPage = topPage
      }
    }
  }

  return [topPage, currentPage]
}

function Sidebar({ urlData, pages }) {
  let [topPage, currentPage] = extractPages(urlData)

  let printPages = pages
    .filter(page => {
      // page.id
      // page.excerpt
      // page.fields.slug

      let [currentTopPage, actualPage] = extractPages(page.fields.slug)
      page.topPage = currentTopPage
      page.actualPage = actualPage

      // page.frontmatter.title
      // page.frontmatter.heading

      /*
    
    Filter out only the pages needed and with it, sort them into headings
    
    */
    })
    .map(page => {})

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
