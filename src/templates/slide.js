import React from "react"
import { graphql } from "gatsby"

export default ({ pageContext, data, location }) => {
  // const {
  //   breadcrumb: { crumbs },
  // } = pageContext

  // const page = data.markdownRemark

  /*
  
  TODO:
  Filter all pages on
  slugs where first part of current slug = first part of that slug
  This retrieves everything inside 

  Will need to add more fields and then filter it even more to divide it up into
  headers. If no header: unlisted page

  This does make it more dynamic, no need to use or update the json-files.

  */

  // allInfo.edges.map(({ node }) => (
  // node.id
  // node.excerpt
  // node.fields.slug
  // node.frontmatter.title
  // ));

  //const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

  return <React.Fragment>Hello</React.Fragment>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
