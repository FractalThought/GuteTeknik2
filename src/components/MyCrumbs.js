import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

function MyCrumbs({ crumbData }) {
  if (crumbData !== undefined) {
    return (
      <Breadcrumb
        crumbs={crumbData.crumbs}
        crumbSeparator={crumbData.crumbSeparator}
        crumbLabel={crumbData.crumbLabel}
      />
    )
  } else {
    return <></>
  }
}

export default MyCrumbs
