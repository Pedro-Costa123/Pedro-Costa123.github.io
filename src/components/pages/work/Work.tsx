import React from "react";
import { useEffect, useState } from "react";
import classes from "./Work.module.css";
import { loadCompanies } from "../../../utils/utils";
import Company from "../../../models/company";
import JobData from "./JobData";
import LoadingSpinner from "../../others/Loading/Loading";

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
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h4 className={classes.contentTitle}>Work</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Work</h4>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Work</h4>

      {/* Companies */}
      {companies.map((company) => (
        <React.Fragment key={company.name}>
          {/* If more then one position and X company, create a list */}
          {company.positions.length > 1 ? (
            <ul className={classes.works}>
              <div className={classes.companyContainer}>
                <div className={classes.companyInfo}>
                  <p className={classes.workTitle}>{company.name}</p>
                  {company.positions.map((job) => (
                    <li className={classes.job} key={job.title}>
                      <p className={classes.workTitleSub}>{job.title}</p>
                      <JobData job={job} />
                    </li>
                  ))}
                </div>
                <img
                  src={company.logo}
                  alt={company.name}
                  className={classes.logo}
                />
              </div>
            </ul>
          ) : (
            <>
              {/* If company only got one position */}
              {company.positions.map((job) => (
                <div className={classes.works} key={job.title}>
                  <div className={classes.companyContainer}>
                    <div className={classes.companyInfo}>
                      <p className={classes.workTitle}>
                        {job.title} @ {job.company}
                      </p>
                      <JobData job={job} />
                    </div>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={classes.logo}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Work;
