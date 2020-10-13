import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function Menu({ src }) {
  const data = useStaticQuery(graphql`
    query {
      allPageinfoJson {
        edges {
          node {
            pageName
            pageLink
            headings {
              title
              subpages {
                subPageName
                subPageLink
              }
            }
          }
        }
      }
    }
  `)

  // data.allPageinfoJson.edges

  return <React.Fragment></React.Fragment>
}

export default Menu
