import { useContext } from "react";

import classes from "./HeaderM.module.css";
import { Context } from "../../context/context";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const ContentCtx = useContext(Context);

  const changeTab = (text: string) => {
    ContentCtx.changeContent(text);
  };

  return (
    <header className={classes.mainHeader}>
      <Navbar expand="sm" className={classes.headerNavUl}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              onClick={() => {
                changeTab("Home");
              }}
              className={classes.headerNavLi}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                changeTab("About");
              }}
              className={classes.headerNavLi}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                changeTab("Education");
              }}
              className={classes.headerNavLi}
            >
              Education
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                changeTab("Work");
              }}
              className={classes.headerNavLi}
            >
              Work
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                changeTab("Contact");
              }}
              className={classes.headerNavLi}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>Pedro Costa</h1>
    </header>
  );
};

export default Header;
