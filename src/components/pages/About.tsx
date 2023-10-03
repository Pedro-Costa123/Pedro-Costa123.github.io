import photo from "../../assets/PedroCosta.jpeg";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={classes.about}>
        <div className={classes.imageContainer}>
          <img
            className={`rounded-circle shadow-lg ${classes.image}`}
            src={photo}
            alt="Pedro Costa"
          />
        </div>
        <div className={classes.textContainer}>
          <h4 className={classes.contentTitle}>About Me</h4>
          <p className={classes.justify}>
            Bachelor's degree in Computer Science and Engineering.
          </p>
          <p className={classes.justify}>
            I have a diverse skill set that includes Java, Kotlin, Python,
            JavaScript, TypeScript, Dart, and frameworks like Flutter, Ionic,
            Angular, and React.js. I am passionate about creating innovative
            solutions and leveraging technology to solve complex problems.
          </p>
          <p className={classes.justify}>
            With my knowledge and skills, I am confident in my ability to take
            on challenging projects and deliver high-quality results. I am also
            a quick learner, constantly seeking new knowledge and skills to
            improve my abilities.
          </p>
          <p className={classes.justify}>
            Currently working at Capgemini as a Java Software Engineer.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
