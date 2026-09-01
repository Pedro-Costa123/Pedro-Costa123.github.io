import { useEffect, useState } from "react";
import classes from "./Work.module.css";
import { loadCompanies } from "../../../utils/utils";
import Company from "../../../models/company";
import JobData from "./JobData";
import LoadingSpinner from "../../others/Loading/Loading";

/** Loads public work-history data and renders each position as a case study. */
const Work = () => {
  const [companies, setCompanies] = useState([] as Company[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const loadedCompanies = loadCompanies(data);
        setCompanies(loadedCompanies);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h1 className={classes.contentTitle}>Work</h1>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h1 className={classes.contentTitle}>Work</h1>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <h1 className={classes.contentTitle}>Work</h1>
      <p className={classes.sectionIntro}>
        A few examples of the systems and problems I’ve worked on.
      </p>
      <div className={classes.workList}>
        {companies.flatMap((company) =>
          company.positions.map((job) => (
            <article
              className={classes.workCard}
              key={`${company.name}-${job.title}-${job.startYear}`}
            >
              <header className={classes.cardHeader}>
                <div className={classes.headingGroup}>
                  <p className={classes.companyName}>{company.name}</p>
                  <h2 className={classes.roleTitle}>{job.title}</h2>
                </div>
                <img
                  src={company.logo}
                  alt={company.name}
                  className={classes.logo}
                />
              </header>
              <JobData job={job} />
            </article>
          ))
        )}
      </div>
    </>
  );
};

export default Work;
