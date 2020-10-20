import React, { useEffect } from "react"
import { Link } from "gatsby"
import SidebarHeading from "./SidebarHeading"

function extractUrlData(url) {
  let topPage,
    currentPage = "index"

  if (typeof url !== "undefined" && url != null) {
    if (url.length >= 1) {
      topPage = url[0]

      if (url.length > 1) {
        currentPage = url[url.length - 1]
      } else {
        currentPage = topPage
      }
    }
  }

  return currentPage
}

function Sidebar({ urlData, currentPageData }) {
  let currentPage = extractUrlData(urlData)

  useEffect(() => {
    document.title = `GuteTeknik  ${currentPageData.name}`
  })

  return (
    <nav>
      <section>
        <Link to={"/" + currentPageData.link}>
          <h2>{currentPageData.name}</h2>
        </Link>
        <ul>
          <li>
            <Link to={"/" + currentPageData.link + "/planering"}>
              Planering
            </Link>
          </li>
          <li>
            <Link to={"/" + currentPageData.link + "/betygskriterier"}>
              Betygskriterier
            </Link>
          </li>
        </ul>
      </section>
      {currentPageData.chapters.map((chapter, index) => (
        <SidebarHeading
          key={index}
          mainPage={currentPageData.link}
          chapter={chapter}
          currentPage={currentPage}
        />
      ))}
    </nav>
  )
}

export default Sidebar
