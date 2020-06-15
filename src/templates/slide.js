import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const shortcodes = { Link } // Provide common components here

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
      frontmatter {
        title
      }
      body
    }
  }
`

function SlideTemplate({ data: { mdx: slide } }) {
  if (!slide) {
    return <p>No slide Found? This should be a 404</p>
  }

  return (
    <MDXProvider components={shortcodes}>
      <h1 className="slide-heading">{slide.frontmatter.title}</h1>
      <MDXRenderer>{slide.body}</MDXRenderer>
    </MDXProvider>
  )
}

export default SlideTemplate
