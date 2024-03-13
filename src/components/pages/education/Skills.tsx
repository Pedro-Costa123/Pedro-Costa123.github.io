import { useEffect, useState } from "react";
import classes from "./Skills.module.css";
import Skill from "../../../models/skill";
import Loading from "../../others/Loading/Loading";

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
