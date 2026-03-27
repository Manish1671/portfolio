import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import SkillsPage from "./Pages/Skills";
import { AnimatePresence } from "framer-motion";
import { profile } from "./data/portfolioData";

const Footer = () => (
  <footer>
    <center>
      <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
      <div className="pb-4 flex flex-col items-center gap-3">
        <div className="flex gap-4 text-slate-400">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-sm">GitHub</a>
          <span className="text-slate-600">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200 text-sm">LinkedIn</a>
          <span className="text-slate-600">·</span>
          <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors duration-200 text-sm">Email</a>
        </div>
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Copyright 2026{" "}
          <a href={profile.github} className="hover:underline hover:text-gray-300 transition-colors">
            {profile.name}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </center>
  </footer>
);

// Scroll progress bar at top of viewport
const ScrollProgress = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 9999, background: "transparent", pointerEvents: "none" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #6366f1, #a855f7, #38bdf8)",
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px rgba(168,85,247,0.6)",
        }}
      />
    </div>
  );
};

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <ScrollProgress />
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <SkillsPage />
          <Education />
          <Portofolio />
          <ContactPage />
          <Footer />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
