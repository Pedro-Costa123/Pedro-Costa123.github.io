import { useContext } from "react";

import githubLogo from "../../../assets/github.svg";
import linkedInLogo from "../../../assets/linkedin.svg";
import { Context } from "../../../context/context";
import classes from "./Home.module.css";

const Home = () => {
  const contentCtx = useContext(Context);

  const viewWork = () => {
    contentCtx.changeContent("Work");
    window.requestAnimationFrame(() => {
      document.getElementById("main-content")?.focus();
    });
  };

  return (
    <div className={classes.homeText}>
      <section className={classes.header} aria-labelledby="hero-title">
        <div className={classes.heroContent}>
          <h1 className={classes.headline} id="hero-title">
            Pedro Costa
          </h1>
          <p className={classes.focus}>
            I build and maintain software that has to work in production.
          </p>
          <p className={classes.summary}>
            Most of my work is around Java backend services, AWS integrations,
            and legacy modernization, with Angular and React when the work
            crosses into the frontend.
          </p>
          <div className={classes.actions}>
            <button className={classes.workButton} type="button" onClick={viewWork}>
              View my work
            </button>
            <a
              className={classes.profileLink}
              href="https://github.com/Pedro-Costa123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="" /> GitHub
            </a>
            <a
              className={classes.profileLink}
              href="https://www.linkedin.com/in/pedro-m-da-costa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} alt="" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
