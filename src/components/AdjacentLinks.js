import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LinkContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const PreviousSpan = styled.span`
  ::before {
    content: "< ";
  }
`;

const NextSpan = styled.span`
  ::after {
    content: " >";
  }
`;

function ConditionalAdjacent({ doRender, children }) {
  if (doRender) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}

//                ^
// < Previous  Chapter   Next >

function AdjacentLinks({ pageInfo, navInfo }) {
  let previous =
    pageInfo.urlData.course +
    "/" +
    pageInfo.urlData.chapter +
    "/" +
    pageInfo.frontmatter.previous;
  let next =
    pageInfo.urlData.course +
    "/" +
    pageInfo.urlData.chapter +
    "/" +
    pageInfo.frontmatter.next;

  /*

    page
    chapter/page
    :chapter?

  */

  // Flatten pageInfo into pages with their url before checking?
  // Would make the checking simpler

  // Currently this doesn't work because the links need to include the currentCourse and chapter
  // Essentially need to add a "Correct the Link"- function

  // Check if there is any slashes in next or previous
  // If one slash, assume its in a chapter in the same course, and thus add in the course from pageInfo.urlData
  // If no slash, assume its a page in the same chapter and then add the course and chapter to the url

  // How to do next as "Next chapter"? Since that will have one slash
  // For example it would be prog1/variabler

  const pages = [];

  navInfo.forEach(course => {
    let constructedLink = course.link;

    course.chapters.forEach(chapter => {
      constructedLink = course.link + "/" + chapter.link;

      const constructedChapter = {
        title: chapter.title,
        link: constructedLink,
        type: "chapter",
      };
      pages.push(constructedChapter);

      chapter.pages.forEach(page => {
        const constructedPage = {
          title: page.title,
          link: constructedLink + "/" + page.link,
          type: page.type,
        };

        pages.push(constructedPage);
      });
      if (chapter.references != null) {
        chapter.references.forEach(page => {
          const constructedPage = {
            title: page.title,
            link: constructedLink + "/" + page.link,
            type: "reference",
          };

          pages.push(constructedPage);
        });
      }
    });
  });

  function createAdjacentLink(isSet, pages, adjacent) {
    const adjacentPage = pages.filter(page => {
      return page.link === adjacent;
    })[0];

    if (adjacentPage !== undefined) {
      adjacentPage.isSet = isSet;
      return adjacentPage;
    } else {
      return { isSet: false };
    }
  }

  const adjacents = {
    previous: createAdjacentLink(previous != null, pages, previous),
    chapter: createAdjacentLink(
      true,
      pages,
      pageInfo.urlData.course + "/" + pageInfo.urlData.chapter
    ),
    next: createAdjacentLink(next != null, pages, next),
  };

  /*
  
  pageInfo is an array with each course as an element.
  Each course is an object with a link, name, and chapters which is an array
  Each chapter contains title, link, pages (array), and references (array)
  Each page contains title, link, and type
  Each reference contains title and link

  */

  /*
  
  How this component works:
  Check if next and previous is set (if either is not set, don't render it) not set == null
  Check if next or previous contains a slash (in which case its not in the same chapter)
  Look in pageInfo for matches and find their title and render along with a complete link
  If not found, don't render - would be nice if it sent a message to me saying a link is broken, but that can wait
  
  */

  return (
    <LinkContainer>
      <ConditionalAdjacent doRender={adjacents.previous.isSet}>
        <PreviousSpan>
          <Link to={"/" + adjacents.previous.link}>
            {adjacents.previous.title}
          </Link>
        </PreviousSpan>
      </ConditionalAdjacent>
      <span>
        Kapitel:
        <Link to={"/" + adjacents.chapter.link}>{adjacents.chapter.title}</Link>
      </span>
      <ConditionalAdjacent doRender={adjacents.next.isSet}>
        <NextSpan>
          <Link to={"/" + adjacents.next.link}>{adjacents.next.title}</Link>
        </NextSpan>
      </ConditionalAdjacent>
    </LinkContainer>
  );
}

export default AdjacentLinks;
