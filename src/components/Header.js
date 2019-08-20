import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

function Header({ headerText }) {
  const data = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
  );

  return (
    <React.Fragment>
      <h1>This is a header in {headerText}</h1>
      <h2>{data.site.siteMetadata.title} </h2>
    </React.Fragment>
  )
}

export default Header
