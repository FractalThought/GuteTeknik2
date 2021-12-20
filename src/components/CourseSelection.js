import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";

/*

TODO: Fix so it doesn't change immediately for keyboard users.
Behavior should be:
- User focuses on select
- User selects with arrow buttons
- User hits Enter
- Page loads to that course

To achieve: Try using a Form.
May need to use onclick then to still achieve the change with mouse

*/

const Selection = styled.select`
  margin: 0;
  width: 100%;
  font-family: inherit;
  outline: none;
  max-width: 30ch;
  border: 2px solid var(--primary--300);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: var(--large);
  cursor: pointer;
  line-height: 1.1;
  background: var(--primary--100);
  color: var(--primary--900);
  text-align: right;
`;

function CourseItem({ topPages, currentLink }) {
  const handleCourseChange = e => {
    navigate(`/${e.target.value}/`);
  };

  return (
    <nav>
      <Selection id="course-selection" onChange={e => handleCourseChange(e)}>
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
      </Selection>
    </nav>
  );
}

export default CourseItem;
