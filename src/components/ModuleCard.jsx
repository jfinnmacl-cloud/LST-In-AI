import React, { useState } from "react";
import { ChevronDown, ChevronUp, Lock } from "lucide-react";

export default function ModuleCard({ module, index, questionnaireComplete, applicationSubmitted }) {
  const [open, setOpen] = useState(false);
  const thesisAvailable = applicationSubmitted || (questionnaireComplete && index === 0);

  return (
    <div className="rounded-3xl border border-violet-500/10 bg-zinc-950/60 p-5 shadow-2xl shadow-black/30 backdrop-blur eerie-shadow hover:border-violet-400/20 transition-all duration-300">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            {module.weeks}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white">{module.title}</h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <p className="mb-3 text-sm font-medium text-violet-200 leading-relaxed">{module.coreQuestion}</p>
      <p className="text-sm leading-relaxed text-zinc-400">{module.description}</p>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs text-zinc-300">
        <span className="font-semibold text-zinc-100">Expected outcome:</span> {module.expectedOutcome}
      </div>

      <button
        type="button"
        onClick={() => thesisAvailable && setOpen(!open)}
        disabled={!thesisAvailable}
        className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          thesisAvailable
            ? "bg-white text-zinc-950 hover:bg-cyan-100"
            : "cursor-not-allowed border border-white/10 bg-white/5 text-zinc-500"
        }`}
      >
        {thesisAvailable ? (
          <>
            {open ? "Hide Thesis" : "Show Thesis"} {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </>
        ) : (
          <>
            <Lock size={15} /> {questionnaireComplete ? "Submit application to unlock" : module.unlocks}
          </>
        )}
      </button>

      {open && thesisAvailable && (
        <div className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4 text-sm leading-6 text-violet-100">
          {module.thesis}
        </div>
      )}
    </div>
  );
}
