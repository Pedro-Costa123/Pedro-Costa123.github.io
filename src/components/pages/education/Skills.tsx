import { useEffect, useState } from "react";
import classes from "./Skills.module.css";
import Skill from "../../../models/skill";
import Loading from "../../others/Loading/Loading";

/**
 * Skills Component
 *
 * This component fetches and displays a list of programming languages and frameworks.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains five state variables: 'pLanguages', 'frameworks', 'loading', and 'error'.
 * 'pLanguages' and 'frameworks' are arrays of Skill objects representing programming languages and frameworks respectively.
 * 'loading' is a boolean indicating whether the data is currently being fetched.
 * 'error' is a boolean indicating whether an error occurred while fetching the data.
 *
 * The component includes a useEffect hook that fetches the data from 'data/skills.json' when the component mounts.
 * If the fetch is successful, 'pLanguages' is set to the 'programming_languages' property of the data, 'frameworks' is set to the 'frameworks' property of the data, and 'loading' is set to false.
 * If the fetch fails, 'error' is set to true, and 'loading' is set to false.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that the data could not be loaded.
 * If 'loading' is true, it renders a loading spinner.
 * Otherwise, it renders a list of programming languages and a list of frameworks.
 * Each item in the list includes an image and the name of the programming language or framework.
 *
 */
const Skills = () => {
  const [pLanguages, setPLanguages] = useState([] as Skill[]);
  const [frameworks, setFrameworks] = useState([] as Skill[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setPLanguages(data.programming_languages);
        setFrameworks(data.frameworks);
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
        <h4 className={classes.contentTitle}>Skills</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Skills</h4>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Skills</h4>
      <div className={classes.skills}>
        <ul>
          {frameworks.map((framework) => (
            <li key={framework.name}>
              <img
                className={classes.logo}
                src={framework.logo}
                alt={framework.name}
              />
              {framework.name}
            </li>
          ))}
        </ul>
        <ul>
          {pLanguages.map((language) => (
            <li key={language.name}>
              <img
                className={classes.logo}
                src={language.logo}
                alt={language.name}
              />
              {language.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
