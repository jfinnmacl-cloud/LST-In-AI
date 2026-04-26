import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Map, Sparkles, CheckCircle2, Zap, Brain } from "lucide-react";
import Pill from "../components/Pill";

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 relative">
      <div className="eerie-overlay" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 flex flex-wrap gap-2">
              {["20-question assessment", "Application required", "Core / Intermediate / Advanced"].map((text) => (
                <Pill key={text}>{text}</Pill>
              ))}
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white leading-[1.05] md:text-6xl lg:text-7xl flicker text-glitch">
              This will break how you think.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-300 max-w-xl hypnotic">
              Local Systems Theory pressure-tests whether systems remain truthful when compressed back into human-scale contact with reality.
            </p>

            <p className="mt-4 text-base leading-relaxed text-zinc-400 max-w-lg">
              The course does not reward accumulation. It tests what survives compression, friction, proximity, disagreement, material failure, time pressure, and growth pressure.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate("/questionnaire")}
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 shadow-lg shadow-white/10 overflow-hidden"
              >
                <span className="relative z-10">Start Questionnaire</span>
                <ArrowRight size={17} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("/modules")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-violet-500/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-violet-400/30"
              >
                <Map size={17} /> View Curriculum
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-2xl border border-violet-500/20 bg-zinc-950/60 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl eerie-shadow float-slow"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.3em] text-violet-300 flex items-center gap-2">
                <Brain size={14} /> Initiation
              </div>
              <Zap size={18} className="text-violet-300 animate-pulse" />
            </div>

            <div className="space-y-3 text-xl font-semibold leading-tight text-white md:text-2xl glitch">
              <p className="hypnotic">Your best ideas will not survive this unchanged.</p>
              <p className="text-zinc-500">That is the point.</p>
            </div>

            <div className="mt-6 grid gap-2">
              {[
                "Compress complexity until structure appears.",
                "Read friction before removing it.",
                "Restore proximity before trusting abstraction.",
                "Build systems that survive without the designer.",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 rounded-2xl border border-violet-500/10 bg-white/[0.02] p-3 text-sm leading-relaxed text-zinc-300 hover:border-violet-400/20 transition-all duration-300"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-violet-300" size={16} />
                  <span className="flex-1">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
