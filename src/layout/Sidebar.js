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

  const references = removeDuplicates(
    currentPageData.chapters.map(chapter => {
      return chapter.references
    }),
    "link"
  )[0]

  /*
  Need to check through all the chapters, and then all the references
  Add reference to references-array that is not already there

  */

  function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    })
  }

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
      <section>
        <h2>Referenser</h2>
        <ul>
          {references.map((reference, index) => (
            <li key={index}>
              <Link
                to={
                  "/" + currentPageData.link + "/referenser/" + reference.link
                }
                className={
                  currentPage === reference.link ? "active" : "inactive"
                }
              >
                {reference.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default Sidebar
