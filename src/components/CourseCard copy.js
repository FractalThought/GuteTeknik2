import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

function CourseCard({ courseName, courseLink }) {
  const veckoplanering = `${courseLink}/planering`
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "images/prog1_bg.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <div class="card-info">
            <BackgroundImage
              Tag="section"
              className="course-card"
              fluid={imageData}
              backgroundColor={`#040e18`}
            >
              <Link title={courseName} to={courseLink}>
                <h1>{courseName}</h1>
              </Link>
              <Link
                title={courseName}
                to={veckoplanering}
                className="card-planning"
              >
                Veckplanering
              </Link>
            </BackgroundImage>
            <div className="card-icon" data-course={courseLink}></div>
          </div>
        )
      }}
    />
  )
}

const StyledCourseCard = styled(CourseCard)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledCourseCard
