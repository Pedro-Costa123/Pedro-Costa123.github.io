import githubLogo from "../assets/github.svg";
import linkedInLogo from "../assets/linkedin.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_icons}>
        <a
          href="https://www.linkedin.com/in/pedro-costa-a2173213b/"
          className={styles.social_icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInLogo} alt="LinkedIn Profile" />
        </a>
        <a
          href="https://github.com/Pedro-Costa123"
          className={styles.social_icon}
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="GitHub Profile" />
        </a>
      </div>
      <p>Made By Pedro Costa - 2023 </p>
    </footer>
  );
};

export default Footer;
