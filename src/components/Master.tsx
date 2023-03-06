import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

import styles from "./Master.module.css";

const Master = () => {
  return (
    <div className={styles.master}>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default Master;
