import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="funktioner">
      <p>
        I det här kapitlet introducerar vi funktioner i JavaScript. Funktioner
        har som syfte att stycka in bitar av kod.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
