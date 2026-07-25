import type { StudyDomain } from "./types";

export const domains: StudyDomain[] = [
  {
    name: "System Design",
    slug: "system-design",
    description: "Architecture, distributed systems, data platforms, reliability, and production tradeoffs.",
    topics: ["Distributed Systems", "APIs", "Data Platforms", "Reliability"],
    articleCount: 9,
    lastUpdated: "2026-07-15",
  },
  {
    name: "Quantum Computing",
    slug: "quantum-computing",
    description: "Quantum mechanics, quantum information, algorithms, hardware, and the ideas behind computation.",
    topics: ["Qubits", "Quantum Algorithms", "Quantum Physics", "Hardware"],
    articleCount: 0,
    lastUpdated: "2026-07-25",
  },
  {
    name: "Psychology",
    slug: "psychology",
    description: "Learning, cognition, behavior, decision-making, and practical ideas from psychological research.",
    topics: ["Cognition", "Learning", "Behavior", "Decision-making"],
    articleCount: 0,
    lastUpdated: "2026-07-25",
  },
  {
    name: "Data Structures and Algorithms",
    slug: "dsa",
    description: "Algorithms and data structures taught through mental models, visuals, and implementation notes.",
    topics: ["Dynamic Programming", "Graphs", "Trees", "Complexity"],
    articleCount: 2,
    lastUpdated: "2026-07-16",
  },
];
