import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const shortcodes = { Link } // Provide common components here

export default function SlideTemplate({ data: { mdx: slide } }) {
  // if (!slide) {
  //   return <p>No slide Found? This should be a 404</p>
  // }

  return (
    <div>
      <h3>COMPONENT</h3>
      <MDXProvider components={shortcodes}>
        <h1 className="slide-heading">{slide.frontmatter.title}</h1>
        <MDXRenderer>{slide.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export const pageQuery = graphql`
  query SlideQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`
