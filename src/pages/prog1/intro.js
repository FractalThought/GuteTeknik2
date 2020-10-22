import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="intro">
      <p>
        I det här kapitlet introducerar vi programmering, och går igenom hur vi
        hanterar foldrar och filer, samt hur ett skript fungerar.
      </p>
    </ChapterPage>
  )
}
