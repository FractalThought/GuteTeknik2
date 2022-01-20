import React, { useContext } from "react";
import { MainContext } from "./hooks/MainContext";

// import styled from "styled-components"

//                ^
// < Previous  Chapter   Next >

/*

<nav>
  <a>Previous</a>
  <a>Chapter</a> // Rendered regardless
  <a>Next</a>
</nav>

*/

function AdjacentLinks({ pageInfo, next, previous }) {
  const previous = pageInfo.frontmatter.previous;
  const next = pageInfo.frontmatter.next;
  // console.log(pageInfo);
  // console.log(next);
  // console.log(previous);

  const adjacents = [];

  if (previous != null) {
  }
  if (next != null) {
  }

  // Flatten pageInfo into pages with their url before checking?
  // Would make the checking simpler

  const pages = [];

  pageInfo.forEach(course => {
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

  console.table(pages);
  // console.log(pages);
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

  return <></>;
}

export default AdjacentLinks;
