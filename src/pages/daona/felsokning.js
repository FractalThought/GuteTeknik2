import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="daona" chapter="felsokning">
      <p>Vi kollar igenom sätt man kan felsöka.</p>
    </ChapterPage>
  )
}
