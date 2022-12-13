import { useState, useEffect } from "react";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./styles.css";

const BtnDarkMoon = () => {
  const [darkMoon, setDarkMoon] = useState("light");

  useEffect(() => {
    if (darkMoon === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMoon]);
  const toggleDarkMoon = () => {
    setDarkMoon((item) => {
      return item === "light" ? "dark" : "light";
    });
  };
  return (
    <button
      className={
        darkMoon === "dark"
          ? "dark-mode-btn dark-mode-btn--active"
          : "dark-mode-btn"
      }
      onClick={toggleDarkMoon}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMoon;
