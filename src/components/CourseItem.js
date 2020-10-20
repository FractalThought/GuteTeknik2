import React from "react"
import { Link } from "gatsby"
// import MyImg from "./MyImg"

function CourseItem({ courseName, courseLink, info }) {
  const actualLink = `/${courseLink}`
  const className = `course-card course-card--${courseLink}`
  return (
    <Link title={courseName} to={actualLink} className={className}>
      <h2 className="course-card__heading">{courseName}</h2>
      <p className="course-card__desc">{info}</p>
    </Link>
  )
}

export default CourseItem
