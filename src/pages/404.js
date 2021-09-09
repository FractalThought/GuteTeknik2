import React, { useState } from "react"
import styled from "styled-components"
import Header from "../layout/Header"

const ClearDiv = styled.div`
  clear: both;
`

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 70ch;
`

const MissingPage = () => {
  const [showSidebar, setSideBarVisibility] = useState(false)

  return (
    <div id="main-grid">
      <Header
        sidebarUtility={{ showSidebar, setSideBarVisibility }}
        mainPage="404"
      />
      <main>
        <ContentContainer>
          <h1 className="page-heading">404: Sidan saknas</h1>
          <p>
            Oj, här blev det fel. Denna sidan du försöker komma åt verkar inte
            finnas. Kolla så du har skrivit rätt adress i webbläsaren. Annars
            kan det vara att du följt en gammal, utdaterad länk.
          </p>
          <ClearDiv></ClearDiv>
        </ContentContainer>
      </main>
      <aside className="page-index"></aside>
    </div>
  )
}
export default MissingPage
