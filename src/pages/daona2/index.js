import React from "react"
import styled from "styled-components"
import Header from "../../layout/Header"
import ChapterMenu from "../../components/ChapterMenu"

const ClearDiv = styled.div`
  clear: both;
`

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

export default Index
