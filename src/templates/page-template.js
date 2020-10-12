import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../components/Container"

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
        headings
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
            headings
          }
        }
      }
    }
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
`

export default function PageTemplate({ pageContext, data }) {
  const page = data.mdx
  const allInfo = data.allMdx.edges
  const {
    breadcrumb: { crumbs },
  } = pageContext
  // if (!page) {
  //   console.log("no page found")
  //   return <p>No page Found? This should be a 404</p>
  // }

  const crumbData = {
    crumbs: crumbs,
    crumbSeparator: " > ",
    crumbLabel: page.frontmatter.title,
  }

  const pageinfo = data.allPageinfoJson.edges

  let listOfContent = undefined
  if (
    page.frontmatter.headings !== undefined &&
    page.frontmatter.headings !== null
  ) {
    listOfContent = page.frontmatter.headings.split("|")
  }

  return (
    <>
      <Container
        url={page.fields.slug}
        pages={allInfo}
        pageinfo={pageinfo}
        crumbData={crumbData}
        listOfContent={listOfContent}
      >
        <h1 className="page-heading">{page.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </>
  )
}
