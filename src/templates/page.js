import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../components/Container"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const shortcodes = { Link } // Provide common components here

export const pageQuery = graphql`
  query pageQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
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

export default function PageTemplate({ data: { mdx: page, allMdx: allInfo } }) {
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
    <>
      <h3>COMPONENT</h3>
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
    </>
  )
}
