import React from "react"
import styled from "styled-components"
import { useState } from "react"

const Hidden = styled.section`
  background: lightgray;
`

const ShowButton = styled.button`
  background: green;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: white;
`

function PracticeContainer({ children }) {
  const show = () => {
    console.log("showing")
    setHidden(!isHidden)
  }

  const [isHidden, setHidden] = useState(true)

  return (
    <div>
      <ShowButton onClick={() => show()}>Visa lösning</ShowButton>
      {!isHidden && (
        <Hidden>
          <p>PracticeContainer Works! {children}</p>
        </Hidden>
      )}
    </div>
  )
}

export default PracticeContainer
