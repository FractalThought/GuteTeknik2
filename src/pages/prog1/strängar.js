import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="strängar">
      <p>
        I det här kapitlet introducerar vi strängmanipulation, konsten att lägga
        till, ta bort, och på annat sätt förändra strängar.
      </p>
    </ChapterPage>
  )
}
