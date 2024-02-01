import { useEffect, useState } from "react";
import classes from "./Certifications.module.css";
import Certification from "../../../models/certification";
import Loading from "../../others/Loading";

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
              <p className={classes.dateCert}>
                {certification.month} - {certification.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Certifications;
