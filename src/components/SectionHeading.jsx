import React from "react";

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white leading-[1.1] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-zinc-400 md:text-lg max-w-2xl mx-auto">{text}</p>}
    </div>
  );
}
