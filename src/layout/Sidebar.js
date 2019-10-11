import React, { useEffect } from "react"
import { Link } from "gatsby"
import SidebarHeading from "./SidebarHeading"

function extractPages(url) {
  let topPage,
    currentPage = "index"

  if (typeof url !== "undefined" && url != null) {
    if (url.length >= 1) {
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
  let headingData = {}

  pages.map(page => {
    // page.id
    // page.excerpt
    // page.fields.slug
    let node = page.node

    let [topPageOfSubpage, actualPage] = extractPages(node.fields.slug)
    if (topPageOfSubpage) {
      // The subpages' top page is the same as the current pages top page.
      node.topPage = topPageOfSubpage
      node.actualPage = actualPage
      node.isActive = actualPage === currentPage
      if (
        node.frontmatter.heading !== "" &&
        typeof node.frontmatter.heading !== "undefined" &&
        node.frontmatter.heading != null
      ) {
        let headingName = node.frontmatter.heading.trim()
        if (headingData[headingName] === undefined) {
          headingData[headingName] = {}
          headingData[headingName].pages = []
        }
        headingData[headingName].title = node.frontmatter.heading
        headingData[headingName].pages.push(node)
      }
    }

    return page

    // page.frontmatter.title
    // page.frontmatter.heading

    /*
    
        Filter out only the pages needed and with it, sort them into headings
        Will need to create an object to hold all, then add a heading-object based on heading-name

        pagesObject["headingName"].pages = array of pages objects
        pagesObject["headingName"].title = original heading string
    
      */
  })

  let pageData = require("../pageinfo/" + topPage + ".json") // Still need this for top page info

  useEffect(() => {
    document.title = "GuteTeknik " + pageData.pageName
  })

  let headings = Object.values(headingData) // gets the array of headings only

  return (
    <React.Fragment>
      <section>
        <h1>{pageData.pageName}</h1>
        <Link to={"/" + pageData.pageLink}>{pageData.pageName}</Link>
      </section>
      {headings.map((heading, index) => (
        <SidebarHeading key={index} heading={heading} />
      ))}
    </React.Fragment>
  )

  // return (
  //   <React.Fragment>
  //     <section>
  //       <h1>{pageData.pageName}</h1>
  //       <Link to={"/" + pageData.pageLink}>{pageData.pageName}</Link>
  //     </section>
  //     {pageData.headings.map((heading, index) => (
  //       <SidebarHeading
  //         key={index}
  //         mainPage={pageData.pageLink}
  //         title={heading.title}
  //         subpages={heading.subpages}
  //         currentPage={currentPage}
  //       />
  //     ))}
  //   </React.Fragment>
  // )
}

export default Sidebar
