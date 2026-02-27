import { useContext } from "react";

import classes from "./HeaderM.module.css";
import { Context } from "../../context/context";
import { Navbar, Nav } from "react-bootstrap";

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

  const changeTab = (text: string) => {
    ContentCtx.changeContent(text);
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
      <Navbar collapseOnSelect expand="sm" className={classes.headerNavUl}>
        <Navbar.Brand>
          <h1 className={classes.brandTitle}>Pedro Costa</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.toggleButton} />
        <Navbar.Collapse id="basic-navbar-nav" className={classes.collapsePanel}>
          <Nav className={classes.navLinks}>
            {navItems.map((item) => {
              const isActive = ContentCtx[item.key];

              return (
                <Nav.Link
                  key={item.value}
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    changeTab(item.value);
                  }}
                  className={`${classes.headerNavLi} ${
                    isActive ? classes.activeLink : ""
                  }`}
                >
                  {item.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
