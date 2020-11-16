import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="funktioner">
      <p>I det här kapitlet introducerar vi funktioner i JavaScript.</p>
    </ChapterPage>
  )
}
