import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SidebarHeading from "./SidebarHeading"
import useProjects from "../components/hooks/useProjects"
import useReferences from "../components/hooks/useReferences"

const CourseSection = styled.section`
  padding: 0.5rem;

  ul {
    margin: 0;
  }

  a > h2 {
    color: rgba(54, 107, 211, 1);
  }

  a:hover > h2 {
    color: #8aa9e5;
  }

  a {
    color: rgba(44, 96, 199, 1);
  }

  a:hover {
    text-decoration: underline;
  }
`

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
    <nav>
      <CourseSection>
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
      </CourseSection>
      {currentPageData.chapters.map((chapter, index) => (
        <SidebarHeading key={index} headingData={chapter} urlData={urlData} />
      ))}
      <SidebarHeading headingData={referenceData} urlData={urlData} />
      <SidebarHeading headingData={projectData} urlData={urlData} />
    </nav>
  )
}

export default Sidebar
