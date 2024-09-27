import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import Loading from "./subComponents/Loading"; // Import Loading component

// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import Feats from "./components/Feats";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Set loading to true when the page is refreshed
    const handleBeforeUnload = () => {
      setIsLoading(true); // Show loading when the page is refreshing
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Hide loading after the component mounts
    setIsLoading(false);
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {/* Show loading when the app is loading */}
        {isLoading && <Loading />}

        {/* For framer-motion animation on page change! */}
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/feats" element={<Feats />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
