import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <h4 className={classes.contentTitle}>Skills</h4>
      <div className={classes.skills}>
        <ul>
          <li>React.js</li>
          <li>Flutter</li>
          <li>Ionic</li>
          <li>Angular</li>
          <li>Django</li>
        </ul>
        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript/TypeScript</li>
          <li>Kotlin</li>
          <li>C++</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
