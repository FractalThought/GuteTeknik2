import React from "react"
import { graphql, Link } from "gatsby"
import Container from "../components/Container"

export default ({ data }) => {
  console.log(data)

  return (
    <div>
      <h1>Välkommen till GuteTeknik!</h1>
    </div>
  )

  // return (
  //   <div>
  //     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
  //     {data.allMarkdownRemark.edges.map(({ node }) => (
  //       <div key={node.id}>
  //         <h3>
  //           <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
  //         </h3>
  //         <p>{node.excerpt}</p>
  //       </div>
  //     ))}
  //   </div>
  // )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
