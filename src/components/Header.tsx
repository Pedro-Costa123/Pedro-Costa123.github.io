import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <h1>Pedro Costa</h1>
      <nav>
        <ul className={classes.headerNavUl}>
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>Home</button>
          </li>
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>About Me</button>
          </li>
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>Education</button>
          </li>
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>Skills</button>
          </li>
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>Projects</button>
          </li>
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>
              Languages & Certifications
            </button>
          </li>
          
          <li className={classes.headerNavLi}>
            <button className={classes.headerNavButton}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
