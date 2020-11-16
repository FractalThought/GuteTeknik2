import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="objekt">
      <p>I det här kapitlet introducerar vi objekt i JavaScript.</p>
    </ChapterPage>
  )
}
