import classes from "./Languages.module.css";

const Languages = () => {
  return (
    <>
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
    </>
  );
};

export default Languages;
