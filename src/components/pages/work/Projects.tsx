import { useEffect, useState } from "react";
import classes from "./Projects.module.css";
import Project from "../../../models/project";
import Loading from "../../others/Loading/Loading";
import CaseStudyContent from "./CaseStudyContent";

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
