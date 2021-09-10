import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage url={location.pathname} course="prog1" chapter="arrayer">
      <p>
        Arrayer använder vi för att hålla flera av ett värde, och fungerar lite
        som en lista. I det här kapitlet går vi igenom vad arrayer är, hur de
        fungerar, och deras användningsområde.
      </p>
    </ChapterPage>
  )
}
