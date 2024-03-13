import classes from "./Loading.module.css";

/**
 * LoadingSpinner Component
 *
 * This component renders a loading spinner.
 * It uses CSS modules for styling.
 *
 * The spinner consists of two divs, 'double_bounce1' and 'double_bounce2', which are styled to create a bouncing animation.
 * These divs are wrapped in a parent div with the 'spinner' class.
 *
 * The component does not accept any props or manage any state.
 * It is intended to be displayed while data is being fetched or a computation is being performed.
 *
 */
const LoadingSpinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.double_bounce1}></div>
      <div className={classes.double_bounce2}></div>
    </div>
  );
};

export default LoadingSpinner;
