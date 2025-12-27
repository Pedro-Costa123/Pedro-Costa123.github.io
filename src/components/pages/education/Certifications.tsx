import { useEffect, useState } from "react";
import classes from "./Certifications.module.css";
import Certification from "../../../models/certification";
import Recertification from "../../../models/recertification";
import Loading from "../../others/Loading/Loading";

/**
 * Certifications Component
 *
 * This component fetches and displays a list of certifications.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains three state variables: 'certifications', 'loading', and 'error'.
 * 'certifications' is an array of Certification objects.
 * 'loading' is a boolean indicating whether the data is currently being fetched.
 * 'error' is a boolean indicating whether an error occurred while fetching the data.
 *
 * The component includes a useEffect hook that fetches the data from 'data/certifications.json' when the component mounts.
 * If the fetch is successful, 'certifications' is set to the 'certifications' property of the data, and 'loading' is set to false.
 * If the fetch fails, 'error' is set to true, and 'loading' is set to false.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that the data could not be loaded.
 * If 'loading' is true, it renders a loading spinner.
 * Otherwise, it renders a list of certifications.
 * Each certification includes a name and a date.
 * If the certification has a URL, the name is a link to the URL.
 *
 */
const Certifications = () => {
  const [certifications, setCertifications] = useState([] as Certification[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/certifications.json")
      .then((res) => res.json())
      .then((data) => {
        setCertifications(data.certifications);
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
        <h4 className={classes.contentTitle}>Certifications</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Certifications</h4>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Certifications</h4>
      <div className={classes.certifications}>
        <ul>
          {certifications.map((certification) => (
            <li key={certification.name}>
              <p className={classes.titleCert}>
                {certification.url === "" ? (
                  certification.name
                ) : (
                  <a href={certification.url} target="_blank" rel="noreferrer">
                    {certification.name}
                  </a>
                )}
              </p>
              {certification.yearExpiration === 0 ||
              certification.monthExpiration === "" ? (
                <p className={classes.dateCert}>
                  Issued: {certification.month} {certification.year}
                </p>
              ) : (
                <p className={classes.dateCert}>
                  Issued: {certification.month} {certification.year} &#xB7;
                  Expires: {certification.monthExpiration}{" "}
                  {certification.yearExpiration}
                </p>
              )}
              {certification.recertification && (
                <p className={classes.dateCert}>
                  Recertification:{" "}
                  {certification.recertification
                    .map(([month, year]: Recertification) => `${month} ${year}`)
                    .join(" , ")}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Certifications;
