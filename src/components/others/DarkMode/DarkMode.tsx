import { useEffect, useState } from "react";
import classes from "./DarkMode.module.css";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  const toggleTheme = (event: any) => {
    if (event.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.querySelector("body")?.setAttribute("data-theme", localTheme);
    }
  }, []);

  return (
    <div className={classes.dark_mode}>
      <input
        className={classes.dark_mode_input}
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label
        className={classes.dark_mode_label}
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
};

export default DarkMode;
