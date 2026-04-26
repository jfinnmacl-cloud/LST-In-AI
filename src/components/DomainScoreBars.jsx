import React from "react";

export default function DomainScoreBars({ domainScores }) {
  if (!domainScores?.length) return null;

  const sorted = [...domainScores].sort((a, b) => b.percent - a.percent);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];

  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl bg-emerald-500/10 p-3 text-sm text-emerald-100">
          <span className="font-semibold">Strongest domain:</span> {strongest.domain}
        </div>
        <div className="rounded-2xl bg-amber-500/10 p-3 text-sm text-amber-100">
          <span className="font-semibold">Needs pressure:</span> {weakest.domain}
        </div>
      </div>

      <div className="space-y-4">
        {domainScores.map((item) => (
          <div key={item.domain}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-zinc-300">{item.domain}</span>
              <span className="text-zinc-500">
                {item.score}/{item.max}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
