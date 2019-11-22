import React from "react"
import { Link } from "gatsby"

function CourseCard({ courseName, courseLink }) {
  const veckoplanering = `${courseLink}/planering`
  return (
    <div className="course-card" data-course={courseLink}>
      <div className="card-info">
        <Link title={courseName} to={courseLink}>
          <h1>{courseName}</h1>
        </Link>
        <Link title={courseName} to={veckoplanering} className="card-planning">
          Veckoplanering
        </Link>
      </div>
      {/* <div className="card-icon" data-course={courseLink}></div> */}
      <img
        className="card-icon"
        src={`images/${courseLink}.svg`}
        alt={courseLink}
      />
    </div>
  )
}

export default CourseCard
