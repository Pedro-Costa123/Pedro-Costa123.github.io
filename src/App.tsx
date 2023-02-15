import logo from "./logo.svg";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>Pedro Costa Portfolio Website using React</p>
        <p className={styles.AppText}>Work In Progress</p>
      </header>
    </div>
  );
};

export default App;
