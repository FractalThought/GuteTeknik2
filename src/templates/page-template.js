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
          name
          link
          chapters {
            title
            link
            pages {
              title
              link
              type
            }
            references {
              title
              link
            }
          }
        }
      }
    }
  }
`

export default function PageTemplate({ pageContext, data, location }) {
  const page = data.mdx
  const allInfo = data.allMdx.edges
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const crumbData = {
    crumbs: crumbs,
    crumbSeparator: " > ",
    crumbLabel: page.frontmatter.title,
  }

  // Just remove the .node-intermediate step
  const pageInfo = data.allPageinfoJson.edges.map(page => {
    return page.node
  })

  let listOfContent = undefined
  if (
    page.frontmatter.headings !== undefined &&
    page.frontmatter.headings !== null
  ) {
    listOfContent = page.frontmatter.headings.split("|")
  }

  return (
    <Container
      url={page.fields.slug}
      pages={allInfo}
      pageInfo={pageInfo}
      crumbData={crumbData}
      listOfContent={listOfContent}
      pageTitle={page.frontmatter.title}
    >
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{page.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}
