import React from "react"
import { Link } from "gatsby"
import MyImg from "./MyImg"

{
  /* <img
        className="course-item__icon"
        fluid={data.file.childImageSharp.fluid}
        alt={courseLink}
      /> */
}

function CourseItem({ courseName, courseLink, info }) {
  const actualLink = `/${courseLink}`
  const veckoplanering = `/${courseLink}/planering`
  const imgSource = `${courseLink}.png`
  return (
    <div className="course-item">
      <div style={{ width: "100%" }}>
        <MyImg src={imgSource} />
      </div>
      <div className="course-item__info">
        <Link title={courseName} to={actualLink}>
          <h1>{courseName}</h1>
        </Link>
        <p>{info}</p>
        <Link
          title={`Veckoplanering för ${courseName}`}
          to={veckoplanering}
          className="course-item__info__link"
        >
          Veckoplanering
        </Link>
      </div>
    </div>
  )
}

export default CourseItem
