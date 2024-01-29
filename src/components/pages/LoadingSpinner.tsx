import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes.double_bounce1}></div>
      <div className={classes.double_bounce2}></div>
    </div>
  );
};

export default LoadingSpinner;
