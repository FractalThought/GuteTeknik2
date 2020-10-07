import React from "react"
import { Link } from "gatsby"

function Header() {
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
