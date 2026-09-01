import { useEffect, useState } from "react";
import classes from "./Languages.module.css";
import Language from "../../../models/language";
import Loading from "../../others/Loading/Loading";

/** Loads and presents language proficiency from the public portfolio data. */
const Languages = () => {
  const [languages, setLanguages] = useState([] as Language[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/languages.json")
      .then((res) => res.json())
      .then((data) => {
        setLanguages(data.languages);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <section aria-labelledby="languages-heading">
        <h2 className={classes.contentTitle} id="languages-heading">
          Languages
        </h2>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </section>
    );
  }

  if (loading) {
    return (
      <section aria-labelledby="languages-heading">
        <h2 className={classes.contentTitle} id="languages-heading">
          Languages
        </h2>
        <Loading />
      </section>
    );
  }

  return (
    <section aria-labelledby="languages-heading">
      <h2 className={classes.contentTitle} id="languages-heading">
        Languages
      </h2>
      <dl className={classes.languages}>
        {languages.map((language) => (
          <div className={classes.language} key={language.name}>
            <dt className={classes.name}>{language.name}</dt>
            <dd className={classes.value}>{language.proficiency}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Languages;
