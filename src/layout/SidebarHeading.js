import React from "react"
import { Link } from "gatsby"

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
