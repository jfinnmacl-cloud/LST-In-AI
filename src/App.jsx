import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import Header from "./components/Header";

import LandingPage from "./pages/LandingPage";
import PrinciplesPage from "./pages/PrinciplesPage";
import ModulesPage from "./pages/ModulesPage";
import QuestionnairePage from "./pages/QuestionnairePage";
import ApplicationPage from "./pages/ApplicationPage";
import ArchivePage from "./pages/ArchivePage";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
    const handleClick = (e) => {
      if (e.target.tagName !== "BUTTON" && e.target.tagName !== "A") return;
      
      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(139, 92, 246, 0.3);
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out;
        pointer-events: none;
        left: ${e.nativeEvent.offsetX || e.offsetX}px;
        top: ${e.nativeEvent.offsetY || e.offsetY}px;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
      `;
      
      e.target.style.position = "relative";
      e.target.style.overflow = "hidden";
      e.target.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    
    const createTrail = (e) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX - 2}px`;
      trail.style.top = `${e.clientY - 2}px`;
      document.body.appendChild(trail);
      setTimeout(() => trail.remove(), 1000);
    };

    window.addEventListener("mousemove", createTrail);
    return () => window.removeEventListener("mousemove", createTrail);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 flex flex-col scanline">
      <div className="eerie-overlay" />
      <Header onNavigate={handleNavigate} />

      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={<LandingPage onNavigate={handleNavigate} />}
              />
              <Route
                path="/principles"
                element={<PrinciplesPage />}
              />
              <Route
                path="/modules"
                element={<ModulesPage questionnaireComplete={false} applicationSubmitted={false} />}
              />
              <Route
                path="/questionnaire"
                element={
                  <QuestionnairePage
                    onComplete={setAssessment}
                    onNavigate={handleNavigate}
                  />
                }
              />
              <Route
                path="/apply"
                element={
                  <ApplicationPage
                    onNavigate={handleNavigate}
                    location={location}
                  />
                }
              />
              <Route
                path="/archive"
                element={<ArchivePage />}
              />
              <Route
                path="/collapse"
                element={
                  <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16">
                    <div className="mx-auto max-w-6xl px-4 md:px-6">
                      <div className="rounded-[2rem] border border-violet-400/20 bg-violet-500/10 p-8 md:p-10 backdrop-blur-xl shadow-2xl shadow-violet-500/5">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                          <div>
                            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">
                              Midyear Event
                            </div>
                            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Controlled Collapse</h2>
                            <p className="mt-5 text-base leading-7 text-zinc-300">
                              Students hand their system to others, introduce contradiction, and observe whether it survives without the designer. This is where LST stops being theory.
                            </p>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            {[
                              ["System Handoff", "The designer explains the system, then steps back."],
                              ["Resistance Introduced", "A participant challenges a rule, pace, outcome, or trust condition."],
                              ["No Emergency Rewrite", "The system must use existing governance rather than instant redesign."],
                              ["Classification", "Students are classified as Rigid, Brittle, Adaptive, or Regenerative."],
                            ].map(([title, text]) => (
                              <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-lg shadow-black/20 backdrop-blur hover:border-violet-400/30 transition-all duration-300"
                              >
                                <h3 className="font-semibold text-white">{title}</h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 backdrop-blur-xl bg-[#07070a]/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>Local Systems Theory. Build. Break. Observe. Rebuild under pressure.</div>
          <div className="flex items-center gap-2">
            <Mail size={15} /> Application records save locally and export as JSON.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
