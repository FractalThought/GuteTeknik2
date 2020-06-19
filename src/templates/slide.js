import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      {/* <MDXProvider components={shortcodes}> */}
      <MDXRenderer>{mdx.body}</MDXRenderer>
      {/* </MDXProvider> */}
    </div>
  )
}

export const pageQuery = graphql`
  query SlideQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

// import React from "react"
// import { graphql, Link } from "gatsby"
// import { MDXProvider } from "@mdx-js/react"
// import { MDXRenderer } from "gatsby-plugin-mdx"

// const shortcodes = { Link } // Provide common components here

// export default function SlideTemplate({ data: { mdx } }) {
//   // if (!slide) {
//   //   return <p>No slide Found? This should be a 404</p>
//   // }

//   return (
//     <div>
//       <h3>COMPONENT</h3>
//       <MDXProvider components={shortcodes}>
//         <h1 className="slide-heading">{mdx.frontmatter.title}</h1>
//         <MDXRenderer>{mdx.body}</MDXRenderer>
//       </MDXProvider>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query SlideQuery($id: String!) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `
