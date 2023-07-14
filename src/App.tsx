import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderM from "./components/header/HeaderM";
import Main from "./components/main/Main";
import ContentProvider from "./context/context";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <ContentProvider>
      {isMobile ? <HeaderM /> : <Header />}
      <Main />
      <Footer />
    </ContentProvider>
  );
};

export default App;
