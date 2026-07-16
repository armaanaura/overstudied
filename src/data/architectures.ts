import type { Architecture } from "./types";

export const architectures: Architecture[] = [
  {
    title: "YouTube system design: from upload to playback",
    excerpt:
      "Trace video ingestion, transcoding, storage, discovery, and global delivery as one connected system.",
    date: "2026-07-13",
    tags: ["Video", "Distributed Systems"],
    readTime: "18 min read",
    slug: "youtube-system-design",
    systemsCovered: ["Upload pipeline", "Transcoding", "CDN", "Metadata"],
    complexity: "Advanced",
    type: "architecture",
  },
  {
    title: "GitHub Actions as a backend system",
    excerpt:
      "Reusable workflows, artifacts, variables, and why pipeline design is closer to architecture than YAML.",
    date: "2026-07-12",
    tags: ["CI/CD", "GitHub Actions"],
    readTime: "14 min read",
    slug: "github-actions-backend-system",
    systemsCovered: ["Scheduler", "Runners", "Artifacts", "Events"],
    complexity: "Intermediate",
    type: "architecture",
  },
  {
    title: "Databricks workflow architecture at scale",
    excerpt:
      "Jobs, clusters, task graphs, retries, and observability for dependable multi-team data workflows.",
    date: "2026-07-10",
    tags: ["Databricks", "Workflows"],
    readTime: "16 min read",
    slug: "databricks-workflow-architecture",
    systemsCovered: ["Job orchestration", "Compute", "Retries", "Observability"],
    complexity: "Advanced",
    type: "architecture",
  },
  {
    title: "A large-scale notification system",
    excerpt:
      "Model fan-out, preferences, delivery channels, retries, and rate limits without losing messages or users' trust.",
    date: "2026-07-08",
    tags: ["Backend", "Messaging"],
    readTime: "17 min read",
    slug: "large-scale-notification-system",
    systemsCovered: ["Event bus", "Fan-out", "Providers", "Preferences"],
    complexity: "Advanced",
    type: "architecture",
  },
];
