import React, { useState, useEffect } from "react";
import { createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Portfolios from "./components/Portfolio/Portfolios";
import Footer from "./components/Footer/Footer";

import "./App.css";


export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "#282d3f";
      body.style.color = "#dddddd";
    } else {
      body.style.background = "#ffffff";
      body.style.color = "#656d72";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Portfolios />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
