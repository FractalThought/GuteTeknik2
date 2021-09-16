import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage
      url={location.pathname}
      course="webb2"
      chapter="utvecklingspraxis"
    >
      <p>
        I det här kapitlet arbetar vi med god utvecklingspraxis, specifikt
        BEM-metoden, designsystem, och CSS variabler.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
