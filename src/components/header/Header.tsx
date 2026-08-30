import { useContext } from "react";

import classes from "./Header.module.css";
import { Context } from "../../context/context";

/**
 * Header Component
 *
 * Renders the main navigation used to switch portfolio sections through app context.
 *
 * Current behavior:
 * - Uses `Context` flags (`home`, `about`, `education`, `work`, `contact`) to highlight
 *   the active navigation button.
 * - Calls `changeContent(section)` when a button is clicked.
 * - Hides the `Pedro Costa` brand on the Home page and shows it with a fade-in animation
 *   on all other sections.
 * - Applies different header alignment on Home vs. non-Home views.
 */
const Header = () => {
  const ContentCtx = useContext(Context);

  const changeTab = (text: string) => {
    ContentCtx.changeContent(text);
  };

  return (
    <header className={classes.mainHeader}>
      <button
        className={classes.brandButton}
        type="button"
        onClick={() => changeTab("Home")}
        aria-label="Go to home"
      >
        <span className={classes.brandTitle}>Pedro Costa</span>
        <span className={classes.brandRole}>Software Engineer</span>
      </button>
      <nav aria-label="Primary navigation">
        <ul className={classes.headerNavUl}>
          <li className={classes.headerNavLi}>
            <button
              className={`${classes.headerNavButton} ${
                ContentCtx.home ? classes.buttonActive : ""
              }`}
              type="button"
              aria-current={ContentCtx.home ? "page" : undefined}
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
              type="button"
              aria-current={ContentCtx.about ? "page" : undefined}
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
              type="button"
              aria-current={ContentCtx.education ? "page" : undefined}
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
              type="button"
              aria-current={ContentCtx.work ? "page" : undefined}
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
              type="button"
              aria-current={ContentCtx.contact ? "page" : undefined}
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
