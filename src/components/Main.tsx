import logo from "../assets/logo.svg";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.workInProgress}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Work In Progress</p>
      </div>
    </main>
  );
};

export default Main;
