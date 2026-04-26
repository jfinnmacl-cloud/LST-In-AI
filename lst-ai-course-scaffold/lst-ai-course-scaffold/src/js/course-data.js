export const trackBands = [
  {
    key: 'core',
    name: 'Core Track',
    range: '20–43',
    min: 20,
    max: 43,
    summary: 'Foundational AI system mapping, safe personal workflows, prompt/context basics, and low-risk local governance.',
    workload: '3–5 hours/week'
  },
  {
    key: 'intermediate',
    name: 'Intermediate Track',
    range: '44–66',
    min: 44,
    max: 66,
    summary: 'Personal plus team/project workflows, evidence checks, review systems, governance protocols, and applied AI friction studies.',
    workload: '5–8 hours/week'
  },
  {
    key: 'advanced',
    name: 'Advanced Track',
    range: '67–80',
    min: 67,
    max: 80,
    summary: 'Nested AI ecosystems, multi-agent governance, audit trails, bounded deployment, degradation tests, and reusable repair artifacts.',
    workload: '8–12 hours/week'
  }
];

export const coursePhases = [
  {
    title: 'Semester 1: Discovery of Local AI Truth',
    weeks: '1–16',
    focus: 'AI systems reveal their truth when compressed, brought near, friction-mapped, and forced to show who or what governs the loop.'
  },
  {
    title: 'Mid-Year: Controlled AI System Collapse',
    weeks: '17–18',
    focus: 'A structured stress test that classifies the human-AI system as rigid, brittle, adaptive, or regenerative.'
  },
  {
    title: 'Semester 2: Constraint Reality and AI Governance',
    weeks: '19–33',
    focus: 'Useful AI must survive governance conflict, material limits, temporal pressure, externalities, and anti-scale design.'
  },
  {
    title: 'Final: Decompression Portfolio',
    weeks: '33',
    focus: 'A compressed, transferable, repairable AI artifact another person can understand, test, and maintain.'
  }
];

export const modules = [
  {
    number: 1,
    title: 'AI as Local System',
    weeks: '1–4',
    question: 'What is the smallest honest AI system?',
    lectures: [
      'AI Is Not Outside the System',
      'Nodes of an AI System',
      'Edges, Handoffs, and Hidden Dependency',
      'AI Baseline Compression'
    ],
    deliverables: ['AI Workflow Baseline Map', 'AI Node Inventory', 'Human-AI Edge Map', 'AI Compression Baseline Report']
  },
  {
    number: 2,
    title: 'Compression in AI',
    weeks: '5–8',
    question: 'What survives when the AI system is made smaller?',
    lectures: [
      'Prompt Compression',
      'Context Compression',
      'Model and Tool Compression',
      'Rebuild from AI Compression Failure'
    ],
    deliverables: ['Prompt Compression Ladder', 'Context Compression Report', 'Model/Tool Compression Test', 'AI Workflow v2']
  },
  {
    number: 3,
    title: 'Friction as Information in AI',
    weeks: '9–12',
    question: 'What does AI friction reveal about the system?',
    lectures: [
      'Mapping AI Friction',
      'Friction Elimination Test',
      'Smoothness Test for AI',
      'Adaptive Friction Design'
    ],
    deliverables: ['AI Friction Map', 'AI Friction Elimination Report', 'AI Smoothness Test', 'Adaptive AI Friction Design']
  },
  {
    number: 4,
    title: 'Proximity, Grounding, and Local Feedback',
    weeks: '13–16',
    question: 'What becomes knowable only when the AI loop is close?',
    lectures: [
      'The Local AI Loop',
      'Distance Injection',
      'Proximity Restoration',
      'Semester 1 Integration'
    ],
    deliverables: ['Local AI Loop Diagram', 'AI Distance Injection Log', 'Proximity Restoration Report', 'Mid-Year AI System Packet']
  },
  {
    number: 5,
    title: 'Governance in Human-AI Systems',
    weeks: '19–22',
    question: 'Who decides when AI participates in judgment?',
    lectures: [
      'Decision Archaeology for AI',
      'Human-in-the-Loop Is Not Governance',
      'Agent Disagreement and Conflict Resolution',
      'Governance Under Constraint'
    ],
    deliverables: ['AI Decision Archaeology Ledger', 'Meaningful Review Checklist', 'AI Conflict Resolution Protocol', 'AI Governance Stress Test']
  },
  {
    number: 6,
    title: 'Material Resistance, Data, and Infrastructure',
    weeks: '23–26',
    question: 'Where does AI abstraction fail because computation has weight?',
    lectures: [
      'Material Inventory of AI',
      'Data Proximity and Privacy',
      'Intentional Degradation',
      'Repair and Maintenance Protocols'
    ],
    deliverables: ['AI Material Inventory', 'AI Data Proximity Audit', 'AI Degradation Test Report', 'AI Repair and Maintenance Manual']
  },
  {
    number: 7,
    title: 'Time, Latency, Drift, and Recovery',
    weeks: '27–30',
    question: 'What happens when AI is too fast, too slow, or too stale?',
    lectures: [
      'Decision Speed Mapping for AI',
      'Temporal Compression',
      'Drift and Staleness',
      'Recovery Cost Analysis'
    ],
    deliverables: ['AI Decision Speed Map', 'AI Temporal Compression Report', 'Drift and Staleness Plan', 'AI Recovery Cost Ledger']
  },
  {
    number: 8,
    title: 'Anti-Scale, Local AI, and Ethical Deployment',
    weeks: '31–33',
    question: 'How do we build AI that connects without expanding beyond coherence?',
    lectures: [
      'Anti-Scale AI Design',
      'Ethical Deployment and Local Accountability',
      'Final Decompression'
    ],
    deliverables: ['AI Anti-Scale Design Brief', 'LST-AI Ethics Charter', 'Final LST-AI Decompression Portfolio']
  }
];

export const assessmentQuestions = [
  {
    id: 1,
    prompt: 'When you think about AI, you usually see it as:',
    options: [
      'A tool that helps people do tasks faster.',
      'A powerful assistant that needs careful prompting.',
      'A system component that changes workflows and decisions.',
      'A co-actor inside a local human-machine ecosystem.'
    ]
  },
  {
    id: 2,
    prompt: 'When an AI gives a wrong answer, your first instinct is to:',
    options: [
      'Try a better prompt.',
      'Ask the model again or use a different model.',
      'Ask what context, evidence, or review process was missing.',
      'Treat the error as system data revealing a loop, dependency, or governance failure.'
    ]
  },
  {
    id: 3,
    prompt: 'What does an AI hallucination usually mean to you?',
    options: [
      'The model made something up.',
      'The prompt or model was not good enough.',
      'The system lacked grounding or verification.',
      'The local loop allowed plausible output to outrun evidence.'
    ]
  },
  {
    id: 4,
    prompt: 'What is the best way to make an AI workflow trustworthy?',
    options: [
      'Use a better model.',
      'Write better prompts.',
      'Add evidence, review, and correction loops.',
      'Keep output close to local context, governed action, and visible repair.'
    ]
  },
  {
    id: 5,
    prompt: 'What does AI friction usually mean?',
    options: [
      'Something annoying that should be removed.',
      'A usability problem.',
      'A signal that the workflow needs diagnosis.',
      'Structural truth appearing at the boundary between model, human, task, and context.'
    ]
  },
  {
    id: 6,
    prompt: 'If an AI workflow works only with unlimited cloud access, unlimited context, and perfect connectivity, it is:',
    options: [
      'Normal modern AI.',
      'Useful but dependent.',
      'Untested under local constraint.',
      'Coordinated around abundance rather than coherent.'
    ]
  },
  {
    id: 7,
    prompt: 'What is prompt engineering closest to?',
    options: [
      'Asking clearly.',
      'Learning model tricks.',
      'Designing a compressed task boundary.',
      'Constructing a local governance and context interface.'
    ]
  },
  {
    id: 8,
    prompt: 'What should happen before AI output is acted on?',
    options: [
      'It should sound right.',
      'It should be reviewed if important.',
      'It should pass evidence and risk checks.',
      'It should enter a visible loop of review, accountability, escalation, and repair.'
    ]
  },
  {
    id: 9,
    prompt: 'What is the main danger of frictionless AI?',
    options: [
      'People may become lazy.',
      'It may make too many things easy.',
      'It may hide error, cost, privacy loss, and judgment decay.',
      'It may shift invisible burden to affected people, workers, environment, or future maintainers.'
    ]
  },
  {
    id: 10,
    prompt: 'What is the smallest meaningful AI system?',
    options: [
      'A prompt and response.',
      'A useful tool.',
      'A human-AI feedback loop.',
      'A governed local loop from need to output to action to consequence to repair.'
    ]
  },
  {
    id: 11,
    prompt: 'What makes local AI valuable?',
    options: [
      'It is private.',
      'It is fast and convenient.',
      'It keeps context and feedback close.',
      'It preserves proximity, constraint, accountability, and repair.'
    ]
  },
  {
    id: 12,
    prompt: 'What should happen when two AI agents disagree?',
    options: [
      'Pick the answer that sounds best.',
      'Ask a stronger model to decide.',
      'Compare evidence and route uncertainty.',
      'Use a visible governance protocol with authority, escalation, and rollback.'
    ]
  },
  {
    id: 13,
    prompt: 'How should AI memory be treated?',
    options: [
      'More memory is usually better.',
      'Memory is useful but can get messy.',
      'Memory should be curated, refreshed, and limited.',
      'Memory is a local system with decay, consent, priority, and repair requirements.'
    ]
  },
  {
    id: 14,
    prompt: 'What is automation debt?',
    options: [
      'The cost of buying AI tools.',
      'The time spent fixing automations.',
      'Hidden future work created by premature automation.',
      'The accumulated burden of opaque decisions, skill loss, repair delay, and trust damage.'
    ]
  },
  {
    id: 15,
    prompt: 'What makes an AI system ethical?',
    options: [
      'It helps people.',
      'It follows rules.',
      'It protects privacy and avoids obvious harm.',
      'It preserves agency, consent, accountability, transparency, repair, and exit.'
    ]
  },
  {
    id: 16,
    prompt: 'What should be measured in an AI workflow?',
    options: [
      'Speed and output quality.',
      'Time saved and user satisfaction.',
      'Accuracy, review burden, error type, and context quality.',
      'Local truth, hidden cost, governance failure, recovery time, and degradation under scale.'
    ]
  },
  {
    id: 17,
    prompt: 'What happens when AI is scaled too quickly?',
    options: [
      'More users benefit.',
      'More errors may appear.',
      'Context and governance become harder.',
      'Distance distributes amnesia through the system.'
    ]
  },
  {
    id: 18,
    prompt: 'What should an AI final project prove?',
    options: [
      'I know how to use AI tools.',
      'I can build a useful AI workflow.',
      'I can map, test, and repair a human-AI system.',
      'My AI system can break, reveal truth, regenerate, and remain locally accountable.'
    ]
  },
  {
    id: 19,
    prompt: 'What is your preferred relationship to AI?',
    options: [
      'Useful assistant.',
      'Creative partner.',
      'Governed collaborator.',
      'Bounded co-actor inside a visible local system.'
    ]
  },
  {
    id: 20,
    prompt: 'Why do you want to study LST in AI?',
    options: [
      'To use AI better.',
      'To improve my workflows.',
      'To understand AI as part of local systems.',
      'To design AI systems that remain truthful, constrained, governable, and repairable.'
    ]
  }
];

export const applicantFields = [
  { name: 'fullName', label: 'Full name', type: 'text', required: true },
  { name: 'preferredName', label: 'Preferred name', type: 'text', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  { name: 'phone', label: 'Phone number (optional)', type: 'tel', required: false },
  { name: 'timezone', label: 'Location and time zone', type: 'text', required: true },
  { name: 'ageConfirm', label: 'I am 18 or older', type: 'checkbox', required: true },
  { name: 'preferredTrack', label: 'Preferred track, if different from placement', type: 'select', required: false, options: ['', 'Core Track', 'Intermediate Track', 'Advanced Track'] },
  { name: 'availability', label: 'Availability for weekly sessions', type: 'textarea', required: true },
  { name: 'experience', label: 'Prior experience with AI tools, systems thinking, automation, coding, design, operations, education, research, governance, or community work', type: 'textarea', required: true },
  { name: 'currentTools', label: 'What AI tools or workflows do you currently use?', type: 'textarea', required: true },
  { name: 'studySystem', label: 'What AI system or local workflow might you study?', type: 'textarea', required: true },
  { name: 'technicalConstraints', label: 'What technical constraints may affect your participation?', type: 'textarea', required: false },
  { name: 'privacyBoundaries', label: 'What privacy, safety, or data boundaries do you need to protect?', type: 'textarea', required: true },
  { name: 'fieldDocs', label: 'I am willing to complete weekly field documentation', type: 'checkbox', required: true },
  { name: 'critique', label: 'I am willing to receive respectful critique of my AI system maps', type: 'checkbox', required: true },
  { name: 'sandboxOnly', label: 'I will avoid deploying autonomous agents outside approved sandbox conditions', type: 'checkbox', required: true },
  { name: 'educationOnly', label: 'I understand this course is educational and does not authorize high-stakes automated decisions', type: 'checkbox', required: true },
  { name: 'lowRisk', label: 'I understand all prototypes must be low-risk, reversible, and consent-aware', type: 'checkbox', required: true },
  { name: 'privacyAgreement', label: "I agree not to share another student's private data, prompts, outputs, or system details outside the course", type: 'checkbox', required: true },
  { name: 'signature', label: 'Digital signature and date', type: 'text', required: true }
];

export function getTrackForScore(score) {
  return trackBands.find((track) => score >= track.min && score <= track.max) || trackBands[0];
}
