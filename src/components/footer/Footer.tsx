import githubLogo from "../../assets/github.svg";
import linkedInLogo from "../../assets/linkedin.svg";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.mainFooter}>
      <p className={classes.title}>&copy; 2023 Pedro Costa</p>
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
