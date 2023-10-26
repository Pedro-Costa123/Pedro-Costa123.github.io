import { useEffect, useState } from "react";

import classes from "./Work.module.css";
import Job from "../../../models/job";

const Work = () => {
  const [jobs, setJobs] = useState([] as Job[]);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
      });
  }, []);

  const workTime = (startMonth: string, startYear: string) => {
    const date1 = new Date(`${startMonth} 1, ${startYear}`);
    const date2 = new Date();

    const timeDifference = date2.getTime() - date1.getTime();

    const monthsPassed = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 30) + 1
    );

    const yearsPassed = Math.floor(monthsPassed / 12);

    if (yearsPassed === 0) {
      return `${monthsPassed % 12} months`;
    } else if (monthsPassed === 1) {
      return `${monthsPassed % 12} month`;
    } else {
      return `${yearsPassed} years and ${monthsPassed % 12} months`;
    }
  };

  return (
    <>
      <h4 className={classes.contentTitle}>Work</h4>
      {jobs.map((job) => (
        <div className={classes.works} key={job.title}>
          <p className={classes.workTitle}>
            {job.title} @ {job.company}
          </p>
          <p className={classes.info}>{job.type}</p>
          <p className={classes.info}>{job.location}</p>
          {job.endMonth === "" && job.endYear === 0 ? (
            <p className={classes.dates}>
              {job.startMonth} {job.startYear} - Present &#xB7;{" "}
              {workTime(job.startMonth, job.startYear.toString())}
            </p>
          ) : (
            <p className={classes.dates}>
              {job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}{" "}
              &#xB7; {workTime(job.startMonth, job.startYear.toString())}
            </p>
          )}
          <p className={classes.description}></p>
        </div>
      ))}
    </>
  );
};

export default Work;
