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
  const className = `course-card course-card--${courseLink}`
  return (
    <Link title={courseName} to={actualLink} className={className}>
      <h2 class="course-card__heading">{courseName}</h2>
      <p class="course-card__desc">{info}</p>
    </Link>
  )
}

// function CourseItem({ courseName, courseLink, info }) {
//   const actualLink = `/${courseLink}`
//   const veckoplanering = `/${courseLink}/planering`
//   const imgSource = `${courseLink}.png`
//   return (
//     <div className="course-item">
//       <MyImg src={imgSource} />
//       <div className="course-item__info">
//         <Link title={courseName} to={actualLink}>
//           <h1>{courseName}</h1>
//         </Link>
//         <p>{info}</p>
//         <Link
//           title={`Veckoplanering för ${courseName}`}
//           to={veckoplanering}
//           className="course-item__info__link"
//         >
//           Veckoplanering
//         </Link>
//       </div>
//     </div>
//   )
// }

export default CourseItem
