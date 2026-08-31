import { useEffect, useState } from "react";
import classes from "./Projects.module.css";
import Project from "../../../models/project";
import Loading from "../../others/Loading/Loading";
import CaseStudyContent from "./CaseStudyContent";

/** Loads public project data and renders each project as a case study. */
const Projects = () => {
  const [projects, setProjects] = useState([] as Project[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h2 className={classes.contentTitle}>Projects</h2>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h2 className={classes.contentTitle}>Projects</h2>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h2 className={classes.contentTitle}>Projects</h2>
      <p className={classes.sectionIntro}>
        Independent and academic work, documented with the same focus on
        constraints, implementation choices, and practical outcomes.
      </p>
      <div className={classes.projectsList}>
        {projects.map((project) => (
          <article className={classes.projectCard} key={project.name}>
            <div className={classes.projectHeader}>
              <h3 className={classes.projectTitle}>{project.name}</h3>
              {project.endMonth === "" && project.endYear === 0 ? (
                <p className={classes.dates}>
                  {project.startMonth} {project.startYear} - Present
                </p>
              ) : (
                <p className={classes.dates}>
                  {project.startMonth} {project.startYear} - {project.endMonth}{" "}
                  {project.endYear}
                </p>
              )}
            </div>
            <CaseStudyContent
              caseStudy={project.caseStudy}
              labelLevel="h4"
            />
            <div className={classes.repositories}>
              <p className={classes.repoTitle}>Repositories</p>
              <ul className={classes.repoList}>
                {project.urls.map((url, urlIndex) => (
                  <li className={classes.repoItem} key={urlIndex}>
                    <a
                      className={classes.repoLink}
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Projects;
