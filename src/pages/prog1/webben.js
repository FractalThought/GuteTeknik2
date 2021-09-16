import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="webben">
      <p>
        I det här kapitlet introducerar vi JavaScript på webben - hur vi kan
        lägga till iteraktion till en hemsida och skapa en webbapplikation.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
