import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function MyImage({ src }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const selectedImage = data.images.edges.find(image => {
    return image.node.relativePath === src
  })

  if (selectedImage) {
    return <Img fluid={selectedImage.node.childImageSharp.fluid} />
  }
  return <React.Fragment></React.Fragment>
}

export default MyImage
