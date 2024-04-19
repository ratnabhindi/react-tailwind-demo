// ThemeToggle.js
import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;
