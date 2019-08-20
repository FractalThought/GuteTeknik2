import React from 'react'
import { Link, graphql } from "gatsby"
import Header from '../components/Header';
import Container from '../components/Container';

function about({ data }) {
    return (
        <Container>
            <div style={{ color: `teal` }}>
                <Header headerText="About" />
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
  }`
