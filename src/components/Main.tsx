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
      {ContentCtx.home ? <Home /> : <></>}

      {ContentCtx.about ? (
        <>
          <div className={classes.centering}>
            <About />
          </div>
        </>
      ) : (
        <></>
      )}

      {ContentCtx.education ? (
        <>
          <div className={classes.centering}>
            <Education />
          </div>
          <div className={classes.centering}>
            <Certifications />
          </div>
          <div className={classes.centering}>
            <Languages />
          </div>
          <div className={classes.centering}>
            <Skills />
          </div>
        </>
      ) : (
        <></>
      )}

      {ContentCtx.work ? <></> : <></>}

      {ContentCtx.contact ? <></> : <></>}
    </main>
  );
};

export default Main;
