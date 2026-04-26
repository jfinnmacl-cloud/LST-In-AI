import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["Principles", "/principles"],
    ["Curriculum", "/modules"],
    ["Collapse", "/collapse"],
    ["Assessment", "/questionnaire"],
    ["Archive", "/archive"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070a]/75 backdrop-blur-xl eerie-shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-5 md:py-4">
        <button onClick={() => onNavigate("/")} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500">
            <Sparkles size={20} />
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold tracking-wide text-white">Local Systems Theory</div>
            <div className="text-xs text-zinc-500">This will not stay stable.</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map(([label, path]) => (
            <button
              key={label}
              onClick={() => onNavigate(path)}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white min-h-[44px]"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => onNavigate("/questionnaire")}
            className="ml-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 min-h-[44px]"
          >
            Apply
          </button>
        </nav>

        <button
          className="rounded-2xl border border-white/10 p-2 md:hidden min-h-[44px] min-w-[44px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 overflow-hidden md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map(([label, path]) => (
                <button
                  key={label}
                  onClick={() => {
                    onNavigate(path);
                    setMenuOpen(false);
                  }}
                  className="w-full rounded-2xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/10 min-h-[48px]"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate("/questionnaire");
                  setMenuOpen(false);
                }}
                className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-100 min-h-[48px]"
              >
                Apply
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
