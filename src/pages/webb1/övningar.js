import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="webb1" chapter="övningar">
      <p>Här är alla introduktionsövningar samlade.</p>
    </ChapterPage>
  );
};

export default ThisPage;
