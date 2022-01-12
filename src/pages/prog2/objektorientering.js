import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage
      url={location.pathname}
      course="prog2"
      chapter="objektorientering"
    >
      <p>I det här kapitlet introducerar vi objektorientering.</p>
    </ChapterPage>
  );
};

export default ThisPage;
