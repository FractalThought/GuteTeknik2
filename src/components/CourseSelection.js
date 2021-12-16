import React, { useState } from "react";
import { navigate } from "gatsby";
// import MyImg from "./MyImg"

function CourseItem({ topPages, currentLink }) {
  // event.preventDefault()
  // // TODO: do something with form values
  // navigate("/form-submitted/")

  const handleCourseChange = e => {
    navigate(`/${e.target.value}/`);
  };

  return (
    <select onChange={e => handleCourseChange(e)}>
      {topPages.map((topPage, key) => {
        if (currentLink === topPage.link) {
          return (
            <option key={key} value={topPage.link} selected>
              {topPage.name}
            </option>
          );
        } else {
          return (
            <option key={key} value={topPage.link}>
              {topPage.name}
            </option>
          );
        }
      })}
    </select>
  );
}

export default CourseItem;
