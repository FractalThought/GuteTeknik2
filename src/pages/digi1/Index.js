import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../../layout/Header"
import Sidebar from "../../layout/Sidebar"

const ClearDiv = styled.div`
  clear: both;
`

function Index({ pageContext }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
        edges {
          node {
            body
            fields {
              slug
              id
            }
            frontmatter {
              title
              headings
            }
          }
        }
      }
      allPageinfoJson {
        edges {
          node {
            name
            link
            chapters {
              title
              link
              pages {
                title
                link
                type
              }
            }
            references {
              title
              link
            }
          }
        }
      }
    }
  `)

  console.log(pageContext)

  const pages = data.allMdx.edges

  // Just remove the .node-intermediate step
  const pageInfo = data.allPageinfoJson.edges.map(page => {
    return page.node
  })

  // Use string split for url
  // let urlData = null

  // if (typeof url !== "undefined") {
  //   const urlArray = url.split("/")
  //   urlData = urlArray.filter(data => data !== "")
  // }

  const course = "daona"

  const chapterData = {
    title: "Kapitel 1",
    baseLink: "chapter1",
    elements: [
      {
        name: "Moment 1",
        link: "moment",
        type: "lesson",
        typeName: "Lektion",
      },
      {
        name: "Moment 2",
        link: "exercise",
        type: "exercise",
        typeName: "Övning",
      },
    ],
    references: [
      {
        name: "Referens 1",
        link: "reference1",
      },
      {
        name: "Referens 2",
        link: "reference2",
      },
    ],
  }
  
  function Index() {
    return (
      <>
        <Header mainPage={course} />
        <div id="main-wrapper">
          <aside className="left"></aside>
          <main>
            <h1 className="page-heading">Dator- och nätverksteknik</h1>
            <div className="page">
              <h1 className="printheader">Dator- och nätverksteknik</h1>
              <ul>
                <li>
                  <a href="">Introduktion</a>
                </li>
                <li>
                  <a href="">Variabler</a>
                </li>
                <li>
                  <a href="">Kontrollsatser</a>
                </li>
              </ul>
              <script async src="https://static.codepen.io/assets/embed/ei.js" />
              <ClearDiv></ClearDiv>
            </div>
            <ChapterMenu course={course} data={chapterData} />
            <ChapterMenu data={chapterData} />
          </main>
          <aside className="right"></aside>
        </div>
      </>
    )
  }
}

export default Index
