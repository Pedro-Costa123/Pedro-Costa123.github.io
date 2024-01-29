import { useEffect, useState } from "react";
import classes from "./Languages.module.css";
import Language from "../../../models/language";
import LoadingSpinner from "../LoadingSpinner";

const Languages = () => {
  const [languages, setLanguages] = useState([] as Language[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data/languages.json")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data.languages);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Languages</h4>
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Languages</h4>
      <div className={classes.languages}>
        {languages.map((language) => (
          <div key={language.name}>
            <div className={classes.language}>
              <p>{language.name}</p>
              <div className={classes.proficiency}>
                <span
                  className={classes.bar}
                  style={{ width: `${language.proficiency}%` }}
                >
                  {language.proficiency}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Languages;
