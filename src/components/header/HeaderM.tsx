import { useContext, useState } from "react";

import classes from "./HeaderM.module.css";
import { Context } from "../../context/context";

/**
 * Header Mobile Component
 *
 * This component renders a navigation bar with links to different sections of the website.
 * It uses the React-Bootstrap library to create a responsive navigation bar.
 * The navigation bar includes links to Home, About, Education, Work, and Contact sections.
 *
 * It also observes changes to the 'data-theme' attribute on the body element of the document.
 * If the 'data-theme' attribute is set to 'dark', it sets the 'data-bs-theme' attribute on the navigation bar to 'dark'.
 * If the 'data-theme' attribute is not 'dark', it removes the 'data-bs-theme' attribute from the navigation bar.
 *
 * The component uses the Context API to manage state. When a navigation link is clicked, it calls the 'changeContent' function from the context to update the current content.
 *
 */
const Header = () => {
  const ContentCtx = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeTab = (text: string) => {
    ContentCtx.changeContent(text);
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  };

  const navItems = [
    { label: "Home", key: "home", value: "Home" },
    { label: "About", key: "about", value: "About" },
    { label: "Education", key: "education", value: "Education" },
    { label: "Work", key: "work", value: "Work" },
    { label: "Contact", key: "contact", value: "Contact" },
  ] as const;

  return (
    <header className={classes.mainHeader}>
      <div className={classes.headerNavUl}>
        <button
          className={classes.brandButton}
          type="button"
          onClick={() => changeTab("Home")}
          aria-label="Go to home"
        >
          <span className={classes.brandTitle}>Pedro Costa</span>
        </button>
        <button
          className={classes.toggleButton}
          type="button"
          aria-controls="mobile-primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className={classes.menuIcon} aria-hidden="true"></span>
        </button>
        <nav
          id="mobile-primary-navigation"
          className={classes.collapsePanel}
          aria-label="Primary navigation"
          hidden={!menuOpen}
        >
          <ul className={classes.navLinks}>
            {navItems.map((item) => {
              const isActive = ContentCtx[item.key];

              return (
                <li key={item.value}>
                  <button
                    type="button"
                    onClick={() => changeTab(item.value)}
                    aria-current={isActive ? "page" : undefined}
                    className={`${classes.headerNavLi} ${
                      isActive ? classes.activeLink : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
