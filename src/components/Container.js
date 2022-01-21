import React, { useState, useEffect, useContext } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { MainContext, mainInfo } from "./hooks/MainContext";
import useUrlData from "./hooks/useUrlData";

/*

Container is the main layout container.
It should however only act as a container, and leave it up to the templates to dictate their layout.
Container is not used for the start page, but used for all pages that are within a single course.
Thus each page has the header and side-menu, but the main area is controlled by the template.

*/

function Container({ navInfo, pageInfo, children }) {
  // TODO: Consider renaming to courseInfo to be more consistent
  const currentCourse = navInfo.filter(pageData => {
    return pageData.link === pageInfo.urlData.course;
  })[0]; // Extracts the active pageInfo.json

  useEffect(() => {
    document.title = `${currentCourse.name} ${
      pageInfo.title ? "/" + pageInfo.title : ""
    } - Tektal`;
  });

  const [showSidebar, setSideBarVisibility] = useState(false);

  // TODO: Abstract away the Container so it is the main layout component for all views

  return (
    <MainContext.Provider value={mainInfo}>
      <ContextWrapper>
        <Header
          sidebarUtility={{ showSidebar, setSideBarVisibility }}
          currentCourse={currentCourse}
          navInfo={navInfo}
        />
        <div id="main-wrapper">
          <div className="layout-container">
            <Sidebar
              showSidebar={showSidebar}
              courseInfo={currentCourse}
              urlData={pageInfo.urlData}
            />
            <div className="content-wrapper">
              {/* Starting from here, this should be dictated by the template */}
              {children}
            </div>
          </div>
        </div>
      </ContextWrapper>
    </MainContext.Provider>
  );
}

const ContextWrapper = ({ children }) => {
  const CurrentMainInfo = useContext(MainContext);
  CurrentMainInfo.currentHeadings = [];

  return <>{children}</>;
};

export default Container;
