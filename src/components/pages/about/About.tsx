import { useEffect, useState } from "react";
import photo from "../../../assets/PedroCosta.jpeg";
import classes from "./About.module.css";
import LoadingSpinner from "../LoadingSpinner";

const About = () => {
  const [about, setAbout] = useState([] as string[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("data/about.json")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data.about);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>About Me</h4>
        <LoadingSpinner />
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
