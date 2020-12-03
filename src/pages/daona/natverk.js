import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="daona" chapter="natverk">
      <p>Vi går igenom nätverk och hur de fungerar.</p>
    </ChapterPage>
  )
}
