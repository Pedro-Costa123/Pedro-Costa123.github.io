import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ContentProvider from "./context/context";

const App = () => {
  return (
    <ContentProvider>
      <Header />
      <Main />
      <Footer />
    </ContentProvider>
  );
};

export default App;
