import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="webb2" chapter="variabler">
      <p>I det här kapitlet kollar vi på CSS-variabler.</p>
    </ChapterPage>
  );
};

export default ThisPage;
