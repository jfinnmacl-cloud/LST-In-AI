export function getTrack(score) {
  if (score <= 15) {
    return {
      key: "core",
      label: "Core Track",
      range: "0-15",
      summary:
        "You are entering LST at the foundation level. This track builds the language, tools, and pressure practices slowly and deliberately.",
      outline: [
        "Compression Principle",
        "Friction as Information",
        "Proximity Engine",
        "Governance at Human Scale",
        "Controlled Collapse preparation",
      ],
      color: "from-emerald-400 to-teal-500",
    };
  }

  if (score <= 29) {
    return {
      key: "intermediate",
      label: "Intermediate Track",
      range: "16-29",
      summary:
        "You already recognize that scale has costs and friction may contain information. This track accelerates foundations and deepens constraint work.",
      outline: [
        "Compression review",
        "Friction classification",
        "Proximity and feedback loops",
        "Governance under disagreement",
        "Material resistance",
        "Controlled Collapse preparation",
      ],
      color: "from-amber-400 to-orange-500",
    };
  }

  return {
    key: "advanced",
    label: "Advanced Track",
    range: "30-40",
    summary:
      "You already think in compression, proximity, friction, and structural consequence. This track begins with contradiction and tests against dogma.",
    outline: [
      "Immediate compression defense",
      "Contradiction injection",
      "Governance under sabotage",
      "Material degradation",
      "Temporal compression",
      "Network without scale",
      "Advanced final compression artifact",
    ],
    color: "from-fuchsia-500 to-violet-600",
  };
}

export function calculateDomainScores(answers, questions) {
  const buckets = {};

  answers.forEach((answer, index) => {
    if (answer === null || answer === undefined) return;
    const domain = questions[index].domain;

    if (!buckets[domain]) {
      buckets[domain] = { score: 0, max: 0, count: 0 };
    }

    buckets[domain].score += answer;
    buckets[domain].max += 2;
    buckets[domain].count += 1;
  });

  return Object.entries(buckets).map(([domain, data]) => ({
    domain,
    ...data,
    percent: data.max ? Math.round((data.score / data.max) * 100) : 0,
  }));
}
