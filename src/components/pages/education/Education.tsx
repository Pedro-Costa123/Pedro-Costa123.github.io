import { useEffect, useState } from "react";
import classes from "./Education.module.css";
import Schooling from "../../../models/schooling";
import Loading from "../../others/Loading/Loading";

/** Loads and presents Pedro's academic record from the public portfolio data. */
const Education = () => {
  const [schooling, setSchooling] = useState([] as Schooling[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/schooling.json")
      .then((res) => res.json())
      .then((data) => {
        setSchooling(data.schoolings);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <section
        className={classes.educationSection}
        aria-labelledby="education-heading"
      >
        <h1 className={classes.contentTitle} id="education-heading">
          Education
        </h1>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </section>
    );
  }

  if (loading) {
    return (
      <section
        className={classes.educationSection}
        aria-labelledby="education-heading"
      >
        <h1 className={classes.contentTitle} id="education-heading">
          Education
        </h1>
        <Loading />
      </section>
    );
  }

  return (
    <section
      className={classes.educationSection}
      aria-labelledby="education-heading"
    >
      <h1 className={classes.contentTitle} id="education-heading">
        Education
      </h1>
      <div className={classes.educationList}>
        {schooling.map((schooling) => (
          <article
            className={classes.education}
            key={`${schooling.institution}-${schooling.degree}`}
          >
            <div className={classes.qualification}>
              <h2 className={classes.university}>{schooling.institution}</h2>
              <p className={classes.degree}>{schooling.degree}</p>
            </div>

            <dl className={classes.details}>
              <div className={classes.detail}>
                <dt>Period</dt>
                <dd>
                  {schooling.startMonth} {schooling.startYear} –{" "}
                  {schooling.endMonth} {schooling.endYear}
                </dd>
              </div>
              <div className={classes.detail}>
                <dt>Final grade</dt>
                <dd>
                  {schooling.grade} <span>{schooling.scale}</span>
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
