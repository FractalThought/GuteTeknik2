import React from "react";
import ChapterPage from "../../layout/ChapterPage";

const ThisPage = ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="daona" chapter="windows">
      <p>
        Vi tittar närmare på Windows och olika sätt att hantera det
        operativsystemet. Vi går igenom diverse verktyg som finns inbyggda i
        Windows, använder kortkommandon, och testar på Batch-skriptning med
        DOSkommandon.
      </p>
    </ChapterPage>
  );
};

export default ThisPage;
