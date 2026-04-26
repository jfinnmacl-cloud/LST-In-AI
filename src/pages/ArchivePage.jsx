import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { readStoredApplications, downloadJson } from "../utils/storage";

export default function ArchivePage() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    setApplications(readStoredApplications());
  }, []);

  if (!applications.length) {
    return (
      <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16 relative">
        <div className="eerie-overlay" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">
              After Acceptance
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl mb-6">
              Application Archive
            </h2>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-400 backdrop-blur">
              No saved applications yet. Completed submissions are stored in this browser until a backend is connected.
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Core", "Full foundation sequence with guided templates and instructor checkpoints."],
                ["Intermediate", "Accelerated foundations with deeper constraint and analysis work."],
                ["Advanced", "Contradiction prompts, peer review, boundary tests, and synthesis work."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-black/20 p-5 backdrop-blur">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16 relative">
        <div className="eerie-overlay" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Saved Applications</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">Browser-local intake archive for handoff or backend import.</p>
            </div>
            <button
              type="button"
              onClick={() => downloadJson("lst-applications.json", applications)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 shadow-lg shadow-white/10"
            >
              <Download size={16} /> Export All
            </button>
          </div>

          <div className="grid gap-3">
            {applications.slice(0, 5).map((app) => (
              <motion.article
                key={app.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4 backdrop-blur hover:border-violet-400/30 transition"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{app.name}</h4>
                    <p className="mt-1 text-sm text-zinc-500">
                      {app.assignedTrack} · {app.score}/40 · {new Date(app.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => downloadJson(`lst-application-${app.id}.json`, app)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-white/10"
                  >
                    <FileText size={14} /> Export
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
