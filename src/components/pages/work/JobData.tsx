import Job from "../../../models/job";
import { workTime } from "../../../utils/utils";
import CaseStudyContent from "./CaseStudyContent";
import classes from "./Work.module.css";

type JobDataProps = {
  job: Job;
};

/** Displays role metadata and the structured case study for one position. */
const JobData = ({ job }: JobDataProps) => {
  const isCurrent = job.endMonth === "" && job.endYear === 0;
  const endDate = isCurrent ? "Present" : `${job.endMonth} ${job.endYear}`;
  const duration = workTime(
    job.startMonth,
    job.startYear.toString(),
    job.endMonth,
    job.endYear.toString()
  );

  return (
    <>
      <div className={classes.metaRow}>
        <p className={classes.info}>{job.type}</p>
        <p className={classes.info}>{job.location}</p>
        <p className={classes.timelineMeta}>
          {job.startMonth} {job.startYear} - {endDate} · {duration}
        </p>
      </div>
      <CaseStudyContent caseStudy={job.caseStudy} labelLevel="h3" />
    </>
  );
};

export default JobData;
