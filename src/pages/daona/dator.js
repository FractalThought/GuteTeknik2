import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="daona" chapter="dator">
      <p>Vi går igenom datorer och hur de fungerar.</p>
    </ChapterPage>
  )
}
