import React from "react";

export default function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}
