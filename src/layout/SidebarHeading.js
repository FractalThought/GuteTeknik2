import React from "react"
import { Link } from "gatsby"

// function SidebarHeading({ heading }) {
//   return (
//     <section>
//       <h1>{heading.title}</h1>
//       <ul>
//         {heading.pages.map((subpage, index) => (
//           <li key={index}>
//             <Link
//               title={subpage.excerpt}
//               to={subpage.fields.slug}
//               className={subpage.isActive ? "active" : "inactive"}
//             >
//               {subpage.frontmatter.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }

function SidebarHeading({ title, subpages, mainPage, currentPage }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {subpages.map((subpage, index) => (
          <li key={index}>
            <Link
              to={"/" + mainPage + "/" + subpage.subPageLink}
              className={
                currentPage === subpage.subPageLink ? "active" : "inactive"
              }
            >
              {subpage.subPageName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SidebarHeading
