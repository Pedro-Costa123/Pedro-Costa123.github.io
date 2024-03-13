import { useContext } from "react";

import { Context } from "../../context/context";

import classes from "./Main.module.css";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Education from "../pages/education/Education";
import Certifications from "../pages/education/Certifications";
import Languages from "../pages/education/Languages";
import Skills from "../pages/education/Skills";
import Work from "../pages/work/Work";
import Projects from "../pages/work/Projects";
import Contact from "../pages/contact/Contact";

/**
 * Main Component
 *
 * This component serves as the main content area of the website.
 * It uses CSS modules for styling and the Context API for managing state.
 *
 * The component imports and uses the Context to determine which page content to display.
 * It conditionally renders different components based on the state of the Context.
 *
 * The component includes the following pages: Home, About, Education, Work, and Contact.
 * Each page is represented by a separate component, which is imported at the top of the file.
 *
 * The Education page includes additional components for Languages, Skills, and Certifications.
 * The Work page includes an additional component for Projects.
 *
 * Each page component is wrapped in a div with the 'fadeInElement' class for animation purposes.
 * Some components are also wrapped in a div with the 'centering' or 'centeringLanguages' class for layout purposes.
 *
 */
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
          <div className={classes.centeringLanguages}>
            <Languages />
          </div>
          <div className={classes.centering}>
            <Skills />
          </div>
          <div className={classes.centering}>
            <Certifications />
          </div>
        </div>
      ) : (
        <></>
      )}

      {ContentCtx.work ? (
        <div className={classes.fadeInElement}>
          <div className={classes.centering}>
            <Work />
          </div>
          <div className={classes.centering}>
            <Projects />
          </div>
        </div>
      ) : (
        <></>
      )}

      {ContentCtx.contact ? (
        <div className={classes.fadeInElement}>
          <div className={classes.centering}>
            <Contact />
          </div>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
