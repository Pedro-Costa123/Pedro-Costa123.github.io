import { useEffect, useState } from "react";
import classes from "./Projects.module.css";
import Project from "../../../models/project";
import Loading from "../../others/Loading/Loading";

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
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h4 className={classes.contentTitle}>Projects</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Projects</h4>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Projects</h4>
      {projects.map((project) => (
        <div className={classes.projects} key={project.name}>
          <p className={classes.projectTitle}>{project.name}</p>
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
          <p className={classes.description}>{project.description}</p>
        </div>
      ))}
    </>
  );
};

export default Projects;
