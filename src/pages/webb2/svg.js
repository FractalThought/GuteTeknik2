import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="webb2" chapter="svg">
      <p>
        I det här kapitlet introducerar vi programmering, och går igenom hur vi
        hanterar foldrar och filer, samt hur ett skript fungerar.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
