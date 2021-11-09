import React from "react";
import { Link } from "gatsby";

function Header({ mainPage, sidebarUtility }) {
  const topPages = [
    {
      name: "Programmering 1",
      link: "prog1",
    },
    {
      name: "Programmering 2",
      link: "prog2",
    },
    {
      name: "Webbutveckling 1",
      link: "webb1",
    },
    {
      name: "Webbutveckling 2",
      link: "webb2",
    },
    {
      name: "Dator- och nätverksteknik",
      link: "daona",
    },
  ];

  // map through, check which is active

  function createHeaderLink(currentLink, link, key) {
    if (currentLink === link.link) {
      return (
        <Link key={key} className="active" to={"/" + link.link}>
          {link.name}
        </Link>
      );
    }

    return (
      <Link key={key} to={"/" + link.link}>
        {link.name}
      </Link>
    );
  }

  // return (
  //   <header id="toppen">
  //     <nav>
  //       <h1>
  //         <Link to="/">GuteTeknik</Link>
  //       </h1>
  //       <ul>
  //         {topPages.map((page, key) => {
  //           return createHeaderLink(mainPage, page, key)
  //         })}
  //       </ul>
  //     </nav>
  //   </header>
  // )

  function ToggleSidebar() {
    sidebarUtility.setSideBarVisibility(!sidebarUtility.showSidebar);
  }

  return (
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
      <div id="searchbar">
        <input type="text" placeholder="Sök" />
      </div>
      <nav className="course-nav">
        {topPages.map((page, key) => {
          return createHeaderLink(mainPage, page, key);
        })}
      </nav>

      <button className="show-menu-button" onClick={ToggleSidebar}>
        {sidebarUtility.showSidebar ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.529 2.74542C18.157 2.11737 18.157 1.09909 17.529 0.47104C16.9009 -0.157013 15.8827 -0.157013 15.2546 0.47104L8.99999 6.72566L2.74542 0.471087C2.11737 -0.156967 1.09909 -0.156966 0.47104 0.471087C-0.157013 1.09914 -0.157013 2.11742 0.47104 2.74547L6.72561 9.00004L0.471119 15.2545C-0.156934 15.8826 -0.156934 16.9009 0.471119 17.5289C1.09917 18.157 2.11745 18.157 2.7455 17.5289L8.99999 11.2744L15.2545 17.529C15.8826 18.157 16.9009 18.157 17.5289 17.529C18.157 16.9009 18.157 15.8826 17.5289 15.2546L11.2744 9.00004L17.529 2.74542Z"
              fill="#F9F7FC"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.6C0 0.716345 0.716344 0 1.6 0H22.4C23.2837 0 24 0.716345 24 1.6C24 2.48366 23.2837 3.2 22.4 3.2H1.6C0.716345 3.2 0 2.48366 0 1.6Z"
              fill="#F9F7FC"
            />
            <path
              d="M0 9.6C0 8.71634 0.716344 8 1.6 8H22.4C23.2837 8 24 8.71634 24 9.6C24 10.4837 23.2837 11.2 22.4 11.2H1.6C0.716345 11.2 0 10.4837 0 9.6Z"
              fill="#F9F7FC"
            />
            <path
              d="M1.6 16C0.716344 16 0 16.7163 0 17.6C0 18.4837 0.716345 19.2 1.6 19.2H22.4C23.2837 19.2 24 18.4837 24 17.6C24 16.7163 23.2837 16 22.4 16H1.6Z"
              fill="#F9F7FC"
            />
          </svg>
        )}

        <span>Meny</span>
      </button>
    </header>
  );
}

export default Header;
