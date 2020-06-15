import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const shortcodes = { Link } // Provide common components here
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
    allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
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
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{page.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default PageTemplate
