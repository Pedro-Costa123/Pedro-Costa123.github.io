import classes from "./Certifications.module.css";

const Certifications = () => {
  return (
    <>
      <h4 className={classes.contentTitle}>Certifications</h4>
      <div className={classes.certifications}>
        <ul>
          <li>
            <p className={classes.titleCert}>
              <a
                href="https://www.udemy.com/certificate/UC-c81fc5cb-b296-4699-af45-a2abc8332e5b/"
                target="_blank"
                rel="noreferrer"
              >
                Spring Boot 3, Spring 6 & Hibernate for Beginners
              </a>
            </p>
            <p className={classes.dateCert}>Jul - 2023</p>
          </li>
          <li>
            <p className={classes.titleCert}>
              <a
                href="https://www.credly.com/badges/1856a10c-5999-4e4e-badb-d7c1aa83659b/linked_in_profile"
                target="_blank"
                rel="noreferrer"
              >
                AWS Certified Cloud Practitioner
              </a>
            </p>
            <p className={classes.dateCert}>Jun - 2023</p>
          </li>
          <li>
            <p className={classes.titleCert}>
              <a
                href="https://www.credly.com/badges/f0bf0ccb-9c40-45ec-9866-45f16e6c345a/linked_in_profile"
                target="_blank"
                rel="noreferrer"
              >
                Professional Scrum Master™ I (PSM I)
              </a>
            </p>
            <p className={classes.dateCert}>May - 2023</p>
          </li>
          <li>
            <p className={classes.titleCert}>
              EF Level 16 - Upper Advanced - CEFR Level C2
            </p>
            <p className={classes.dateCert}>May - 2023</p>
          </li>
          <li>
            <p className={classes.titleCert}>
              <a
                href="https://www.udemy.com/certificate/UC-f8fd054a-7272-4129-aeaa-4ffc5275fb00/"
                target="_blank"
                rel="noreferrer"
              >
                The Complete C Programming Bootcamp (25 hours)
              </a>
            </p>
            <p className={classes.dateCert}>May - 2023</p>
          </li>
          <li>
            <p className={classes.titleCert}>
              <a
                href="https://www.udemy.com/certificate/UC-8c283f13-953c-4daa-9d30-2519e188d4a3/"
                target="_blank"
                rel="noreferrer"
              >
                React - The Complete Guide (incl Hooks, React Router, Redux)
                (48.5 hours)
              </a>
            </p>
            <p className={classes.dateCert}>Feb - 2023</p>
          </li>
          <li className={classes.liCert}>
            <p className={classes.titleCert}>
              <a
                href="https://www.udemy.com/certificate/UC-3161e477-aab4-4bcc-a460-7358622b1acf/"
                target="_blank"
                rel="noreferrer"
              >
                Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games
                (29.5 hours)
              </a>
            </p>
            <p className={classes.dateCert}>Nov - 2022</p>
          </li>
          <li className={classes.liCert}>
            <p className={classes.titleCert}>
              <a
                href="https://www.udemy.com/certificate/UC-8a62570b-fda9-4f77-811f-c62d28b8ef51/"
                target="_blank"
                rel="noreferrer"
              >
                Flutter & Dart - The Complete Guide [2022 Edition] (42.5 hours)
              </a>
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
