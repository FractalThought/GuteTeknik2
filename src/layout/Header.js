import React from "react"
import { Link } from "gatsby"

function Header({ mainPage }) {
  const topPages = [
    {
      name: "Programmering 1",
      link: "prog1",
    },
    {
      name: "Programmering 2",
      link: "prog2",
    },
    {
      name: "Webbutveckling 1",
      link: "webb1",
    },
    {
      name: "Webbutveckling 2",
      link: "webb2",
    },
    {
      name: "Dator- och nätverksteknik",
      link: "daona",
    },
  ]

  // map through, check which is active

  function createHeaderLink(currentLink, link, key) {
    if (currentLink === link.link) {
      return (
        <li key={key}>
          <a className="active" href={"/" + link.link}>
            {link.name}
          </a>
        </li>
      )
    }

    return (
      <li key={key}>
        <a href={"/" + link.link}>{link.name}</a>
      </li>
    )
  }

  return (
    <header id="toppen">
      <nav>
        <h1>
          <Link to="/">GuteTeknik</Link>
        </h1>
        <ul>
          {topPages.map((page, key) => {
            return createHeaderLink(mainPage, page, key)
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
