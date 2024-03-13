import { useEffect, useState } from "react";
import classes from "./Languages.module.css";
import Language from "../../../models/language";
import Loading from "../../others/Loading/Loading";

/**
 * Languages Component
 *
 * This component fetches and displays a list of languages and their proficiency levels.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains three state variables: 'languages', 'loading', and 'error'.
 * 'languages' is an array of Language objects.
 * 'loading' is a boolean indicating whether the data is currently being fetched.
 * 'error' is a boolean indicating whether an error occurred while fetching the data.
 *
 * The component includes a useEffect hook that fetches the data from 'data/languages.json' when the component mounts.
 * If the fetch is successful, 'languages' is set to the 'languages' property of the data, and 'loading' is set to false.
 * If the fetch fails, 'error' is set to true, and 'loading' is set to false.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that the data could not be loaded.
 * If 'loading' is true, it renders a loading spinner.
 * Otherwise, it renders a list of languages.
 * Each language includes the name and a bar representing the proficiency level.
 * The width of the bar is set to the 'proficiency' property of the language, and the text inside the bar is the 'proficiency' property followed by '%'.
 *
 */
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
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h4 className={classes.contentTitle}>Languages</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Languages</h4>
        <Loading />
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
