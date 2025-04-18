import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeaderM from "./components/header/HeaderM";
import Main from "./components/main/Main";
import ContentProvider from "./context/context";
import BackgroundParticles from "./components/others/BackgroundParticles/BackgroundParticles";

/**
 * App Component
 *
 * This is the root component of the application.
 * It uses the useState and useEffect hooks from React, and CSS from Bootstrap.
 *
 * The component maintains a state variable 'isMobile' to determine if the device is a mobile device.
 * The initial state is set to false.
 *
 * The component includes a useEffect hook that sets up a media query to detect if the device is a mobile device.
 * If the media query matches, 'isMobile' is set to true. Otherwise, 'isMobile' is set to false.
 * The media query is set to match devices with a screen width of 600px or less.
 *
 * The useEffect hook also sets up an event listener to update 'isMobile' whenever the screen size changes.
 * The event listener is removed when the component unmounts.
 *
 * The component uses the ContentProvider component to provide context to its children.
 * It conditionally renders the HeaderM component if 'isMobile' is true, and the Header component if 'isMobile' is false.
 * It always renders the Main and Footer components.
 *
 */
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
      <BackgroundParticles isMobile={isMobile} />
      {isMobile ? <HeaderM /> : <Header />}
      <Main />
      <Footer />
    </ContentProvider>
  );
};

export default App;
