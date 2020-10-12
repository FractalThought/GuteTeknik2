import React from "react"
import { Link } from "gatsby"

function Header({ mainPage }) {
  const topPages = [
    {
      name: "Webbutveckling 1",
      link: "webb1",
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
      name: "Programmering 1",
      link: "prog1",
    },
    {
      name: "Programmering 2",
      link: "prog2",
    },
    {
      name: "Dator- och nätverksteknik",
      link: "daona",
    },
  ]

  // map through, check which is active

  return (
    <header>
      <a id="toppen"></a>
      <nav>
        <h1>
          <Link to="/">GuteTeknik</Link>
        </h1>
        <ul>
          <li>
            <Link to="/webb1">Webbutveckling 1</Link>
          </li>
          <li>
            <Link to="/webb2">Webbutveckling 2</Link>
          </li>
          <li>
            <Link to="/prog1">Programmering 1</Link>
          </li>
          <li>
            <Link to="/prog2">Programmering 2</Link>
          </li>
          <li>
            <Link to="/daona">Dator- och nätverksteknik</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
