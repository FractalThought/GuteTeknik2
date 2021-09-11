import React from "react"
import ReferencePage from "../../layout/ReferencePage"

export default ({ location }) => {
  return (
    <ReferencePage url={location.pathname} course="prog1">
      <p>
        Här hittar du samtliga referenser i kursen Programmering 1. Referenserna
        använder du vid behov, och fungerar lite som en databank. De innehåller
        oftast saker som inte passar in i ett specifikt kapitel.
      </p>
    </ReferencePage>
  )
}
