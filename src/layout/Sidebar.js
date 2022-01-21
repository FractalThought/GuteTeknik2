import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import SidebarHeading from "./SidebarHeading";

// courseInfo not available

function Sidebar({ showSidebar, urlData, courseInfo }) {
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

  // Scroll to active link
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
          <Link className="sidemenu__heading" to={"/" + courseInfo.link}>
            <h2>{courseInfo.name}</h2>
          </Link>
          <ul className="sidemenu__shortcutlist">
            {shortcuts.map((shortcut, index) => {
              return (
                <li key={index}>
                  <Link to={"/" + courseInfo.link + "/" + shortcut.link}>
                    {shortcut.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {courseInfo.chapters.map((chapter, index) => (
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
