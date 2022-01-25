import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const ClearDiv = styled.div`
  clear: both;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 70ch;
`;

const MissingPage = () => {
  return (
    <div id="main-grid">
      <header>
        <div id="logo">
          <Link id="toppen" to="/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9035 0H1.68367C0.753802 0 0 0.753803 0 1.68367V4.12697C0 5.05684 0.753803 5.81064 1.68367 5.81064H7.50915V10.117L16.9035 0Z"
                fill="currentColor"
              />
              <path
                d="M7.50915 17.6717V28.3163C7.50915 29.2462 8.26295 30 9.19281 30H12.0064C12.9363 30 13.6901 29.2462 13.6901 28.3163V24.5791L7.50915 17.6717Z"
                fill="currentColor"
              />
              <path
                d="M21.4513 0.540009L12.0428 10.7051L10.1136 12.8321C9.47653 13.5346 9.54499 14.6243 10.265 15.2415L23.0949 29.5559C23.4056 29.8414 23.8122 29.9999 24.2341 29.9999H28.313C29.8589 29.9999 30.5876 28.091 29.4349 27.0609L17.0475 13.351L27.364 2.86442C28.4113 1.79986 27.6571 0 26.1638 0H22.6869C22.2178 0 21.7699 0.195725 21.4513 0.540009Z"
                fill="currentColor"
              />
            </svg>
            <h2>Tektal</h2>
          </Link>
        </div>
      </header>
      <main>
        <ContentContainer>
          <h1 className="page-heading">404: Sidan saknas</h1>
          <p>
            Oj, här blev det fel. Denna sidan du försöker komma åt verkar inte
            finnas. Kolla så du har skrivit rätt adress i webbläsaren. Annars
            kan det vara att du följt en gammal, utdaterad länk.
          </p>

          <p>
            Gå tillbaka till <Link to="/">startsidan.</Link>
          </p>
          <ClearDiv></ClearDiv>
        </ContentContainer>
      </main>
      <aside className="page-index"></aside>
    </div>
  );
};
export default MissingPage;
