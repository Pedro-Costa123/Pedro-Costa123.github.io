import { useEffect, useState } from "react";
import classes from "./Projects.module.css";
import Project from "../../../models/project";
import Loading from "../../others/Loading/Loading";

/**
 * Projects Component
 *
 * This component fetches and displays a list of projects.
 * It uses the useState and useEffect hooks from React, and CSS modules for styling.
 *
 * The component maintains three state variables: 'projects', 'loading', and 'error'.
 * 'projects' is an array of Project objects.
 * 'loading' is a boolean indicating whether the data is currently being fetched.
 * 'error' is a boolean indicating whether an error occurred while fetching the data.
 *
 * The component includes a useEffect hook that fetches the data from 'data/projects.json' when the component mounts.
 * If the fetch is successful, 'projects' is set to the 'projects' property of the data, and 'loading' is set to false.
 * If the fetch fails, 'error' is set to true, and 'loading' is set to false.
 *
 * The component conditionally renders different content based on the state.
 * If 'error' is true, it renders a message indicating that the data could not be loaded.
 * If 'loading' is true, it renders a loading spinner.
 * Otherwise, it renders a list of projects.
 * Each project includes the name, dates, and description.
 * If the project is ongoing, the end date is displayed as 'Present'.
 *
 */
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
