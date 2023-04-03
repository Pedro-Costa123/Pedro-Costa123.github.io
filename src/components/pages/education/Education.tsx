import classes from "./Education.module.css";

const Education = () => {
  return (
    <>
      <h4 className={classes.contentTitle}>Education</h4>
      <div className={classes.education}>
        <p className={classes.university}>Universidade Lusófona</p>
        <p className={classes.degree}>
          Bachelor's degree, Computer Science and Engineering
        </p>
        <p className={classes.dates}>Sep 2019 - Jun 2023</p>
        <p className={classes.grade}>Grade: 15 (1-20)</p>
      </div>
    </>
  );
};

export default Education;
