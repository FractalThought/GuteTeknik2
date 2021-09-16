import React, { useState, useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import mdxComponents from "./mdxComponents";
import MyCrumbs from "./MyCrumbs";
import TableOfContent from "./TableOfContent";
import RightStickyDiv from "./RightStickyDiv";

const ClearDiv = styled.div`
  clear: both;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 70ch;
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
    <div id="main-grid">
      <Header
        sidebarUtility={{ showSidebar, setSideBarVisibility }}
        mainPage={mainPage}
      />
      <Sidebar
        showSidebar={showSidebar}
        url={urlData}
        currentPageData={currentPageData}
      />
      <main>
        <ContentContainer className="page">
          <MyCrumbs crumbData={crumbData} />
          <h1 className="page-heading">{pageTitle}</h1>
          {/* <h1 className="printheader">{pageTitle}</h1> */}
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          <ClearDiv></ClearDiv>
        </ContentContainer>
      </main>
      <aside className="page-index">
        <RightStickyDiv>
          <TableOfContent listOfContent={listOfContent} />
        </RightStickyDiv>
      </aside>
    </div>
  );
}

export default Container;
