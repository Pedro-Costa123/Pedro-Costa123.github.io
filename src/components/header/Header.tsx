import { useContext, useState } from "react";

import classes from "./Header.module.css";
import { Context } from "../../context/context";

/**
 * Header Component
 *
 * This component renders a navigation bar with links to different sections of the website.
 * It uses CSS modules for styling, and the Context API for managing state.
 *
 * The component maintains a state variable 'currentPage' to keep track of the currently selected page.
 * When a navigation button is clicked, the 'changeTab' function is called, which updates the 'currentPage' state and calls the 'changeContent' function from the context to update the current content.
 *
 * The navigation bar includes links to Home, About, Education, Work/Projects, and Contact sections.
 * The 'changeTab' function is attached to the 'onClick' event of each button.
 * The button for the current page is highlighted by adding the 'buttonActive' class.
 *
 * The component also conditionally renders a heading with the text 'Pedro Costa' when the current page is not 'Home'.
 *
 */
const Header = () => {
  const ContentCtx = useContext(Context);
  const [currentPage, setCurrentPage] = useState("Home");

  const changeTab = (text: string) => {
    ContentCtx.changeContent(text);
    setCurrentPage(text);
  };

  return (
    <header
      className={`${classes.mainHeader} ${
        currentPage === "Home" ? classes.notHomePage : ""
      }`}
    >
      {currentPage !== "Home" && (
        <h2 className={classes.fadeInElement}>Pedro Costa</h2>
      )}
      <nav>
        <ul className={classes.headerNavUl}>
          <li className={classes.headerNavLi}>
            <button
              className={`${classes.headerNavButton} ${
                ContentCtx.home ? classes.buttonActive : ""
              }`}
              onClick={() => {
                changeTab("Home");
              }}
            >
              Home
            </button>
          </li>
          <li className={classes.headerNavLi}>
            <button
              className={`${classes.headerNavButton} ${
                ContentCtx.about ? classes.buttonActive : ""
              }`}
              onClick={() => {
                changeTab("About");
              }}
            >
              About
            </button>
          </li>
          <li className={classes.headerNavLi}>
            <button
              className={`${classes.headerNavButton} ${
                ContentCtx.education ? classes.buttonActive : ""
              }`}
              onClick={() => {
                changeTab("Education");
              }}
            >
              Education
            </button>
          </li>
          <li className={classes.headerNavLi}>
            <button
              className={`${classes.headerNavButton} ${
                ContentCtx.work ? classes.buttonActive : ""
              }`}
              onClick={() => {
                changeTab("Work");
              }}
            >
              Work/Projects
            </button>
          </li>
          <li className={classes.headerNavLi}>
            <button
              className={`${classes.headerNavButton} ${
                ContentCtx.contact ? classes.buttonActive : ""
              }`}
              onClick={() => {
                changeTab("Contact");
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
