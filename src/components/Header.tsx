import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <h1>Pedro Costa</h1>
      <nav>
        <ul className={classes.headerNavUl}>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#home">
              Home
            </a>
          </li>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#about">
              About Me
            </a>
          </li>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#education">
              Education
            </a>
          </li>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#skills">
              Skills
            </a>
          </li>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#projects">
              Projects
            </a>
          </li>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#languages">
              Languages & Certifications
            </a>
          </li>
          <li className={classes.headerNavLi}>
            <a className={classes.headerNavA} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
