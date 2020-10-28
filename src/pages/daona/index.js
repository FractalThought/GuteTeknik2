import React from "react"
import CoursePage from "../../layout/CoursePage"

export default ({ location }) => {
  return (
    <CoursePage url={location.pathname} course="daona">
      <p>
        Den här kursen ingår i ämnet Dator- och nätverksteknik och är en del av
        inriktningen Information- och Medieteknik i Teknikprogrammet.
      </p>
    </CoursePage>
  )
}
