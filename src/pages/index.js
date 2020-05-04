import React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import CourseItem from "../components/CourseItem"
import MyImg from "../components/MyImg"

const courses = [
  {
    courseName: "Programmering 1",
    courseLink: "prog1",
    info:
      "Introduktion till programmering. Vi jobbar i JavaScript med NodeJS och i webbläsaren.",
    shortcuts: [{ name: "", link: "" }],
  },
  {
    courseName: "Programmering 2",
    courseLink: "prog2",
    info:
      "Fortsättning på programmering. Vi jobbar med Unity och språket C#, samt JavaScript med NodeJS.",
    shortcuts: [{ name: "", link: "" }],
  },
  {
    courseName: "Webbutveckling 1",
    courseLink: "webb1",
    info:
      "Introduktion till webbutveckling. Vi går igenom grunderna i HTML och CSS.",
    shortcuts: [{ name: "Introprojektet", link: "introprojektet" }],
  },
  {
    courseName: "Webbutveckling 2",
    courseLink: "webb2",
    info:
      "Fortsättning på webbutveckling. Vi skapar webbapplikationer och arbetar bland annat med animationer, SVG, och responsiv design.",
    shortcuts: [{ name: "", link: "" }],
  },
  {
    courseName: "Digitalt skapande 1",
    courseLink: "digi1",
    info:
      "Skapa en digital produkt från idé till färdig produkt. Vi jobbar med Unity och skapar spel under kursen.",
    shortcuts: [{ name: "", link: "" }],
  },
]

export default ({ data }) => {
  useEffect(() => {
    document.title = "GuteTeknik"
  })

  return (
    <React.Fragment>
      <section className="hero-section">
        <div className="hero__info">
          <h1>GuteTeknik</h1>
          <p>IT-kurserna på Gutegymnasiet</p>
        </div>
        <MyImg src="techthings.png" alt="blob of tech symbols" width="450" />
      </section>

      <section className="course-card-container">
        {courses.map((course, key) => (
          <CourseItem
            key={key}
            courseName={course.courseName}
            courseLink={course.courseLink}
            info={course.info}
          />
        ))}
      </section>
    </React.Fragment>
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

// Query not really used
// TODO: Change to using json (pageinfo)

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
