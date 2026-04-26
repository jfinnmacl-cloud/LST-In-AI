import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, CheckCircle2, Download } from "lucide-react";
import { getTrack, calculateDomainScores } from "../utils/track";
import { questions } from "../utils/questions";
import { saveStoredApplication, downloadJson, isValidEmail } from "../utils/storage";
import DomainScoreBars from "../components/DomainScoreBars";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

export default function ApplicationPage({ onNavigate, location }) {
  const [submitted, setSubmitted] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [error, setError] = useState("");

  const state = location?.state || {};
  const { score = 0, answers = [], domainScores = [] } = state;
  const track = getTrack(score);

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    systemMap: "",
    failureArchive: "",
    iterationLog: "",
    localPrototype: "",
    constraintLedger: "",
    affectedPeople: "",
    courseDifficulty: "",
    documentationConsent: "",
    requestedTrack: track.label,
    requestReason: "",
  });

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const required = [
    "name",
    "email",
    "systemMap",
    "failureArchive",
    "localPrototype",
    "constraintLedger",
    "affectedPeople",
    "courseDifficulty",
    "documentationConsent",
  ];

  const missing = required.filter((key) => String(form[key]).trim().length === 0);
  const valid = missing.length === 0 && isValidEmail(form.email);

  const buildPayload = () => ({
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    ...form,
    assignedTrack: track.label,
    score,
    answers,
    domainScores,
    submittedAt: new Date().toISOString(),
  });

  const review = (event) => {
    event.preventDefault();
    if (missing.length) {
      setError("Complete all required fields before review.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setReviewing(true);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!valid) return;

    const payload = buildPayload();
    saveStoredApplication(payload);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/15 text-emerald-300">
              <CheckCircle2 size={34} />
            </div>
            <h3 className="text-3xl font-semibold text-white">Application Submitted</h3>
              <p className="mx-auto mt-4 max-w-xl text-zinc-400 leading-relaxed">
              Your questionnaire and application are complete. A local intake record has been saved and can be exported from the archive.
            </p>
            <button
              type="button"
              onClick={() => downloadJson("lst-latest-application.json", buildPayload())}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 shadow-lg shadow-white/10"
            >
              <Download size={16} /> Export Latest
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (reviewing) {
    return (
      <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={submit}
            className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl space-y-5"
          >
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">Review Application</div>
              <h3 className="mt-2 text-3xl font-semibold text-white">Confirm before submission</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                This creates a browser-local intake record with your assessment profile and application responses.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Applicant", preview.name],
                ["Email", preview.email],
                ["Assigned track", preview.assignedTrack],
                ["Requested track", preview.requestedTrack],
                ["Score", `${preview.score}/40`],
                ["Consent", preview.documentationConsent],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</div>
                  <div className="mt-2 break-words text-sm font-semibold text-white">{value || "Not provided"}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
              <h4 className="mb-4 font-semibold text-white">Domain profile</h4>
              <DomainScoreBars domainScores={preview.domainScores} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setReviewing(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/5"
              >
                <RotateCcw size={16} /> Edit Responses
              </button>
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 shadow-lg shadow-white/10"
              >
                Submit Application <ArrowRight size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16 relative scanline">
      <div className="eerie-overlay" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 pb-8">
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={review}
          className="rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl space-y-5"
        >
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">Follow-up Application</div>
            <h3 className="mt-2 text-3xl font-semibold text-white">Apply for {track.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 max-w-2xl">
              Your questionnaire is complete. This application gathers the five LST field methods: system map, failure archive, iteration log, local prototype, and constraint ledger.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" value={form.name} onChange={(v) => update("name", v)} required />
            <Input label="Email" value={form.email} onChange={(v) => update("email", v)} type="email" required />
          </div>

          <Input label="Location / time zone" value={form.location} onChange={(v) => update("location", v)} />

          <Textarea
            label="System Mapping: What system, project, practice, or idea do you want to examine?"
            value={form.systemMap}
            onChange={(v) => update("systemMap", v)}
            required
          />

          <Textarea
            label="Failure Archive: What has already broken, failed, stalled, confused people, or required repair?"
            value={form.failureArchive}
            onChange={(v) => update("failureArchive", v)}
            required
          />

          <Textarea
            label="Iteration Log: What versions, attempts, drafts, or approaches have you already tried?"
            value={form.iterationLog}
            onChange={(v) => update("iterationLog", v)}
          />

          <Textarea
            label="Local Prototype: What is the smallest version you could test with 3 to 5 people?"
            value={form.localPrototype}
            onChange={(v) => update("localPrototype", v)}
            required
          />

          <Textarea
            label="Constraint Ledger: What constraints are already present: time, trust, materials, attention, distance, money, tools, or repair?"
            value={form.constraintLedger}
            onChange={(v) => update("constraintLedger", v)}
            required
          />

          <Textarea
            label="Who is affected by the system's decisions?"
            value={form.affectedPeople}
            onChange={(v) => update("affectedPeople", v)}
            required
          />

          <Textarea
            label="What would make this course difficult for you?"
            value={form.courseDifficulty}
            onChange={(v) => update("courseDifficulty", v)}
            required
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Are you willing to document failure within the cohort? *
            </label>
            <select
              value={form.documentationConsent}
              onChange={(e) => update("documentationConsent", e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none ring-violet-400/40 focus:ring-4 transition"
            >
              <option value="">Select one</option>
              <option value="yes-public">Yes, publicly within the cohort</option>
              <option value="yes-private">Yes, privately with instructor review</option>
              <option value="unsure">Unsure, I need boundaries clarified</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">Requested track</label>
              <select
                value={form.requestedTrack}
                onChange={(e) => update("requestedTrack", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none ring-violet-400/40 focus:ring-4 transition"
              >
                <option>Core Track</option>
                <option>Intermediate Track</option>
                <option>Advanced Track</option>
              </select>
            </div>

            <Input
              label="Reason for alternate track request"
              value={form.requestReason}
              onChange={(v) => update("requestReason", v)}
            />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 shadow-lg shadow-white/10"
          >
            Review Application <ArrowRight size={16} />
          </button>
          {error && <p className="text-sm text-amber-200">{error}</p>}
        </motion.form>
      </div>
    </div>
  );
}
