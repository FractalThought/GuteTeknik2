import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/Container"

function about({ data }) {
  return (
    <Container>
      <div style={{ color: `teal` }}>
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/">Home</Link>
        <p>Such wow. Very React.</p>
      </div>
    </Container>
  )
}

export default about

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
