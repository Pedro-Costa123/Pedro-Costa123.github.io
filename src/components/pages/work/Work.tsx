import React from "react";
import { useEffect, useState } from "react";

import classes from "./Work.module.css";
import { loadCompanies } from "../../../utils/utils";
import Company from "../../../models/company";
import JobData from "./JobData";

const Work = () => {
  const [companies, setCompanies] = useState([] as Company[]);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const loadedCompanies = loadCompanies(data);
        setCompanies(loadedCompanies);
      });
  }, []);

  return (
    <>
      <h4 className={classes.contentTitle}>Work</h4>

      {/* Companies */}
      {companies.map((company) => (
        <React.Fragment key={company.name}>
          {/* If more then one position and X company, create a list */}
          {company.positions.length > 1 ? (
            <ul className={classes.works}>
              <p className={classes.workTitle}>{company.name}</p>
              {company.positions.map((job) => (
                <li className={classes.job} key={job.title}>
                  <p className={classes.workTitleSub}>{job.title}</p>
                  <JobData job={job} />
                </li>
              ))}
            </ul>
          ) : (
            <>
              {/* If company only got one position */}
              {company.positions.map((job) => (
                <div className={classes.works} key={job.title}>
                  <p className={classes.workTitle}>
                    {job.title} @ {job.company}
                  </p>
                  <JobData job={job} />
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
