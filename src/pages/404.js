import React from "react"
import styled from "styled-components"
import Header from "../layout/Header"

const ClearDiv = styled.div`
  clear: both;
`

export default () => {
  return (
    <>
      <Header mainPage="" />
      <div id="main-wrapper">
        <aside className="left"></aside>
        <main>
          <h1 className="page-heading">404 - Sidan hittades inte.</h1>
          <div className="page">
            <p>
              Oj, här blev det fel. Denna sidan du försöker komma åt verkar inte
              finnas. Kolla så du har skrivit rätt adress i webbläsaren. Annars
              kan det vara att du följt en gammal, utdaterad länk.
            </p>
            <ClearDiv></ClearDiv>
          </div>
        </main>
        <aside className="right"></aside>
      </div>
    </>
  )
}
