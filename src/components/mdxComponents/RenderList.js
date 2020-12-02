import React from "react"

function RenderList({ items}) {

  return (
    <ul>
      {items.map((item, key) => {
        return <li key={key}>{item}</li>
      })}
    </ul>
  )
}

export default RenderList
