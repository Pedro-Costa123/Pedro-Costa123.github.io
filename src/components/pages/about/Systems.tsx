import classes from "./Systems.module.css";

type SystemStage = {
  layer: string;
  title: string;
  summary: string;
  technologies: string[];
};

const systemStages: SystemStage[] = [
  {
    layer: "Interface",
    title: "Frontend",
    summary: "Typed user-facing flows connected to explicit backend contracts.",
    technologies: ["Angular", "React", "TypeScript"],
  },
  {
    layer: "Boundary",
    title: "API layer",
    summary: "REST endpoints, request validation, and controlled service access.",
    technologies: ["REST APIs", "API Gateway"],
  },
  {
    layer: "Application",
    title: "Backend services",
    summary: "Business behavior, integrations, and maintainable service boundaries.",
    technologies: ["Java", "Spring Boot", "Quarkus", "Jakarta EE"],
  },
  {
    layer: "Async",
    title: "Events & workers",
    summary: "Decoupled processing for work that should not block a request path.",
    technologies: ["SQS", "Lambda", "ECS"],
  },
  {
    layer: "State",
    title: "Data layer",
    summary: "Relational data, key-value access, and durable object storage.",
    technologies: ["RDS", "DynamoDB", "S3"],
  },
  {
    layer: "Operations",
    title: "Production feedback",
    summary: "Runtime signals that support diagnosis and safer follow-up changes.",
    technologies: ["Monitoring", "Incident analysis", "Production support"],
  },
];

/** A representative system flow based on Pedro's documented engineering work. */
const Systems = () => {
  return (
    <section className={classes.systems} aria-labelledby="systems-title">
      <header className={classes.sectionHeader}>
        <div>
          <p className={classes.eyebrow}>Architecture</p>
          <h2 className={classes.title} id="systems-title">
            Systems I Build
          </h2>
        </div>
        <p className={classes.intro}>
          A representative flow for the systems I work on: typed interfaces,
          Java services, asynchronous integration, managed data, and production
          feedback.
        </p>
      </header>

      <div className={classes.architecture}>
        <ol className={classes.flow} aria-label="Representative system flow">
          {systemStages.map((stage, index) => (
            <li className={classes.node} key={stage.title}>
              <div className={classes.nodeMeta}>
                <span className={classes.nodeNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={classes.layer}>{stage.layer}</span>
              </div>
              <h3 className={classes.nodeTitle}>{stage.title}</h3>
              <p className={classes.nodeSummary}>{stage.summary}</p>
              <ul
                className={classes.technologyList}
                aria-label={`${stage.title} technologies and practices`}
              >
                {stage.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className={classes.foundation}>
          <div>
            <p className={classes.foundationTitle}>Delivery &amp; runtime</p>
            <p className={classes.foundationCopy}>
              Quality checks, deployment, and runtime orchestration span the
              complete flow.
            </p>
          </div>
          <ul
            className={classes.foundationList}
            aria-label="Delivery and runtime technologies"
          >
            <li>CI/CD</li>
            <li>SonarQube</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Systems;
