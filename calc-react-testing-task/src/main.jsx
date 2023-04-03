import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import Home_CC from "./pages/Home_CC/index";

import { ThemeProvider } from "styled-components";
import "./styles/styled.js";

import { GlobalStyles } from "./styles/styled.js";
import { light, dark } from "./styles/ThemeStyled";
import * as theme from "./styles/ThemeStyled";

const Main = () => {
  const [currentTheme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(currentTheme === light ? dark : light);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/settings"
            element={<Settings toggleTheme={toggleTheme} />}
          />
          <Route path="home_cc" element={<Home_CC />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Main;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
