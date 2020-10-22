import React from "react"
import CoursePage from "../../layout/CoursePage"

export default ({ location }) => {
  return (
    <CoursePage url={location.pathname} course="prog1">
      <p>
        Den här kursen ingår i ämnet Programmering och är en del av inriktningen
        Information- och Medieteknik i Teknikprogrammet. I kursen går vi igenom
        grunderna i programmering med språket JavaScript, tittar på
        arbetsmetodiker och värderingar inom programmering, och skapar program
        som är användarvänliga och funktionella.
      </p>
    </CoursePage>
  )
}
