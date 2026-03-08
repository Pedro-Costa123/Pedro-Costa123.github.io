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
      <header className={classes.header}>
        <p className={classes.welcomeText}>Welcome to My Website</p>

        <h1 className={classes.typing_animation}>
          <span className={classes.introText}>Hi, I&apos;m </span>
          Pedro Costa
        </h1>

        <h2 className={classes.subtitle}>
          <span className={classes.showFullLine}>Software Developer | Tech Enthusiast | Problem Solver</span>
          <span className={classes.showMobileOnly}>Software Developer</span>
        </h2>

        <div className={classes.dividerRow} aria-hidden="true">
          <hr className={classes.divider} />
          <span className={classes.dividerDot} />
          <hr className={classes.divider} />
        </div>
      </header>
    </div>
  );
};

export default Home;
