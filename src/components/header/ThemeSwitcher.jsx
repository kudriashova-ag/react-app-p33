import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <button onClick={toggleTheme} className="btn">
       {theme === "light" ? <MoonOutlined /> : <SunOutlined />}  
      </button>
    );
};

export default ThemeSwitcher;
