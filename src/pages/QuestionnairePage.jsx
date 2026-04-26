import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Eye, Brain, Zap, AlertTriangle } from "lucide-react";
import { questions } from "../utils/questions";
import { getTrack, calculateDomainScores } from "../utils/track";
import DomainScoreBars from "../components/DomainScoreBars";

export default function QuestionnairePage({ onComplete, onNavigate }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [disturbance, setDisturbance] = useState(0);

  const score = useMemo(
    () => answers.reduce((sum, answer) => sum + (answer ?? 0), 0),
    [answers]
  );
  const domainScores = useMemo(() => calculateDomainScores(answers, questions), [answers]);
  const track = getTrack(score);
  const answeredCount = answers.filter((x) => x !== null).length;
  const progress = Math.round((answeredCount / questions.length) * 100);
  const answered = answers[current] !== null;
  const complete = answers.every((x) => x !== null);

  useEffect(() => {
    setDisturbance(progress / 100);
  }, [progress]);

  const choose = (value) => {
    const next = [...answers];
    next[current] = value;
    setAnswers(next);
  };

  const next = () => {
    if (!answered) return;
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      return;
    }
    if (complete) {
      setShowResult(true);
    }
  };

  const previous = () => {
    setCurrent(Math.max(0, current - 1));
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16 relative">
        <div className="eerie-overlay" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 pb-24 md:pb-16">
          <ResultPanel
            score={score}
            track={track}
            answers={answers}
            domainScores={domainScores}
            onComplete={onComplete}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div
      className="min-h-screen bg-[#07070a] text-zinc-100 py-12 md:py-16 relative scanline"
      style={{
        background: `radial-gradient(ellipse at 50% ${30 + disturbance * 40}%, 
          rgba(139, 92, ${246 - disturbance * 100}, ${0.02 + disturbance * 0.03}), 
          transparent 60%), #07070a`
      }}
    >
      <div className="eerie-overlay" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 pb-24 md:pb-16">

        {/* Psychological pressure indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 flex items-center justify-between text-xs"
        >
          <div className="flex items-center gap-2 text-violet-300/60">
            <Eye size={14} className={disturbance > 0.5 ? "text-red-400/60 animate-pulse" : ""} />
            <span className="uppercase tracking-[0.3em]">
              {disturbance > 0.7 ? "SYSTEM WATCHING" : 
               disturbance > 0.5 ? "Patterns Emerging" : 
               disturbance > 0.3 ? "Assessment Active" : "Initializing..."}
            </span>
          </div>
          <div className="text-zinc-600 font-mono">
            {String(current + 1).padStart(2, '0')}/{String(questions.length).padStart(2, '0')}
          </div>
        </motion.div>

        {/* Main question card - twisted but readable */}
        <motion.div
          className="border rounded-[2rem] p-5 md:p-8 backdrop-blur-xl"
          style={{
            borderColor: `rgba(139, 92, ${246 - disturbance * 100}, ${0.1 + disturbance * 0.2})`,
            backgroundColor: `rgba(9, 9, 11, ${0.7 + disturbance * 0.2})`,
            boxShadow: `0 0 ${20 + disturbance * 40}px rgba(139, 92, 246, ${0.05 + disturbance * 0.1})`
          }}
        >
          {/* Progress bar - disturbingly alive */}
          <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-zinc-900/50">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, 
                  rgb(${139 - disturbance * 50}, ${92 - disturbance * 50}, ${246 - disturbance * 100}), 
                  rgb(${246 - disturbance * 100}, ${92 - disturbance * 50}, ${139 - disturbance * 50}))`,
                width: `${progress}%`
              }}
              animate={{
                opacity: disturbance > 0.6 ? [1, 0.7, 1] : [1],
              }}
              transition={{ duration: 2, repeat: disturbance > 0.6 ? Infinity : 0 }}
            />
          </div>

          {/* Question header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="text-xs uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `rgba(139, 92, ${246 - disturbance * 100}, 0.1)`,
                  color: disturbance > 0.6 ? `rgba(252, 165, 165, 0.8)` : `rgba(196, 181, 253, 0.8)`
                }}
              >
                {q.domain}
              </div>
              {disturbance > 0.8 && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <AlertTriangle size={14} className="text-red-400/60" />
                </motion.div>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.h4
                key={current}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-semibold leading-relaxed text-white"
                style={{
                  textShadow: disturbance > 0.7 ? "0 0 30px rgba(139, 92, 246, 0.3)" : "none"
                }}
              >
                {q.text}
              </motion.h4>
            </AnimatePresence>
          </div>

          {/* Answer options - twisted but clear */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const isSelected = answers[current] === idx;
              return (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => choose(idx)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group w-full flex items-start gap-4 p-4 md:p-5 rounded-2xl text-left transition-all duration-300 ${
                    isSelected
                      ? "border-violet-400 bg-violet-500/10 text-white shadow-lg"
                      : "border-zinc-800 bg-zinc-900/30 text-zinc-300 hover:border-violet-400/50 hover:bg-zinc-900/50"
                  }`}
                  style={{
                    borderColor: isSelected ? 
                      `rgba(139, 92, ${246 - disturbance * 100}, 0.5)` : undefined,
                    boxShadow: isSelected ? 
                      `0 0 20px rgba(139, 92, ${246 - disturbance * 100}, 0.15)` : undefined
                  }}
                >
                  <span
                    className={`flex items-center justify-center h-8 w-8 shrink-0 rounded-full border text-sm font-semibold transition-all ${
                      isSelected
                        ? "border-violet-400 bg-violet-500/20 text-violet-300"
                        : "border-zinc-700 bg-zinc-800 text-zinc-500 group-hover:border-violet-400/50"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed flex-1 text-base md:text-lg">
                    {option}
                  </span>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-violet-400"
                    >
                      <CheckCircle2 size={20} />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="mt-6 flex gap-3 sticky bottom-4 md:static">
          <button
            type="button"
            onClick={previous}
            disabled={current === 0}
            className="flex-1 rounded-2xl border border-zinc-700 px-5 py-4 text-base font-semibold text-zinc-400 transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-40 min-h-[48px]"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={next}
            disabled={!answered || (current === questions.length - 1 && !complete)}
            className={`flex flex-[2] items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold transition min-h-[48px] ${
              disturbance > 0.7
                ? "bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30"
                : "bg-white text-zinc-950 hover:bg-zinc-100"
            } disabled:cursor-not-allowed disabled:opacity-40 shadow-lg`}
          >
            {current === questions.length - 1 ? "Reveal My Track" : "Continue"}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </button>
        </div>

        {/* Disturbing status messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-xs text-zinc-600 font-mono"
        >
          {disturbance < 0.3 && "Answer honestly. The system is recording..."}
          {disturbance >= 0.3 && disturbance < 0.6 && "Your psychological patterns are being mapped."}
          {disturbance >= 0.6 && disturbance < 0.8 && "The system sees through your choices..."}
          {disturbance >= 0.8 && "Your mind is becoming transparent to the system."}
        </motion.div>
      </div>
    </div>
  );
}

function ResultPanel({ score, track, answers, domainScores, onComplete, onNavigate }) {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <motion.div
      className="border rounded-[2rem] p-5 md:p-8 backdrop-blur-xl"
      style={{
        borderColor: "rgba(139, 92, 246, 0.2)",
        backgroundColor: "rgba(9, 9, 11, 0.7)"
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {!showApplication ? (
        <>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500"
                style={{
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)"
                }}
              />
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">Assessment Complete</div>
                <h3 className="text-3xl font-semibold text-white">Track Assigned</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="rounded-2xl border p-4" style={{ borderColor: "rgba(139, 92, 246, 0.1)", backgroundColor: "rgba(24, 24, 27, 0.5)" }}>
                <div className="text-sm text-zinc-500">Score</div>
                <div className="mt-1 text-2xl font-semibold text-white">{score}/40</div>
              </div>
              <div className="rounded-2xl border p-4" style={{ borderColor: "rgba(139, 92, 246, 0.1)", backgroundColor: "rgba(24, 24, 27, 0.5)" }}>
                <div className="text-sm text-zinc-500">Status</div>
                <div className="mt-1 text-2xl font-semibold text-white">Ready</div>
              </div>
            </div>

            <DomainScoreBars domainScores={domainScores} />
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            type="button"
            onClick={() => setShowApplication(true)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white transition hover:bg-violet-500/20"
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.15)",
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.2)"
            }}
          >
            Continue to Application <ArrowRight size={18} />
          </motion.button>
        </>
      ) : (
        <ApplicationForm
          score={score}
          answers={answers}
          domainScores={domainScores}
          onComplete={onComplete}
        />
      )}
    </motion.div>
  );
}

function ApplicationForm({ score, answers, domainScores, onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold text-white">Preparing Application...</h3>
      <p className="text-sm text-zinc-400">The system is processing your psychological profile...</p>
      <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
        />
      </div>
    </motion.div>
  );
}
