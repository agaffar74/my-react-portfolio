//Importing React and createContect from react
import React, { useState} from "react";
import { createContext } from "react";

//Importing all relevent files
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Portfolios from "./components/Portfolio/Portfolios";
import Footer from "./components/Footer/Footer";

//Importing style file
import "./App.css";

//Setting the theme for the page
export const ThemeContext = createContext(null);

const App = () => {
  const [theme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme }}>
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
