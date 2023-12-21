import { useContext, useState } from "react";

import classes from "./Header.module.css";
import { Context } from "../../context/context";

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
