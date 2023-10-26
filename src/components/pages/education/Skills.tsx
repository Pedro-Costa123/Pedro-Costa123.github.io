import { useEffect, useState } from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  const [pLanguages, setPLanguages] = useState([] as string[]);
  const [frameworks, setFrameworks] = useState([] as string[]);

  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setPLanguages(data.programming_languages);
        setFrameworks(data.frameworks);
      });
  }, []);

  return (
    <>
      <h4 className={classes.contentTitle}>Skills</h4>
      <div className={classes.skills}>
        <ul>
          {frameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
        <ul>
          {pLanguages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;
