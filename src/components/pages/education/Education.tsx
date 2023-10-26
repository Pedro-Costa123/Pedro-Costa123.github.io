import { useEffect, useState } from "react";
import classes from "./Education.module.css";
import Schooling from "../../../models/schooling";

const Education = () => {
  const [schooling, setSchooling] = useState([] as Schooling[]);

  useEffect(() => {
    fetch("data/schooling.json")
      .then((res) => res.json())
      .then((data) => {
        setSchooling(data.schoolings);
      });
  }, []);

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
