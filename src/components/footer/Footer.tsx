import githubLogo from "../../assets/github.svg";
import linkedInLogo from "../../assets/linkedin.svg";
import DarkMode from "../others/DarkMode/DarkMode";

import classes from "./Footer.module.css";

/**
 * Footer Component
 *
 * This component renders a footer for the website.
 * It uses CSS modules for styling.
 *
 * The footer includes a copyright notice, a dark mode toggle, and links to LinkedIn and GitHub profiles.
 *
 * The DarkMode component is imported and used to render a dark mode toggle in the footer.
 * The LinkedIn and GitHub logos are imported as SVGs and used as the content of the links.
 *
 * The links open in a new tab because of the 'target="_blank"' attribute, and the 'rel="noreferrer"' attribute is used for security reasons.
 *
 */
const Footer = () => {
  return (
    <footer className={classes.mainFooter}>
      <p className={classes.title}>&copy; 2024 Pedro Costa</p>
      <DarkMode />
      <div className={classes.social_icons}>
        <a
          href="https://www.linkedin.com/in/pedro-costa-a2173213b/"
          className={classes.social_icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInLogo} alt="LinkedIn Profile" />
        </a>
        <a
          href="https://github.com/Pedro-Costa123"
          className={classes.social_icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="GitHub Profile" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
