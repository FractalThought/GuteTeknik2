import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="webb1" chapter="intro">
      <p>I det här kapitlet introducerar vi webbutveckling.</p>
    </ChapterPage>
  )
}
