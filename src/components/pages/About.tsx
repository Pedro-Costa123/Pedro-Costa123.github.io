import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <h4 className={classes.contentTitle}>About Me</h4>
      <div className={classes.about}>
        <p className={classes.justify}>
          As a final year student in computer science and engineering, I have a
          diverse skill set that includes Java, Kotlin, Python, JavaScript,
          TypeScript, Dart, and frameworks like Flutter, Ionic, Angular, and
          React.js. I am passionate about creating innovative solutions and
          leveraging technology to solve complex problems.
        </p>
        <p className={classes.justify}>
          With my knowledge and skills, I am confident in my ability to take on
          challenging projects and deliver high-quality results. I am also a
          quick learner, constantly seeking new knowledge and skills to improve
          my abilities.
        </p>
        <p className={classes.justify}>
          I am excited to pursue a career in the field of software developer /
          software engineer and am currently available for work. I would be
          honored to bring my skills and enthusiasm to a team that is dedicated
          to making a positive impact in the world of technology.
        </p>
      </div>
    </>
  );
};

export default About;
