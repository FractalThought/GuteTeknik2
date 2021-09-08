import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SidebarHeading from "./SidebarHeading"
import useProjects from "../components/hooks/useProjects"
import useReferences from "../components/hooks/useReferences"

// Currently replaced with CSS in global.scss
const CourseSection = styled.section``

function extractUrlData(url) {
  let currentCourse,
    currentChapter,
    currentPage = "index"

  if (url.length >= 1) {
    currentCourse = url[0]

    if (url.length > 1) {
      currentChapter = url[1]
      currentPage = url[url.length - 1]
    } else {
      currentPage = currentCourse
    }
  }

  return { course: currentCourse, chapter: currentChapter, page: currentPage }
}

function Sidebar({ url, currentPageData }) {
  const urlData = extractUrlData(url)

  useEffect(() => {
    document.title = `GuteTeknik  ${currentPageData.name}`
  })

  const projects = useProjects(currentPageData)
  const projectData = { title: "Projekt", link: null, pages: projects }

  const references = useReferences(currentPageData)
  const referenceData = {
    title: "Referenser",
    link: "referenser",
    pages: references,
  }

  return (
    <nav className="sidemenu">
      <section className="menu-section">
        <Link className="menu-section__heading" to={"/" + currentPageData.link}>
          <h2>{currentPageData.name}</h2>
        </Link>
        <div className="menu-section__list">
          <Link to={"/" + currentPageData.link + "/planering"}>Planering</Link>
          <Link to={"/" + currentPageData.link + "/betygskriterier"}>
            Betygskriterier
          </Link>
        </div>
      </section>
      {currentPageData.chapters.map((chapter, index) => (
        <SidebarHeading key={index} headingData={chapter} urlData={urlData} />
      ))}
      <SidebarHeading headingData={referenceData} urlData={urlData} />
      <SidebarHeading headingData={projectData} urlData={urlData} />
    </nav>
  )
}

export default Sidebar
