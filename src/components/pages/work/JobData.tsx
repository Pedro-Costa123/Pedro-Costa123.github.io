import Job from "../../../models/job";
import { workTime } from "../../../utils/utils";
import classes from "./Work.module.css";

type JobDataProps = {
  job: Job;
};

/**
 * JobData Component
 *
 * This component displays information about a job.
 * It uses CSS modules for styling.
 *
 * The component accepts one prop: 'job', which is a Job object.
 * The Job object includes properties for the type, location, description, start month, start year, end month, and end year of the job.
 *
 * The component returns a fragment containing several paragraphs.
 * The first paragraph displays the job type, the second paragraph displays the job location, and the third paragraph displays the job description.
 * The fourth paragraph displays the job dates and duration.
 * If the end month and end year of the job are not provided, the end date is displayed as 'Present'.
 * The duration is calculated by the 'workTime' function, which takes the start month, start year, end month, and end year as parameters.
 *
 */
const JobData = ({ job }: JobDataProps) => {
  return (
    <>
      <div className={classes.metaRow}>
        <p className={classes.info}>{job.type}</p>
        <p className={classes.info}>{job.location}</p>
      </div>
      {job.description && <p className={classes.description}>{job.description}</p>}
      {job.keyFeatures && job.keyFeatures.length > 0 && (
        <section className={classes.featureSection}>
          <h4 className={classes.sectionLabel}>Responsibilities</h4>
          <ul className={`${classes.description} ${classes.featureList}`}>
            {job.keyFeatures.map((feature, index) => (
              <li key={index} className={classes.featureItem}>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}
      {job.endMonth === "" && job.endYear === 0 ? (
        <div className={classes.timeline}>
          <p className={classes.sectionLabel}>Timeline</p>
          <p className={classes.dates}>
            {job.startMonth} {job.startYear} - Present &#xB7;{" "}
            {workTime(
              job.startMonth,
              job.startYear.toString(),
              job.endMonth,
              job.endYear.toString()
            )}
          </p>
        </div>
      ) : (
        <div className={classes.timeline}>
          <p className={classes.sectionLabel}>Timeline</p>
          <p className={classes.dates}>
            {job.startMonth} {job.startYear} - {job.endMonth} {job.endYear} &#xB7;{" "}
            {workTime(
              job.startMonth,
              job.startYear.toString(),
              job.endMonth,
              job.endYear.toString()
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default JobData;
