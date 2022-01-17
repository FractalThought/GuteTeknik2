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

function Container({ url, pageInfo, pageTitle, children }) {
  // Use string split for url
  let urlData = useUrlData(url);

  const mainPage = urlData[0];

  const currentPageData = pageInfo.filter(pageData => {
    return pageData.link === mainPage;
  })[0];

  useEffect(() => {
    document.title = `${currentPageData.name} ${
      pageTitle ? "/" + pageTitle : ""
    } - Tektal`;
  });

  const [showSidebar, setSideBarVisibility] = useState(false);

  // TODO: Abstract away the Container so it is the main layout component for all views

  return (
    <MainContext.Provider value={mainInfo}>
      <ContextWrapper>
        <Header
          sidebarUtility={{ showSidebar, setSideBarVisibility }}
          mainPage={mainPage}
        />
        <div id="main-wrapper">
          <div className="layout-container">
            <Sidebar
              showSidebar={showSidebar}
              url={urlData}
              currentPageData={currentPageData}
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
