import classes from "./Home.module.css";

/**
 * Home Component
 *
 * This component renders a welcome message.
 * It uses CSS modules for styling.
 *
 * The component does not accept any props or manage any state.
 * It is intended to be displayed on the home page of the website.
 *
 * The component returns a div with the class 'homeText'.
 * Inside this div, it renders a h1 element with the text 'Hi, I'm Pedro Costa', a h4 element with the text 'Software Developer', a horizontal rule, and another h4 element with the text 'Welcome to My Website'.
 * The h1 element includes the class 'typing_animation' to create a typing animation effect.
 *
 */
const Home = () => {
  return (
    <div className={classes.homeText}>
      <h1 className={classes.typing_animation}>Hi, I'm Pedro Costa</h1>
      <h4>Software Developer</h4>
      <hr />
      <h4>Welcome to My Website</h4>
    </div>
  );
};

export default Home;
