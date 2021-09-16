import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="daona" chapter="natverk">
      <p>Vi går igenom nätverk och hur de fungerar.</p>
    </ChapterPage>
  );
};

export default ThisPage;
