import { useEffect, useState } from "react";

import classes from "./Work.module.css";
import Job from "../../../models/job";
import { workTime } from "../../../utils/utils";

const Work = () => {
  const [jobs, setJobs] = useState([] as Job[]);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
      });
  }, []);

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
              {workTime(
                job.startMonth,
                job.startYear.toString(),
                job.endMonth,
                job.endYear.toString()
              )}
            </p>
          ) : (
            <p className={classes.dates}>
              {job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}{" "}
              &#xB7;{" "}
              {workTime(
                job.startMonth,
                job.startYear.toString(),
                job.endMonth,
                job.endYear.toString()
              )}
            </p>
          )}
          <p className={classes.description}></p>
        </div>
      ))}
    </>
  );
};

export default Work;
