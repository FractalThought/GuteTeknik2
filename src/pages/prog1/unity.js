import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="unity">
      <p>Vi går igenom grunderna i Unity, och bygger en Space shooter.</p>
    </ChapterPage>
  );
};

export default ThisPage;
