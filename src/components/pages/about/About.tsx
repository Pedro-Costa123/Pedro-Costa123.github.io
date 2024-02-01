import { useEffect, useState } from "react";
import photo from "../../../assets/PedroCosta.jpeg";
import classes from "./About.module.css";
import Loading from "../../others/Loading";

const About = () => {
  const [about, setAbout] = useState([] as string[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/about.json")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.about);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h4 className={classes.contentTitle}>About Me</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>About Me</h4>
        <Loading />
      </>
    );
  }

  return (
    <>
      <div className={classes.about}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={photo} alt="Pedro Costa" />
        </div>
        <div className={classes.textContainer}>
          <h4 className={classes.contentTitle}>About Me</h4>
          {about.map((paragraph, index) => (
            <p className={classes.justify} key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
