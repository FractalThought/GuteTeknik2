import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="variabler">
      <p>
        I det här kapitlet introducerar vi variabler, som gör att vi kan hålla
        och förändra värden.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
