import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MyImg = function({ src }) {
  const data = useStaticQuery(graphql`

  fragment MyImageSharp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
    originalName
  }

    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 250, maxHeight: 250) {
              ...MyImageSharp
            }
          }
        }
      }
    }
  `)

  const selectedImage = data.allImageSharp.edges.find(edge => {
    return edge.node.fluid.originalName === src
  })

  if (selectedImage) {
    return <Img fluid={selectedImage.node.fluid} />
  }
  return <React.Fragment></React.Fragment>
}
export default MyImg
