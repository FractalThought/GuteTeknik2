import React from "react"
import { Link } from "gatsby"

function SidebarHeading({ chapter, mainPage, currentPage }) {
  const pages = chapter.pages;
  const title = chapter.title;
  const link = chapter.link;
  return (
    <section>
      <Link to={"/" + mainPage + "/" + link}><h2>{title}</h2></Link>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              to={"/" + mainPage + "/" + link + "/" + page.link}
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
