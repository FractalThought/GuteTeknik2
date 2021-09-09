import React, { useEffect } from "react"
import { Link } from "gatsby"
import SidebarHeading from "./SidebarHeading"
// import useProjects from "../components/hooks/useProjects"
// import useReferences from "../components/hooks/useReferences"

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

function Sidebar({ url, currentPageData, showSidebar }) {
  const urlData = extractUrlData(url)

  useEffect(() => {
    document.title = `GuteTeknik  ${currentPageData.name}`
  })

  // const projects = useProjects(currentPageData)
  // const projectData = { title: "Projekt", link: null, pages: projects }

  // const references = useReferences(currentPageData)
  // const referenceData = {
  //   title: "Referenser",
  //   link: "referenser",
  //   pages: references,
  // }

  const shortcuts = [
    {
      name: "Planering",
      link: "planering",
      image: "",
    },
    // {
    //   name: "Bedömning",
    //   link: "bedömning",
    //   image: "",
    // },
    {
      name: "Referenser",
      link: "referenser",
      image: "",
    },
    // {
    //   name: "Övningar",
    //   link: "övningar",
    //   image: "",
    // },
    // {
    //   name: "Uppgifter",
    //   link: "uppgifter",
    //   image: "",
    // },
  ]

  return (
    <nav className={showSidebar ? "sidemenu sidemenu--show" : "sidemenu"}>
      <Link className="sidemenu__heading" to={"/" + currentPageData.link}>
        <h2>{currentPageData.name}</h2>
      </Link>
      <ul className="sidemenu__shortcutlist">
        {shortcuts.map((shortcut, index) => {
          return (
            <li key={index}>
              <Link to={"/" + currentPageData.link + "/" + shortcut.link}>
                {shortcut.name}
              </Link>
            </li>
          )
        })}
      </ul>
      {currentPageData.chapters.map((chapter, index) => (
        <SidebarHeading key={index} headingData={chapter} urlData={urlData} />
      ))}
    </nav>
  )
}

export default Sidebar
