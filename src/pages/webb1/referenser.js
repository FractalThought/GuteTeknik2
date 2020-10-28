import React from "react"
import ReferencePage from "../../layout/ReferencePage"

export default ({ location }) => {
  return (
    <ReferencePage url={location.pathname} course="webb1">
      <p>I det här kapitlet introducerar vi JavaScript på webben.</p>
    </ReferencePage>
  )
}
