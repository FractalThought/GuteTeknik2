import React from "react"
import { Link } from "gatsby"

function SidebarHeading({ heading }) {
  return (
    <section>
      <h1>{heading.title}</h1>
      <ul>
        {heading.pages.map((subpage, index) => (
          <li key={index}>
            <Link
              title={subpage.excerpt}
              to={subpage.fields.slug}
              className={subpage.isActive ? "active" : "inactive"}
            >
              {subpage.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SidebarHeading
