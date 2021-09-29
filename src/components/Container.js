import React, { useState, useEffect, useContext } from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import mdxComponents from "./mdxComponents";
import MyCrumbs from "./MyCrumbs";
import TableOfContent from "./TableOfContent";
import RightStickyDiv from "./RightStickyDiv";
import { MainContext, mainInfo } from "./hooks/MainContext";

const ClearDiv = styled.div`
  clear: both;
`;

function Container({
  url,
  pageInfo,
  crumbData,
  listOfContent,
  pageTitle,
  children,
}) {
  // Use string split for url
  let urlData = null;

  if (typeof url !== "undefined" && url != null) {
    const urlArray = url.split("/");
    urlData = urlArray.filter(data => data !== "");
  }

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
    <div id="main-wrapper">
      <MainContext.Provider value={mainInfo}>
        <ContextWrapper>
          <Header
            sidebarUtility={{ showSidebar, setSideBarVisibility }}
            mainPage={mainPage}
          />
          <div className="layout-container">
            <Sidebar
              showSidebar={showSidebar}
              url={urlData}
              currentPageData={currentPageData}
            />
            <div className="content-container">
              <main>
                <div className="page">
                  <MyCrumbs crumbData={crumbData} />
                  <h1 className="page-heading">{pageTitle}</h1>
                  {/* <h1 className="printheader">{pageTitle}</h1> */}
                  <MDXProvider components={mdxComponents}>
                    {children}
                  </MDXProvider>
                  <ClearDiv></ClearDiv>
                </div>
              </main>
              <aside className="page-index">
                <RightStickyDiv>
                  <TableOfContent listOfContent={listOfContent} />
                </RightStickyDiv>
              </aside>
            </div>
          </div>
        </ContextWrapper>
      </MainContext.Provider>
    </div>
  );
}

const ContextWrapper = ({ children }) => {
  const CurrentMainInfo = useContext(MainContext);
  CurrentMainInfo.currentHeadings = [];

  return <>{children}</>;
};

export default Container;
