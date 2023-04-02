import { useContext } from "react";

import classes from "./Main.module.css";
import { Context } from "../context/context";

const Main = () => {
  const ContentCtx = useContext(Context);

  return (
    <main className={classes.main}>
      {ContentCtx.home ? (
        <>
          <div className={classes.mainText}>
            <h1>Hi, I'm Pedro Costa</h1>
            <h4>Software Developer</h4>
            <hr />
            <h4>Welcome to My Website</h4>
          </div>
        </>
      ) : (
        <></>
      )}
      {ContentCtx.about ? (
        <>
          <div className={classes.aboutText}>
            <h4>About Me:</h4>
            <p></p>
            <p>
              As a final year student in computer science and engineering, I
              have a diverse skill set that includes Java, Kotlin, Python,
              JavaScript, TypeScript, Dart, and frameworks like Flutter, Ionic,
              Angular, and React.js. I am passionate about creating innovative
              solutions and leveraging technology to solve complex problems.
            </p>
            <p></p>
            <p>
              With my knowledge and skills, I am confident in my ability to take
              on challenging projects and deliver high-quality results. I am
              also a quick learner, constantly seeking new knowledge and skills
              to improve my abilities.
            </p>
            <p>
              I am excited to pursue a career in the field of software developer
              / software engineer and am currently available for work. I would
              be honored to bring my skills and enthusiasm to a team that is
              dedicated to making a positive impact in the world of technology.
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
