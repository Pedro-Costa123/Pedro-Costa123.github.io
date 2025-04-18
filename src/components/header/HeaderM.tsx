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

  return (
    <header className={classes.mainHeader}>
      <Navbar collapseOnSelect expand="sm" className={classes.headerNavUl}>
        <Navbar.Brand>
          <h1 className={classes.navbar_color}>Pedro Costa</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              href="#"
              onClick={() => {
                changeTab("Home");
              }}
              className={`${classes.headerNavLi} ${classes.navbar_color}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                changeTab("About");
              }}
              className={`${classes.headerNavLi} ${classes.navbar_color}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                changeTab("Education");
              }}
              className={`${classes.headerNavLi} ${classes.navbar_color}`}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                changeTab("Work");
              }}
              className={`${classes.headerNavLi} ${classes.navbar_color}`}
            >
              Work
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => {
                changeTab("Contact");
              }}
              className={`${classes.headerNavLi} ${classes.navbar_color}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
