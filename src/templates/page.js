import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../components/Container"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      fields {
        slug
      }
      frontmatter {
        title
      }
      body
    }
    allMdx(filter: { fields: { collection: { eq: "page" } } }) {
      edges {
        node {
          body
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

function PageTemplate({
  data: { mdx: page, allMdx: allInfo },
  scope,
  pageContext,
}) {
  console.log(allInfo)
  // const allInfo = allMdx.edges
  const {
    breadcrumb: { crumbs },
  } = pageContext
  if (!page) {
    console.log("no page found")
    return <p>No page Found? This should be a 404</p>
  }

  return (
    <Container url={page.fields.slug} pages={allInfo}>
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" > "
        crumbLabel={page.frontmatter.title}
      />
      <h1 className="page-heading">{page.frontmatter.title}</h1>
      <MDXRenderer scope={scope}>{page.body}</MDXRenderer>
    </Container>
  )
}

export default PageTemplate
