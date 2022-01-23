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
    content: "<";
  }
`;

const NextSpan = styled.span`
  ::after {
    content: ">";
  }
`;
//                ^
// < Previous  Chapter   Next >

/*

<LinkContainer>
  <PreviousLink><Link></Link></PreviousLink>
  <PreviousLink><Link></Link></PreviousLink>
  <PreviousLink><Link></Link></PreviousLink>
</LinkContainer>

*/

/*

<nav>
  <a>Previous</a>
  <a>Chapter</a> // Rendered regardless
  <a>Next</a>
</nav>

*/

// pageInfo forEach not available

function AdjacentLinks({ pageInfo, navInfo }) {
  const previous = pageInfo.frontmatter.previous;
  const next = pageInfo.frontmatter.next;

  // Check if there is any slashes in next or previous
  // If one slash, assume its a chapter in the same course, and thus add in the course from pageInfo.urlData
  // If no slash, assume its a page in the same chapter and

  // How to do next as "Next chapter"? Since that will have one slash
  // For example it would be prog1/variabler
  // Use another

  // Create a function that constructs the links to ensure they are constructed the same?

  // console.log(pageInfo);
  // console.log(next);
  // console.log(previous);

  // Flatten pageInfo into pages with their url before checking?
  // Would make the checking simpler

  const pages = [];

  navInfo.forEach(course => {
    let constructedLink = course.link;

    course.chapters.forEach(chapter => {
      constructedLink += "/" + chapter.link;

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

  console.log(pages);

  function createAdjacentLink(pages, adjacent) {
    const adjacentPage = pages.filter(page => {
      return page.link === adjacent;
    });

    return adjacentPage;
  }

  const adjacents = [];

  if (previous != null) {
    adjacents.push(createAdjacentLink(pages, previous));
  }

  // add chapter
  const chapterLink = pageInfo.urlData.course + "/" + pageInfo.urlData.chapter;
  adjacents.push(createAdjacentLink(pages, chapterLink));

  if (next != null) {
    adjacents.push(createAdjacentLink(pages, next));
  }

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

  return <LinkContainer></LinkContainer>;
}

export default AdjacentLinks;
