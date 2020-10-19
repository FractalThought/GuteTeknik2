import React from "react"
import { Link } from "gatsby"

function SidebarHeading({ title, pages, mainPage, currentPage }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              to={"/" + mainPage + "/" + page.link}
              className={currentPage === page.link ? "active" : "inactive"}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SidebarHeading
