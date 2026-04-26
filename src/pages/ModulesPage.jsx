import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ModuleCard from "../components/ModuleCard";
import { modules } from "../utils/data";

export default function ModulesPage({ questionnaireComplete, applicationSubmitted }) {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16 relative scanline">
      <div className="eerie-overlay" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Curriculum"
          title="Public module map."
          text="This page shows descriptions only. Thesis access and coursework unlock after questionnaire, application, acceptance, and module completion."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
              className="hover:scale-[1.02] transition-transform duration-300"
            >
              <ModuleCard
                module={module}
                index={idx}
                questionnaireComplete={questionnaireComplete}
                applicationSubmitted={applicationSubmitted}
              />
            </motion.div>
          ))}
          {modules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
            >
              <ModuleCard
                module={module}
                index={idx}
                questionnaireComplete={questionnaireComplete}
                applicationSubmitted={applicationSubmitted}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-6 md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">
                Midyear Event
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Controlled Collapse</h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-300 max-w-xl">
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
                <div key={title} className="rounded-3xl border border-white/10 bg-black/20 p-5 shadow-lg shadow-black/20">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
