import { useEffect, useState } from "react";
import classes from "./Education.module.css";
import Schooling from "../../../models/schooling";
import Loading from "../../others/Loading";

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
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h4 className={classes.contentTitle}>Education</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Education</h4>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Education</h4>
      {schooling.map((schooling) => (
        <div className={classes.education} key={schooling.degree}>
          <p className={classes.university}>{schooling.institution}</p>
          <p className={classes.degree}>{schooling.degree}</p>
          <p className={classes.dates}>
            {schooling.startMonth} {schooling.startYear} - {schooling.endMonth}{" "}
            {schooling.endYear}
          </p>
          <p className={classes.grade}>
            Grade: {schooling.grade} {schooling.scale}
          </p>
        </div>
      ))}
    </>
  );
};

export default Education;
