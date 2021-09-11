import React from "react"
import ChapterPage from "../../layout/ChapterPage"

export default ({ location }) => {
  return (
    <ChapterPage
      url={location.pathname}
      course="prog1"
      chapter="iterationssatser"
    >
      <p>
        I det här kapitlet introducerar vi loopar och konceptet att köra om en
        bit kod flera gånger.
      </p>
    </ChapterPage>
  )
}
