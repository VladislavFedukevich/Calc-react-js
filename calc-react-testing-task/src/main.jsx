import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/store";

import Home from "@pages/Home/Home";
import Settings from "@pages/Settings/Settings";
import Home_CC from "@pages/Home_CC";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "@styles/styled";
import { light, dark } from "@styles/ThemeStyled";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Main = () => {
    const [currentTheme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(currentTheme === light ? dark : light);
    };

    return (
        <ErrorBoundary>
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
        </ErrorBoundary>
    );
};

export default Main;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main />
        </Provider>
    </React.StrictMode>
);
