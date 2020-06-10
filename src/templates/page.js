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
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        image {
          ...ImageFields
        }
        category
      }
      body
    }
  }
`

function PageTemplate({ data: { mdx: page }, scope, pageContext }) {
  if (!page) {
    return <p>No page Found? This should be a 404</p>
  }

  return (
    <Container url={page.fields.slug} pages={allInfo.edges}>
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" > "
        crumbLabel={page.frontmatter.title}
      />
      <h1 className="page-heading">{page.frontmatter.title}</h1>
      <MDXRenderer scope={{ ...scope }}>{page.body}</MDXRenderer>
    </Container>
  )
}

export default PageTemplate

// export default ({ pageContext, data, location }) => {
//   const {
//     breadcrumb: { crumbs },
//   } = pageContext

//   const page = data.markdownRemark

//   const allInfo = data.allMarkdownRemark

//   /*

//   TODO:
//   Filter all pages on
//   slugs where first part of current slug = first part of that slug
//   This retrieves everything inside

//   Will need to add more fields and then filter it even more to divide it up into
//   headers. If no header: unlisted page

//   This does make it more dynamic, no need to use or update the json-files.

//   */

//   // allInfo.edges.map(({ node }) => (
//   // node.id
//   // node.excerpt
//   // node.fields.slug
//   // node.frontmatter.title
//   // ));

//   //const customCrumbLabel = location.pathname.toLowerCase().replace("-", " ")

//   return (
//     <Container url={page.fields.slug} pages={allInfo.edges}>
//       <Breadcrumb
//         crumbs={crumbs}
//         crumbSeparator=" > "
//         crumbLabel={page.frontmatter.title}
//       />
//       <h1 className="page-heading">{page.frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: page.html }} />
//     </Container>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//       fields {
//         slug
//       }
//     }
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             heading
//           }
//           excerpt
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `
