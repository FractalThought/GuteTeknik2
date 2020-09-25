import React from "react"
import styled from "styled-components"

function TableOfContent({ listOfContent }) {
  const StickyDiv = styled.div`
    position: sticky;
    top: 1rem;
  `

  const List = styled.ul`
    margin: 0;
  `

  const ListItem = styled.li`
    list-style: none;
    margin: 0;
  `

  let renderedContent = [
    {
      name: "Gå till toppen",
      link: "toppen",
    },
  ]

  if (listOfContent !== undefined) {
    listOfContent.forEach(content => {
      const split = content.split(":")
      const heading = { name: split[0], link: split[1] }
      renderedContent.push(heading)
    })
  }

  return (
    <StickyDiv>
      <h1>Innehåll</h1>
      <List>
        {renderedContent.map((heading, key) => {
          return (
            <ListItem key={key}>
              <a href={"#" + heading.link}>{heading.name}</a>
            </ListItem>
          )
        })}
      </List>
    </StickyDiv>
  )
}

export default TableOfContent
