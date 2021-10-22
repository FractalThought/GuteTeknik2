import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Container from "../components/Container";
import ChapterMenu from "../components/ChapterMenu";

const QuickList = styled.section`
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  margin-top: 1rem;

  h2 {
    margin: 0;
  }

  ul {
    margin: 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  li {
    list-style: none;
    margin: 0;
  }
`;

function CoursePage({ course, children, url }) {
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

  /*
  Remove the .node-intermediate step, filter out the currrent page,
  and reduce down to a single object
  */

  const pageInfo = data.allPageinfoJson.edges.map(page => {
    return page.node;
  });

  const courseInfo = pageInfo.filter(node => {
    return node.link === course;
  })[0];

  // Use string split for url
  // let urlData = null;

  // if (typeof url !== "undefined" && url != null) {
  //   const urlArray = url.split("/");
  //   urlData = urlArray.filter(data => data !== "");
  // }

  return (
    <Container url={url} pageInfo={pageInfo} pageTitle={courseInfo.name}>
      <div className="content-container">
        <main>
          <div className="page">
            <h1 className="page-heading">{courseInfo.name}</h1>
            {children}
            {courseInfo.chapters.map((chapter, key) => {
              return (
                <ChapterMenu key={key} course={course} chapter={chapter} />
              );
            })}
          </div>
        </main>
        <aside>
          <QuickList>
            <h2>Kapitel</h2>
            <ul>
              {courseInfo.chapters.map((chapter, key) => {
                return (
                  <li key={key}>
                    <a href={`#${chapter.link}`}>{chapter.title}</a>
                  </li>
                );
              })}
            </ul>
          </QuickList>
        </aside>
      </div>
    </Container>
  );

  /*
  
  {pageInfo.chapters.map((chapter, key) => {
  //             return (
  //               <li key={key}>
  //                 <a href={`#${chapter.link}`}>{chapter.title}</a>
  //               </li>
  //             )
  //           })}

  */

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
  //         <h1 className="page-heading">{pageInfo.name}</h1>
  //         <div className="page">
  //           <h1 className="printheader">{pageInfo.name}</h1>
  //           {children}
  //           <ClearDiv></ClearDiv>
  //         </div>

  //       </ContentContainer>
  //     </main>
  //     <aside className="page-index">
  //       <RightStickyDiv>
  //         <h2>Innehåll</h2>
  //         <ul>
  //           <li>
  //             <a href="#toppen">Gå till toppen</a>
  //           </li>
  //
  //         </ul>
  //       </RightStickyDiv>
  //     </aside>
  //   </div>
  // )
}

export default CoursePage;
