import { useEffect, useState } from "react";
import classes from "./Certifications.module.css";
import Certification from "../../../models/certification";

const Certifications = () => {
  const [certifications, setCertifications] = useState([] as Certification[]);

  useEffect(() => {
    fetch("data/certifications.json")
      .then((res) => res.json())
      .then((data) => {
        setCertifications(data.certifications);
      });
  }, []);

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