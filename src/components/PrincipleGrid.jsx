import React from "react";
import { Compass, ShieldCheck, Zap, Map } from "lucide-react";

export default function PrincipleGrid({ title, items, iconOffset = 0 }) {
  return (
    <div className="mt-12">
      <h3 className="mb-5 text-center text-xl font-semibold text-white glitch">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((principle, idx) => (
          <div
            key={principle.title}
            className="rounded-3xl border border-violet-500/10 bg-zinc-950/60 p-5 backdrop-blur-xs hover:border-violet-400/20 transition-all duration-300 eerie-shadow"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
              {(idx + iconOffset) % 4 === 0 ? (
                <Compass size={20} />
              ) : (idx + iconOffset) % 4 === 1 ? (
                <ShieldCheck size={20} />
              ) : (idx + iconOffset) % 4 === 2 ? (
                <Zap size={20} />
              ) : (
                <Map size={20} />
              )}
            </div>
            <h4 className="text-lg font-semibold text-white leading-snug">{principle.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{principle.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
