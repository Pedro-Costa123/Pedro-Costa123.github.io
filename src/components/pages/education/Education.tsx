import { useEffect, useState } from "react";
import classes from "./Education.module.css";
import Schooling from "../../../models/schooling";
import LoadingSpinner from "../LoadingSpinner";

const Education = () => {
  const [schooling, setSchooling] = useState([] as Schooling[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data/schooling.json")
      .then((res) => res.json())
      .then((data) => {
        setSchooling(data.schoolings);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Education</h4>
        <LoadingSpinner />
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
