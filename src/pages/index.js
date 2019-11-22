import React from "react"
import { graphql } from "gatsby"
import CourseCard from "../components/CourseCard"

const courses = [
  {
    courseName: "Programmering 1",
    courseLink: "prog1",
  },
  {
    courseName: "Programmering 2",
    courseLink: "prog2",
  },
  {
    courseName: "Webbutveckling 1",
    courseLink: "webb1",
  },
  {
    courseName: "Webbutveckling 2",
    courseLink: "webb2",
  },
  {
    courseName: "Digitalt skapande 1",
    courseLink: "digi1",
  },
]

export default ({ data }) => {
  console.log(data)

  return (
    <div className="welcome">
      <h1>Välkommen till GuteTeknik!</h1>
      <section className="course-card-container">
        {courses.map(course => (
          <CourseCard
            courseName={course.courseName}
            courseLink={course.courseLink}
          />
        ))}
      </section>
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
