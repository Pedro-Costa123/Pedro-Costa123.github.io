import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <h4 className={classes.contentTitle}>Projects</h4>
      <div className={classes.projects}>
        <p className={classes.projectTitle}>Pedro Costa - Portfolio Website</p>
        <p className={classes.dates}>Feb 2023 - Present</p>
        <p className={classes.description}>
          My own portfolio website, built with React.js and TypeScript, deployed
          using Github pages. Using my own CSS classes, not extravagant but
          concise.
        </p>
      </div>
      <div className={classes.projects}>
        <p className={classes.projectTitle}>
          BestRide (startup) / Final Year Project
        </p>
        <p className={classes.dates}>Sep 2021 - Sep 2022</p>
        <p className={classes.description}>
          BestRide's primary goal was to solve problems in the Tuk Tuk business
          - a business that was introduced in Lisbon for the relevance of
          tourism in the region. Problems ranged from lack of regulation, unfair
          prices and stabilization of human resources. All of this solved with
          the help of two mobile apps, one for tourists, one for
          drivers/companies. My role in this project was as a frontend developer
          using frameworks such as: Angular, Ionic. And AWS to host both apps
          and automatically start a new deploy when a push has been performed.
          Grade: 15 (1-20)
        </p>
      </div>
    </>
  );
};

export default Projects;
