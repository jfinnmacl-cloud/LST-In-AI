import React from "react";

export default function Textarea({ label, value, onChange, required = false }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label} {required && <span className="text-violet-300">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full resize-y rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none ring-violet-400/40 transition placeholder:text-zinc-600 focus:ring-4"
      />
    </div>
  );
}
