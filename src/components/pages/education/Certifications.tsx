import { useEffect, useState } from "react";
import classes from "./Certifications.module.css";
import Certification from "../../../models/certification";
import Recertification from "../../../models/recertification";
import Loading from "../../others/Loading/Loading";

/** Loads and presents credentials from the public portfolio data. */
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
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <section
        className={classes.certificationsSection}
        aria-labelledby="certifications-heading"
      >
        <h2 className={classes.contentTitle} id="certifications-heading">
          Certifications
        </h2>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </section>
    );
  }

  if (loading) {
    return (
      <section
        className={classes.certificationsSection}
        aria-labelledby="certifications-heading"
      >
        <h2 className={classes.contentTitle} id="certifications-heading">
          Certifications
        </h2>
        <Loading />
      </section>
    );
  }

  return (
    <section
      className={classes.certificationsSection}
      aria-labelledby="certifications-heading"
    >
      <h2 className={classes.contentTitle} id="certifications-heading">
        Certifications
      </h2>
      <div className={classes.certifications}>
        <ul className={classes.list}>
          {certifications.map((certification) => {
            const hasExpiration =
              certification.yearExpiration !== 0 &&
              certification.monthExpiration !== "";

            return (
              <li className={classes.item} key={certification.name}>
                <h3 className={classes.titleCert}>
                  {certification.url === "" ? (
                    certification.name
                  ) : (
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${certification.name} (opens in a new tab)`}
                    >
                      {certification.name}
                    </a>
                  )}
                </h3>
                <dl className={classes.metadata}>
                  <div>
                    <dt>Issued</dt>
                    <dd>
                      {certification.month} {certification.year}
                    </dd>
                  </div>
                  {hasExpiration && (
                    <div>
                      <dt>Expires</dt>
                      <dd>
                        {certification.monthExpiration}{" "}
                        {certification.yearExpiration}
                      </dd>
                    </div>
                  )}
                  {certification.recertification && (
                    <div>
                      <dt>Recertified</dt>
                      <dd>
                        {certification.recertification
                          .map(
                            ([month, year]: Recertification) =>
                              `${month} ${year}`
                          )
                          .join(", ")}
                      </dd>
                    </div>
                  )}
                </dl>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
