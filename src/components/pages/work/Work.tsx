import { useEffect, useState } from "react";
import classes from "./Work.module.css";
import { loadCompanies } from "../../../utils/utils";
import Company from "../../../models/company";
import JobData from "./JobData";
import LoadingSpinner from "../../others/Loading/Loading";

/**
 * Work Component
 *
 * This component fetches and displays a list of work experiences.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains three state variables: 'companies', 'loading', and 'error'.
 * 'companies' is an array of Company objects.
 * 'loading' is a boolean indicating whether the data is currently being fetched.
 * 'error' is a boolean indicating whether an error occurred while fetching the data.
 *
 * The component includes a useEffect hook that fetches the data from 'data/jobs.json' when the component mounts.
 * If the fetch is successful, 'companies' is set to the loaded companies, and 'loading' is set to false.
 * If the fetch fails, 'error' is set to true, and 'loading' is set to false.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that the data could not be loaded.
 * If 'loading' is true, it renders a loading spinner.
 * Otherwise, it renders a list of work experiences.
 * Each work experience includes the company name, job title, and job details.
 * If a company has more than one job, the jobs are displayed in a list.
 * If a company has only one job, the job is displayed without a list.
 *
 */
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
        Selected work framed around the engineering problem, the decisions
        involved, and the practical effect on delivery and production support.
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
