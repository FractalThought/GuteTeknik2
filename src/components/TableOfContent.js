import React, { useContext } from "react";
import { MainContext } from "./hooks/MainContext";

// import styled from "styled-components"

function TableOfContent({ listOfContent }) {
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

export default TableOfContent;
