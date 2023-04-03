import { useContext } from "react";

import classes from "./Main.module.css";
import { Context } from "../context/context";

const Main = () => {
  const ContentCtx = useContext(Context);

  return (
    <main className={classes.main}>
      {ContentCtx.home ? (
        <>
          <div className={classes.homeText}>
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
            <h4 className={classes.contentTitle}>About Me</h4>
            <div className={classes.about}>
              <p>
                As a final year student in computer science and engineering, I
                have a diverse skill set that includes Java, Kotlin, Python,
                JavaScript, TypeScript, Dart, and frameworks like Flutter,
                Ionic, Angular, and React.js. I am passionate about creating
                innovative solutions and leveraging technology to solve complex
                problems.
              </p>
              <p>
                With my knowledge and skills, I am confident in my ability to
                take on challenging projects and deliver high-quality results. I
                am also a quick learner, constantly seeking new knowledge and
                skills to improve my abilities.
              </p>
              <p>
                I am excited to pursue a career in the field of software
                developer / software engineer and am currently available for
                work. I would be honored to bring my skills and enthusiasm to a
                team that is dedicated to making a positive impact in the world
                of technology.
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {ContentCtx.education ? (
        <>
          {/*EDUCATION*/}
          <div className={classes.aboutText}>
            <h4 className={classes.contentTitle}>Education</h4>
            <div className={classes.education}>
              <p className={classes.university}>Universidade Lusófona</p>
              <p className={classes.degree}>
                Bachelor's degree, Computer Science and Engineering
              </p>
              <p className={classes.dates}>Sep 2019 - Jun 2023</p>
              <p className={classes.grade}>Grade: 15 (1-20)</p>
            </div>
          </div>

          {/*CERTIFICATIONS*/}
          <div className={classes.aboutText}>
            <h4 className={classes.contentTitle}>Certifications</h4>
            <div className={classes.certifications}>
              <ul>
                <li>
                  <p className={classes.titleCert}>
                    Cambrige English Level 1 Certificate in ESOL International
                    (First) - B2
                  </p>
                  <p className={classes.dateCert}>Jun - 2018</p>
                </li>
                <li className={classes.liCert}>
                  <p className={classes.titleCert}>
                    Flutter & Dart - The Complete Guide [2022 Edition] (42.5
                    hours)
                  </p>
                  <p className={classes.dateCert}>Oct - 2022</p>
                </li>
                <li className={classes.liCert}>
                  <p className={classes.titleCert}>
                    Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games
                    (29.5 hours)
                  </p>
                  <p className={classes.dateCert}>Nov - 2022</p>
                </li>
                <li className={classes.liCert}>
                  <p className={classes.titleCert}>
                    React - The Complete Guide (incl Hooks, React Router, Redux)
                    (48.5 hours)
                  </p>
                  <p className={classes.dateCert}>Feb - 2023</p>
                </li>
              </ul>
            </div>
          </div>

          {/*LANGUAGES*/}
          <div className={classes.aboutText}>
            <h4 className={classes.contentTitle}>Languages</h4>
            <div className={classes.languages}>
              <div>
                <div className={classes.language}>
                  <p>English</p>
                  <div className={classes.proficiency}>
                    <span className={classes.bar} style={{ width: "90%" }}>
                      90%
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.language}>
                  <p>Portuguese</p>
                  <div className={classes.proficiency}>
                    <span className={classes.bar} style={{ width: "100%" }}>
                      100%
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.language}>
                  <p>Spanish</p>
                  <div className={classes.proficiency}>
                    <span className={classes.bar} style={{ width: "50%" }}>
                      50%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Skills*/}
          <div className={classes.aboutText}>
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
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
