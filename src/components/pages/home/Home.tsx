import classes from "./Home.module.css";

/**
 * Home Component
 *
 * This component renders a welcome message.
 * It uses CSS modules for styling.
 *
 * The component does not accept any props or manage any state.
 * It is intended to be displayed on the home page of the website.
 */
const Home = () => {
  return (
    <div className={classes.homeText}>
      <section className={classes.header} aria-labelledby="hero-title">
        <div className={classes.heroContent}>
          <p className={classes.welcomeText}>
            Software Engineer · Lisbon, Portugal
          </p>

          <h1 className={classes.headline} id="hero-title">
            Pedro Costa
          </h1>

          <p className={classes.focus}>
            Backend systems, cloud integrations, and production support.
          </p>

          <p className={classes.summary}>
            I work with Java, Quarkus, AWS, Angular, and React—building APIs,
            maintaining production services, and handling incidents and on-call
            operations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
