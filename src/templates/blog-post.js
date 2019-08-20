import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"

export default ({ data }) => {
  const page = data.markdownRemark;

  return (
    <Container url={page.fields.slug}>
      <div>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </Container>
  )
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