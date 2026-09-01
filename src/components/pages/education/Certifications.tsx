import { useEffect, useState } from "react";
import classes from "./Certifications.module.css";
import Certification from "../../../models/certification";
import Loading from "../../others/Loading/Loading";

const featuredNames = [
  "AWS Certified Cloud Practitioner",
  "Oracle Certified Associate, Java SE 8 Programmer",
  "Professional Scrum Master II (PSM II)",
  "GitHub Copilot",
];

const featuredLabels: Record<string, string> = {
  "Oracle Certified Associate, Java SE 8 Programmer":
    "Oracle Certified Associate, Java SE 8",
  "Professional Scrum Master II (PSM II)": "Professional Scrum Master II",
};

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/certifications.json")
      .then((res) => res.json())
      .then((data) => { setCertifications(data.certifications); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const certificateLink = (certification: Certification) => {
    const label = featuredLabels[certification.name] ?? certification.name;

    return certification.url ? (
      <a href={certification.url} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}>{label}</a>
    ) : label;
  };

  if (error || loading) return (
    <section className={classes.certificationsSection} aria-labelledby="certifications-heading">
      <h2 className={classes.contentTitle} id="certifications-heading">Certifications</h2>
      {loading ? <Loading /> : <p className={classes.justify}>Sorry, we couldn't load the information. Please try again later.</p>}
    </section>
  );

  const featured = featuredNames
    .map((name) => certifications.find((certification) => certification.name === name))
    .filter((certification): certification is Certification => certification !== undefined);
  const remaining = certifications.filter(({ name }) => !featuredNames.includes(name));

  return (
    <section className={classes.certificationsSection} aria-labelledby="certifications-heading">
      <h2 className={classes.contentTitle} id="certifications-heading">Certifications</h2>
      <ul className={classes.featuredList}>
        {featured.map((certification) => <li key={certification.name}>{certificateLink(certification)}</li>)}
      </ul>
      <details className={classes.remaining}>
        <summary>More certifications</summary>
        <ul>{remaining.map((certification) => <li key={certification.name}>{certificateLink(certification)}</li>)}</ul>
      </details>
    </section>
  );
};

export default Certifications;
