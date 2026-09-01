import classes from "./Systems.module.css";

type SystemStage = {
  title: string;
  summary: string;
  technologies: string[];
};

const systemStages: SystemStage[] = [
  { title: "Frontend", summary: "Typed user-facing flows connected to backend contracts.", technologies: ["Angular", "React", "TypeScript"] },
  { title: "API", summary: "REST endpoints, validation, and controlled service access.", technologies: ["REST APIs", "API Gateway"] },
  { title: "Services", summary: "Business behavior, integrations, and maintainable boundaries.", technologies: ["Java", "Spring Boot", "Quarkus", "Jakarta EE"] },
  { title: "Events", summary: "Async work that should not hold up a request.", technologies: ["SQS", "Lambda", "ECS"] },
  { title: "Data", summary: "Relational data, key-value access, and object storage.", technologies: ["RDS", "DynamoDB", "S3"] },
  { title: "Production", summary: "Signals and incident work that make follow-up changes safer.", technologies: ["Monitoring", "Incident analysis", "Production support"] },
];

const Systems = () => (
  <section className={classes.systems} aria-labelledby="systems-title">
    <header className={classes.sectionHeader}>
      <h2 className={classes.title} id="systems-title">Systems I Build</h2>
      <p className={classes.intro}>
        Frontend to API, services, events, data, and the production feedback
        that keeps the next change safer.
      </p>
    </header>
    <div className={classes.architecture}>
      <ol className={classes.flow} aria-label="Representative system flow">
        {systemStages.map((stage) => (
          <li className={classes.node} key={stage.title}>
            <h3 className={classes.nodeTitle}>{stage.title}</h3>
            <p className={classes.nodeSummary}>{stage.summary}</p>
            <ul className={classes.technologyList} aria-label={`${stage.title} technologies`}>
              {stage.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      <div className={classes.foundation}>
        <div>
          <p className={classes.foundationTitle}>Delivery and runtime</p>
          <p className={classes.foundationCopy}>CI/CD, code quality checks, and deployment support the whole flow.</p>
        </div>
        <ul className={classes.foundationList} aria-label="Delivery and runtime technologies">
          <li>CI/CD</li><li>SonarQube</li><li>Kubernetes</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Systems;
