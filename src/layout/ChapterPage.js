import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Container from "../components/Container";
import ChapterMenu from "../components/ChapterMenu";
import { useExtractUrlData } from "../components/hooks/useUrlData";

function ChapterPage({ course, chapter, children, url }) {
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

  const PageContainer = styled.div`
    padding: 2rem;
  `;

  /*
  Remove the .node-intermediate step, filter out the currrent page,
  and reduce down to a single object
  */

  const navInfo = data.allPageinfoJson.edges.map(page => {
    return page.node;
  });

  const chapterInfo = navInfo
    .filter(node => {
      return node.link === course;
    })[0]
    .chapters.filter(chapterObject => {
      return chapterObject.link === chapter;
    })[0];

  const pageInfo = {
    urlData: useExtractUrlData(url),
    title: chapterInfo.title,
    frontmatter: {},
  };

  return (
    <Container navInfo={navInfo} pageInfo={pageInfo}>
      <PageContainer>
        <h1>{chapterInfo.title}</h1>
        {children}
        <ChapterMenu course={course} chapter={chapterInfo} hideTitle={true} />
      </PageContainer>
    </Container>
  );

  // return (
  //   <div id="main-grid">
  //     <Header
  //       sidebarUtility={{ showSidebar, setSideBarVisibility }}
  //       mainPage={course}
  //     />
  //     <Sidebar
  //       showSidebar={showSidebar}
  //       url={urlData}
  //       currentPageData={pageInfo}
  //     />
  //     <main>
  //       <ContentContainer>
  //         <h1 className="page-heading">{chapterInfo.title}</h1>
  //         <div className="page">
  //           <h1 className="printheader">{chapterInfo.title}</h1>
  //           {children}
  //           <ClearDiv></ClearDiv>
  //         </div>
  //         <ChapterMenu course={course} chapter={chapterInfo} hideTitle={true} />
  //       </ContentContainer>
  //     </main>
  //     <aside className="page-index"></aside>
  //   </div>
  // );
}

export default ChapterPage;
