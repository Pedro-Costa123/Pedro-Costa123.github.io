import CaseStudy from "../../../models/case-study";
import classes from "./CaseStudyContent.module.css";

type CaseStudyContentProps = {
  caseStudy: CaseStudy;
  labelLevel: "h3" | "h4";
};

const CaseStudyContent = ({
  caseStudy,
  labelLevel,
}: CaseStudyContentProps) => {
  const Label = labelLevel;

  return (
    <div className={classes.caseStudy}>
      <section className={classes.problem}>
        <Label className={classes.sectionLabel}>Problem</Label>
        <p className={classes.primaryCopy}>{caseStudy.problem}</p>
      </section>

      <div className={classes.detailGrid}>
        <section className={classes.detailSection}>
          <Label className={classes.sectionLabel}>What I worked on</Label>
          <ul className={classes.detailList}>
            {caseStudy.work.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={classes.detailSection}>
          <Label className={classes.sectionLabel}>Technical decisions</Label>
          <ul className={classes.detailList}>
            {caseStudy.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className={classes.impact}>
        <Label className={classes.sectionLabel}>Practical impact</Label>
        <p className={classes.primaryCopy}>{caseStudy.impact}</p>
      </section>

      <section className={classes.technologies}>
        <Label className={classes.sectionLabel}>Technologies</Label>
        <ul className={classes.technologyList}>
          {caseStudy.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CaseStudyContent;
