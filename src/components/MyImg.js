import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MyImg = function({ src }) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              originalName
              presentationWidth
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const selectedImage = data.allImageSharp.edges.find(edge => {
    return edge.node.fluid.originalName === src
  })

  const style = {
    maxWidth: selectedImage.node.fluid.presentationWidth,
    margin: "0 auto",
  }

  if (selectedImage) {
    return (
      <Img fluid={selectedImage.node.fluid} style={style} loading="eager" />
    )
  }
  return <React.Fragment></React.Fragment>
}
export default MyImg
