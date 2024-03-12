import { useContext, useEffect } from "react";

import classes from "./HeaderM.module.css";
import { Context } from "../../context/context";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const ContentCtx = useContext(Context);

  const changeTab = (text: string) => {
    ContentCtx.changeContent(text);
  };

  useEffect(() => {
    const body = document.body;
    const nav = document.getElementsByTagName("nav")[0];

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          if (body.getAttribute("data-theme") === "dark") {
            nav.setAttribute("data-bs-theme", "dark");
          } else {
            nav.removeAttribute("data-bs-theme");
          }
        }
      });
    });

    observer.observe(body, { attributes: true });

    return () => observer.disconnect();
  }, []);

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
