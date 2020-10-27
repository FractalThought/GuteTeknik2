import React from "react"
import CoursePage from "../../layout/CoursePage"

export default ({ location }) => {
  return (
    <CoursePage url={location.pathname} course="webb2">
      <p>
        Den här kursen ingår i ämnet Webbutveckling och är en del av
        inriktningen Information- och Medieteknik i Teknikprogrammet.
      </p>
    </CoursePage>
  )
}
