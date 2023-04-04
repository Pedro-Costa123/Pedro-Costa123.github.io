import { useContext } from "react";

import { Context } from "../context/context";

import classes from "./Main.module.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/education/Education";
import Certifications from "./pages/education/Certifications";
import Languages from "./pages/education/Languages";
import Skills from "./pages/education/Skills";

const Main = () => {
  const ContentCtx = useContext(Context);

  return (
    <main className={classes.main}>
      {ContentCtx.home ? (
        <div className={classes.fadeInElement}>
          <Home />
        </div>
      ) : (
        <></>
      )}

      {ContentCtx.about ? (
        <div className={classes.fadeInElement}>
          <div className={classes.centering}>
            <About />
          </div>
        </div>
      ) : (
        <></>
      )}

      {ContentCtx.education ? (
        <div className={classes.fadeInElement}>
          <div className={classes.centering}>
            <Education />
          </div>
          <div className={classes.centering}>
            <Certifications />
          </div>
          <div className={classes.centeringLanguages}>
            <Languages />
          </div>
          <div className={classes.centering}>
            <Skills />
          </div>
        </div>
      ) : (
        <></>
      )}

      {ContentCtx.work ? <div className={classes.fadeInElement}></div> : <></>}

      {ContentCtx.contact ? (
        <div className={classes.fadeInElement}></div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
