import React from "react"
import { useEffect } from "react"
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
    courseName: "Dator- och nätverksteknik",
    courseLink: "daona",
    info:
      "Vi går igenom hur den dator och nätverk fungerar, både i teorin, och i praktiken.",
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
        <MyImg src="techthings.png" alt="blob of tech symbols" width="250" />
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
}

// TODO: Change to using json (pageinfo)
