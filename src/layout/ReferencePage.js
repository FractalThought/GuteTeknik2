import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ReferenceCard from "../components/ReferenceCard";
import useReferences from "../components/hooks/useReferences";
import { useExtractUrlData } from "../components/hooks/useUrlData";

function ReferencePage({ course, url }) {
  const data = useStaticQuery(graphql`
    query {
      allPageinfoJson {
        edges {
          node {
            name
            link
            chapters {
              title
              link
              pages {
                title
                link
                type
              }
              references {
                title
                link
              }
            }
          }
        }
      }
    }
  `);

  const navInfo = data.allPageinfoJson.edges.map(page => {
    return page.node;
  });

  const chapterInfo = data.allPageinfoJson.edges
    .map(page => {
      return page.node;
    })
    .filter(node => {
      return node.link === course;
    })[0];

  const referenceInfo = useReferences(chapterInfo);

  const pageInfo = {
    urlData: useExtractUrlData(url),
    title: chapterInfo.title,
    frontmatter: {},
  };

  const currentCourse = navInfo.filter(pageData => {
    return pageData.link === pageInfo.urlData.course;
  })[0]; // Extracts the active pageInfo.json

  useEffect(() => {
    document.title = `${currentCourse.name} ${
      pageInfo.title ? "/" + pageInfo.title : ""
    } - Tektal`;
  });

  const [showSidebar, setSideBarVisibility] = useState(false);

  return (
    <>
      <div id="main-grid">
        <Header
          sidebarUtility={{ showSidebar, setSideBarVisibility }}
          currentCourse={currentCourse}
          navInfo={navInfo}
        />
        <Sidebar
          showSidebar={showSidebar}
          courseInfo={currentCourse}
          urlData={pageInfo.urlData}
        />
        <main>
          <h1 className="page-heading">Referenser</h1>
          <ReferenceCard course={course} references={referenceInfo} />
        </main>
        <aside className="page-index"></aside>
      </div>
    </>
  );
}

export default ReferencePage;
