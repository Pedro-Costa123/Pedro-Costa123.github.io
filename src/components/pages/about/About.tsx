import { useEffect, useState } from "react";
import photo from "../../../assets/PedroCosta.jpeg";
import classes from "./About.module.css";
import Loading from "../../others/Loading/Loading";

type AboutContent = {
  intro: string;
  systems: string;
  approach: string;
};

/**
 * About Component
 *
 * Loads the portfolio's About content and presents Pedro's profile, current
 * systems work, and engineering approach.
 *
 */
const About = () => {
  const [about, setAbout] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/about.json")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.about);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <section className={classes.state} aria-labelledby="about-title">
        <h1 className={classes.contentTitle} id="about-title">
          About
        </h1>
        <p className={classes.stateMessage}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </section>
    );
  }

  if (loading || !about) {
    return (
      <section className={classes.state} aria-labelledby="about-title">
        <h1 className={classes.contentTitle} id="about-title">
          About
        </h1>
        <Loading />
      </section>
    );
  }

  return (
    <section className={classes.about} aria-labelledby="about-title">
      <figure className={classes.profileCard}>
        <img
          className={classes.image}
          src={photo}
          alt="Portrait of Pedro Costa"
        />
        <figcaption className={classes.profileMeta}>
          <span className={classes.profileName}>Pedro Costa</span>
          <span className={classes.profileRole}>Software Engineer</span>
          <span className={classes.profileLocation}>Portugal</span>
        </figcaption>
      </figure>

      <div className={classes.textContainer}>
        <p className={classes.eyebrow}>About</p>
        <h1 className={classes.contentTitle} id="about-title">
          Full-stack work, with a backend and production focus.
        </h1>
        <p className={classes.intro}>{about.intro}</p>

        <div className={classes.details}>
          <section className={classes.detail}>
            <h2 className={classes.detailTitle}>Systems I work on</h2>
            <p className={classes.detailCopy}>{about.systems}</p>
          </section>
          <section className={classes.detail}>
            <h2 className={classes.detailTitle}>Engineering approach</h2>
            <p className={classes.detailCopy}>{about.approach}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
