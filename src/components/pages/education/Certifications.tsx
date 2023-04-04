import classes from "./Certifications.module.css";

const Certifications = () => {
  return (
    <>
      <h4 className={classes.contentTitle}>Certifications</h4>
      <div className={classes.certifications}>
        <ul>
          <li>
            <p className={classes.titleCert}>
              React - The Complete Guide (incl Hooks, React Router, Redux) (48.5
              hours)
            </p>
            <p className={classes.dateCert}>Feb - 2023</p>
          </li>
          <li className={classes.liCert}>
            <p className={classes.titleCert}>
              Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games (29.5
              hours)
            </p>
            <p className={classes.dateCert}>Nov - 2022</p>
          </li>
          <li className={classes.liCert}>
            <p className={classes.titleCert}>
              Flutter & Dart - The Complete Guide [2022 Edition] (42.5 hours)
            </p>
            <p className={classes.dateCert}>Oct - 2022</p>
          </li>
          <li className={classes.liCert}>
            <p className={classes.titleCert}>
              Cambrige English Level 1 Certificate in ESOL International (First)
              - B2
            </p>
            <p className={classes.dateCert}>Jun - 2018</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Certifications;
