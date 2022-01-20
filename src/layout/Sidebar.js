import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import SidebarHeading from "./SidebarHeading";
// import useProjects from "../components/hooks/useProjects"
// import useReferences from "../components/hooks/useReferences"

function extractUrlData(url) {
  let currentCourse,
    currentChapter,
    currentPage = "index";

  if (url.length >= 1) {
    currentCourse = url[0];

    if (url.length > 1) {
      currentChapter = url[1];
      currentPage = url[url.length - 1];
    } else {
      currentPage = currentCourse;
    }
  }

  return { course: currentCourse, chapter: currentChapter, page: currentPage };
}

function Sidebar({ url, currentCourse, showSidebar }) {
  const urlData = extractUrlData(url);

  // const projects = useProjects(currentCourse)
  // const projectData = { title: "Projekt", link: null, pages: projects }

  // const references = useReferences(currentCourse)
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
    // {
    //   name: "Referenser",
    //   link: "referenser",
    //   image: "",
    // },
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
  ];

  // TODO: ScrollTo active
  // https://stackoverflow.com/questions/635706/how-to-scroll-to-an-element-inside-a-div

  setTimeout(() => {
    // const currentActiveLink = document.querySelector(
    //   ".menu-section__link--active"
    // );
    // if (currentActiveLink != null) {
    //   const topPos = currentActiveLink.offsetTop;
    //   document.querySelector(".sidemenu").scrollTop = topPos;
    // }
  }, 1000);

  const currentActiveLink = useRef();
  const sideMenu = useRef();
  useEffect(() => {
    if (currentActiveLink.current != null) {
      const activeLinkElement = currentActiveLink.current;
      const sideMenuElement = sideMenu.current;
      const topPos = activeLinkElement.offsetTop;
      sideMenuElement.scrollTop = topPos;
    }
  }, []);

  return (
    <div className={showSidebar ? "sidebar sidebar--show" : "sidebar"}>
      <div className="sidemenu-wrapper">
        <nav ref={sideMenu} className="sidemenu">
          <Link className="sidemenu__heading" to={"/" + currentCourse.link}>
            <h2>{currentCourse.name}</h2>
          </Link>
          <ul className="sidemenu__shortcutlist">
            {shortcuts.map((shortcut, index) => {
              return (
                <li key={index}>
                  <Link to={"/" + currentCourse.link + "/" + shortcut.link}>
                    {shortcut.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {currentPageData.chapters.map((chapter, index) => (
            <SidebarHeading
              key={index}
              headingData={chapter}
              urlData={urlData}
              activeRef={currentActiveLink}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
