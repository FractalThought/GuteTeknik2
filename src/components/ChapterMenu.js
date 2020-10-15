import React from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import MyImage from "./MyImage"

const Section = Styled.section`
`

// Need a container for splitting elements and references

const data = {
  title: "",
  baseLink: "",
  elements: [
    {
      name: "",
      link: "",
      type: "lesson",
      typeName: "Lektion",
    },
  ],
  references: [
    {
      name: "",
      link: "",
    },
  ],
}

function ChapterMenu({ data }) {
  return (
    <Section>
      <h1>{data.title}</h1>
      <div>
        <h2>Moment</h2>
        <ul>
          {data.elements.map((element, key) => {
            return (
              <li key={key}>
                <Link to={"/" + data.baseLink + "/" + element.link}>
                  <img src={`images/${element.type}.svg`} alt={element.type} />
                  <span className="title">{element.name}</span>
                  <span className="type">{element.typeName}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>References</h2>
        <ul>
          {data.references.map((reference, key) => {
            return (
              <li key={key}>
                <Link to={"/" + data.baseLink + "/" + reference.link}>
                  <img src={`images/reference.svg`} alt="reference" />
                  <span className="title">{reference.name}</span>
                  <span className="type">Referens</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export default ChapterMenu
