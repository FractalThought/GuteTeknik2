import React, { useEffect } from "react"
import { Link } from "gatsby"
import SidebarHeading from "./SidebarHeading"
import useProjects from "../components/hooks/useProjects"
import useReferences from "../components/hooks/useReferences"

function extractUrlData(url) {
  let currentCourse,
    currentChapter,
    currentPage = "index"

  if (url.length >= 1) {
    currentCourse = url[0]

    if (url.length > 1) {
      if (url.length > 2) {
        currentChapter = url[1]
      }
      currentPage = url[url.length - 1]
    } else {
      currentPage = currentCourse
    }
  }

  return [currentCourse, currentChapter, currentPage]
}

function Sidebar({ urlData, currentPageData }) {
  let [currentCourse, currentChapter, currentPage] = extractUrlData(urlData)

  useEffect(() => {
    document.title = `GuteTeknik  ${currentPageData.name}`
  })

  const projects = useProjects(currentPageData)

  const references = useReferences(currentPageData)

  console.log("CurrentChapter: " + currentChapter)

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
          currentChapter={currentChapter}
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
      <section>
        <h2>Projekt</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <Link
                to={`/${currentPageData.link}/${project.link}`}
                className={
                  currentPage === project.link.split("/")[1]
                    ? "active"
                    : "inactive"
                }
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  )
}

export default Sidebar
