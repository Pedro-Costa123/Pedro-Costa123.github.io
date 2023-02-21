import logo from "./assets/logo.svg";
import githubLogo from "./assets/github.svg";
import linkedInLogo from "./assets/linkedin.svg";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <main className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>Pedro Costa Portfolio Website using React</p>
        <p className={styles.appText}>Work In Progress</p>
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
      </main>
    </div>
  );
};

export default App;
