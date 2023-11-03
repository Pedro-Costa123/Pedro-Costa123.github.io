import Job from "../../../models/job";
import { workTime } from "../../../utils/utils";
import classes from "./Work.module.css";

type JobDataProps = {
  job: Job;
};

const JobData = ({ job }: JobDataProps) => {
  return (
    <>
      <p className={classes.info}>{job.type}</p>
      <p className={classes.info}>{job.location}</p>
      <p className={classes.description}>{job.description}</p>
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
          {job.startMonth} {job.startYear} - {job.endMonth} {job.endYear} &#xB7;{" "}
          {workTime(
            job.startMonth,
            job.startYear.toString(),
            job.endMonth,
            job.endYear.toString()
          )}
        </p>
      )}
    </>
  );
};

export default JobData;
