import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage
      url={location.pathname}
      course="prog1"
      chapter="kontrollsatser"
    >
      <p>
        I det här kapitlet introducerar vi kontrollsatser. En kontrollsats låter
        oss styra flödet av koden genom att bestämma vilka bitar av kod som ska
        köras.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
