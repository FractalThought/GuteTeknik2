import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

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

function SlideTemplate({ data: { mdx: slide }, scope, slideContext }) {
  if (!slide) {
    return <p>No slide Found? This should be a 404</p>
  }

  return (
    <>
      <h1 className="slide-heading">{slide.frontmatter.title}</h1>
      <MDXRenderer scope={{ ...scope }}>{slide.body}</MDXRenderer>
    </>
  )
}

export default SlideTemplate
