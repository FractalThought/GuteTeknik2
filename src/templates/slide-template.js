import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../components/Container"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const shortcodes = { Link } // Provide common components here

export const pageQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      body
      fields {
        id
        slug
      }
      frontmatter {
        title
      }
    }
    allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
      edges {
        node {
          body
          fields {
            slug
            id
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default function PageTemplate({ pageContext, data }) {
  const page = data.mdx
  const allInfo = data.allMdx.edges
  console.log(data)
  console.log(pageContext)
  // const allInfo = allMdx.edges
  const {
    breadcrumb: { crumbs },
  } = pageContext
  // if (!page) {
  //   console.log("no page found")
  //   return <p>No page Found? This should be a 404</p>
  // }

  return (
    <>
      {/* <h3>SLIDE COMPONENT</h3> */}
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
