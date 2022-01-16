import React, { useContext } from "react";
import { MainContext } from "./hooks/MainContext";

// import styled from "styled-components"

function AdjacentLinks({ pageInfo, next, previous }) {
  const MainInfo = useContext(MainContext);

  let renderedContent = [
    {
      name: "Gå till toppen",
      link: "toppen",
    },
  ];

  renderedContent = [...renderedContent, ...MainInfo.currentHeadings];

  // Old
  // if (listOfContent !== undefined) {
  //   listOfContent.forEach(content => {
  //     const split = content.split(":");
  //     const heading = { name: split[0], link: split[1] };
  //     renderedContent.push(heading);
  //   });
  // }

  console.log("PageInfo:");
  console.log(pageInfo);

  console.log(next);
  console.log(previous);

  /*
  
  pageInfo is an array with each course as an element.
  Each course is an object with a link, name, and chapters which is an array
  Each chapter contains title, link, pages (array), and references (array)
  Each page contains title, link, and type
  Each reference contains title and link

  */

  /*
  
  How this component works:
  Check if next and previous is set (if either is not set, don't render it)
  Check if next or previous contains a slash (in which case its not in the same chapter)
  Look in pageInfo for matches and find their title and render along with a complete link
  If not found, don't render - would be nice if it sent a message to me saying a link is broken, but that can wait
  
  */

  return (
    <>
      <h2>Innehåll</h2>
      <ul>
        {renderedContent.map((heading, key) => {
          return (
            <li key={key}>
              <a href={"#" + heading.link}>{heading.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AdjacentLinks;
