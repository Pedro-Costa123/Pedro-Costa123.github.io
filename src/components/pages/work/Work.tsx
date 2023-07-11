import { useEffect, useState } from "react";

import classes from "./Work.module.css";

const Work = () => {
  const [timePassed, setTimePassed] = useState("");

  useEffect(() => {
    const date1 = new Date("April 1, 2023");
    const date2 = new Date();
    const timeDifference = date2.getTime() - date1.getTime();
    const monthsPassed = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 30) + 1
    );
    const yearsPassed = Math.floor(monthsPassed / 12);

    if (yearsPassed === 0) {
      setTimePassed(`${monthsPassed % 12} months`);
    } else if (monthsPassed === 1) {
      setTimePassed(`${monthsPassed % 12} month`);
    } else {
      setTimePassed(`${yearsPassed} years and ${monthsPassed % 12} months`);
    }
  }, []);

  return (
    <>
      <h4 className={classes.contentTitle}>Work</h4>
      <div className={classes.works}>
        <p className={classes.workTitle}>Java Software Engineer @ Capgemini</p>
        <p className={classes.info}>Internship</p>
        <p className={classes.info}>Lisbon, Portugal</p>
        <p className={classes.dates}>
          April 2023 - Present &#xB7; {timePassed}
        </p>
        <p className={classes.description}></p>
      </div>
    </>
  );
};

export default Work;
