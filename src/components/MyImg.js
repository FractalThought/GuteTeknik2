import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MyImg = function({ src, width, alt }) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              originalName
              presentationWidth
              ...GatsbyImageSharpFluid_tracedSVG
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

  const containerStyle = {
    width: width ? `${width}px` : selectedImage.node.fluid.presentationWidth,
  }

  if (selectedImage) {
    return (
      <div style={containerStyle}>
        <Img
          fluid={selectedImage.node.fluid}
          style={style}
          loading="eager"
          alt={alt}
        />
      </div>
    )
  }
  return <React.Fragment></React.Fragment>
}
export default MyImg
