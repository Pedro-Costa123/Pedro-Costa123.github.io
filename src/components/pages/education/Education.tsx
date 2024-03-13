import { useEffect, useState } from "react";
import classes from "./Education.module.css";
import Schooling from "../../../models/schooling";
import Loading from "../../others/Loading/Loading";

/**
 * Education Component
 *
 * This component fetches and displays a list of educational qualifications.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains three state variables: 'schooling', 'loading', and 'error'.
 * 'schooling' is an array of Schooling objects.
 * 'loading' is a boolean indicating whether the data is currently being fetched.
 * 'error' is a boolean indicating whether an error occurred while fetching the data.
 *
 * The component includes a useEffect hook that fetches the data from 'data/schooling.json' when the component mounts.
 * If the fetch is successful, 'schooling' is set to the 'schoolings' property of the data, and 'loading' is set to false.
 * If the fetch fails, 'error' is set to true, and 'loading' is set to false.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that the data could not be loaded.
 * If 'loading' is true, it renders a loading spinner.
 * Otherwise, it renders a list of educational qualifications.
 * Each qualification includes the institution, degree, dates, and grade.
 *
 */
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
