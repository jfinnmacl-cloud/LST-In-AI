import React from "react";

export default function Input({ label, value, onChange, type = "text", required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label} {required && <span className="text-violet-300">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none ring-violet-400/40 transition placeholder:text-zinc-600 focus:ring-4"
      />
    </div>
  );
}
