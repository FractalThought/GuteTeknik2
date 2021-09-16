import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="daona" chapter="felsokning">
      <p>Vi kollar igenom sätt man kan felsöka.</p>
    </ChapterPage>
  );
};

export default ThisPage;
