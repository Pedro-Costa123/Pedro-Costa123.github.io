import { useEffect, useState } from "react";
import classes from "./DarkMode.module.css";

/**
 * DarkMode Component
 *
 * Renders an accessible theme button and persists the selected theme locally.
 * Dark is the default visual identity when no preference has been saved.
 *
 */
const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const setDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={classes.dark_mode}>
      <button
        className={classes.themeButton}
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        aria-pressed={theme === "dark"}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        <span className={classes.themeLabel} aria-hidden="true">
          {theme === "dark" ? "Dark" : "Light"}
        </span>
        <span className={classes.themeTrack} aria-hidden="true">
          <span className={classes.themeThumb}></span>
        </span>
      </button>
    </div>
  );
};

export default DarkMode;
