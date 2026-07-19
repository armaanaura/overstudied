import type { Article } from "./types";

export const articles: Article[] = [
  {
    title: "Knapsack merging without fear",
    excerpt:
      "A clean mental model for tree DP, budget states, and merging child subproblems without memorizing templates.",
    date: "2026-07-16",
    tags: ["DSA", "Dynamic Programming"],
    readTime: "8 min read",
    slug: "knapsack-merging-without-fear",
    domain: "dsa",
    content: [
      {
        heading: "Start with the meaning of one state",
        paragraphs: [
          "Tree knapsack becomes manageable when every array entry has one precise sentence behind it. Let dp[u][b] mean the best value available inside the subtree of u after spending exactly b units of budget.",
          "That definition tells us what a child contributes: another small table indexed by budget. Merging a child is therefore the same operation as combining two bounded knapsacks.",
        ],
      },
      {
        heading: "Merge one child at a time",
        paragraphs: [
          "Keep the current table immutable during a merge. Write results into a fresh table, try every split of the available budget, and replace the old table only after the child is completely processed.",
        ],
        code: {
          language: "text",
          code: `for child in children[u]:
  next = copy(dp[u])
  for used in 0..budget:
    for given in 0..budget-used:
      next[used + given] = max(
        next[used + given],
        dp[u][used] + dp[child][given]
      )
  dp[u] = next`,
        },
      },
      {
        heading: "A practical correctness checklist",
        paragraphs: [
          "Most bugs come from violating the state definition rather than from the recurrence itself. Before optimizing, verify the following invariants on tiny trees.",
        ],
        bullets: [
          "Initialize impossible budgets explicitly instead of treating them as zero.",
          "Do not read values written earlier in the same child merge.",
          "Limit loops to the current subtree size when the budget represents selected nodes.",
          "Test leaves, a chain, and a node with several children separately.",
        ],
      },
    ],
    type: "article",
  },
  {
    title: "FastAPI vs Django for interactive demos",
    excerpt:
      "How to choose a backend for project demos without building a full product before you need one.",
    date: "2026-07-15",
    tags: ["Backend", "Python"],
    readTime: "6 min read",
    slug: "fastapi-vs-django-interactive-demos",
    domain: "backend-systems",
    content: [
      {
        heading: "Choose around the demo boundary",
        paragraphs: [
          "The useful question is not which framework is better. Ask what the demo must prove and how much product infrastructure it needs before a user can understand the idea.",
          "A model playground with two endpoints has a different boundary from a multi-user application with permissions, saved projects, and an editorial interface.",
        ],
      },
      {
        heading: "When FastAPI keeps the idea visible",
        paragraphs: [
          "FastAPI is a strong default when the backend mainly validates typed input, calls a service or model, and returns a response. Its small surface area makes request flow easy to inspect during an experiment.",
        ],
        bullets: [
          "The frontend and backend are deployed independently.",
          "Most behavior lives in Python services rather than database-backed screens.",
          "Interactive API documentation is useful during development or a demo.",
        ],
      },
      {
        heading: "When Django avoids rebuilding a product shell",
        paragraphs: [
          "Django earns its larger starting footprint when authentication, relational data, forms, permissions, and administration are already part of the demonstration. Those features are expensive to assemble repeatedly around a thin API.",
          "Start with the smallest boundary you can defend. Moving to a larger framework later is often cheaper than hiding the original idea behind infrastructure it did not yet need.",
        ],
      },
    ],
    type: "article",
  },
  {
    title: "Binary lifting finally visualized",
    excerpt:
      "Jump tables, kth ancestors, and LCA explained with the intuition first and the template second.",
    date: "2026-07-14",
    tags: ["Graphs", "DSA"],
    readTime: "10 min read",
    slug: "binary-lifting-finally-visualized",
    domain: "dsa",
    image: {
      src: "/images/articles/binary-lifting-finally-visualized.png",
      alt: "Visualization of a binary lifting jump table",
    },
    content: [
      {
        heading: "A jump table is a set of powers of two",
        paragraphs: [
          "For every node, store its parent, its two-step ancestor, its four-step ancestor, and so on. Column j answers one question: where do I land after moving 2^j edges upward?",
          "Each larger jump is built from two smaller jumps. If mid is the 2^(j-1) ancestor of a node, then the 2^j ancestor is the 2^(j-1) ancestor of mid.",
        ],
        code: {
          language: "text",
          code: `up[node][0] = parent[node]
for j in 1..LOG-1:
  mid = up[node][j - 1]
  up[node][j] = up[mid][j - 1]`,
        },
      },
      {
        heading: "Read a distance through its binary bits",
        paragraphs: [
          "To find the kth ancestor, decompose k into powers of two. Every set bit selects one column from the jump table. A distance of 13 becomes jumps of 8, 4, and 1.",
          "The same idea makes depth alignment in lowest-common-ancestor queries fast: lift the deeper node by exactly the depth difference before comparing ancestors.",
        ],
      },
      {
        heading: "The LCA step that usually feels magical",
        paragraphs: [
          "Once both nodes have equal depth, inspect jumps from largest to smallest. Whenever the two proposed ancestors differ, take both jumps. This keeps both nodes below their lowest common ancestor while removing as much distance as possible.",
          "After the loop, the nodes are distinct children of the answer, so either parent is the LCA.",
        ],
      },
    ],
    type: "article",
  },
  {
    title: "Practical clustering in Databricks SQL",
    excerpt:
      "How liquid clustering changes table maintenance, query pruning, and the way you reason about layout.",
    date: "2026-07-11",
    tags: ["Databricks", "Lakehouse"],
    readTime: "9 min read",
    slug: "practical-clustering-databricks-sql",
    domain: "databricks",
    content: [
      {
        heading: "Clustering is about data skipping",
        paragraphs: [
          "A table layout is useful when it helps the engine avoid reading files. Clustering columns should therefore come from real selective filters, not simply from the columns that appear most often in a schema.",
          "Liquid clustering lets the layout evolve without treating a fixed partition directory as a permanent contract. That is especially helpful when table size and query patterns change over time.",
        ],
      },
      {
        heading: "Choose keys from workload evidence",
        paragraphs: [
          "Start with query history. Look for columns used repeatedly in selective equality or range predicates, then check whether those columns have enough variation to separate data meaningfully.",
        ],
        bullets: [
          "Prefer columns that remove large portions of the table during common reads.",
          "Avoid collecting many weak keys in case one becomes useful later.",
          "Revisit the choice when a table's dominant workload changes.",
        ],
      },
      {
        heading: "Treat maintenance as part of the design",
        paragraphs: [
          "Clustering does not remove the need to observe file sizes, write patterns, and pruning behavior. Record a baseline, make one layout change, and compare bytes scanned for representative queries.",
          "The practical goal is not a perfectly organized table. It is a table whose maintenance cost is justified by predictable improvements in the workloads that matter.",
        ],
      },
    ],
    type: "article",
  },
  {
    title: "Snowflake streams and tasks as a data pipeline",
    excerpt:
      "A small, dependable pattern for incremental processing with clear scheduling and recovery boundaries.",
    date: "2026-07-09",
    tags: ["Snowflake", "Data Engineering"],
    readTime: "7 min read",
    slug: "snowflake-streams-tasks-pipeline",
    domain: "snowflake",
    content: [
      {
        heading: "Streams describe what changed",
        paragraphs: [
          "A stream gives a consumer a change-tracking offset over a table. It is best understood as pipeline state, not as a permanent event archive. The downstream transaction advances that state when changes are consumed.",
          "That model makes small incremental transformations possible without repeatedly scanning the full source table.",
        ],
      },
      {
        heading: "Tasks make the dependency graph explicit",
        paragraphs: [
          "Use one task for one clear transformation boundary. A root task can run on a schedule or condition, while child tasks express dependencies between stages.",
        ],
        bullets: [
          "Keep transformation SQL idempotent where practical.",
          "Separate ingestion, normalization, and serving-table updates.",
          "Log batch identifiers and row counts at each boundary.",
        ],
      },
      {
        heading: "Design recovery before scheduling",
        paragraphs: [
          "A pipeline is dependable when an operator can answer what ran, what was consumed, and how to retry safely. Define those answers before choosing a frequent schedule.",
          "For critical data, keep a durable raw source outside the stream so a failed or incorrect transformation can be replayed from a known boundary.",
        ],
      },
    ],
    type: "article",
  },
  {
    title: "Feature stores without the mystery",
    excerpt:
      "Online and offline features, point-in-time correctness, and the minimum infrastructure a team actually needs.",
    date: "2026-07-06",
    tags: ["MLOps", "Features"],
    readTime: "11 min read",
    slug: "feature-stores-without-mystery",
    domain: "mlops",
    content: [
      {
        heading: "A feature store connects two serving paths",
        paragraphs: [
          "Training needs large historical datasets, while online inference may need the latest values in milliseconds. A feature platform coordinates definitions and delivery across those two paths.",
          "The valuable part is consistency: a feature should have the same meaning whether it is materialized for training, batch scoring, or an online request.",
        ],
      },
      {
        heading: "Point-in-time correctness is the hard requirement",
        paragraphs: [
          "Historical training rows must only see feature values that were available at the prediction timestamp. Joining every entity to today's latest value leaks future information and produces misleading evaluation results.",
          "Store event timestamps, preserve feature history, and make point-in-time joins a tested part of the data contract.",
        ],
      },
      {
        heading: "Adopt the smallest useful platform",
        paragraphs: [
          "A team does not need an online database, registry, orchestration layer, and monitoring suite on day one. Start with reusable feature definitions and correct historical datasets, then add online materialization when a real latency requirement appears.",
        ],
        bullets: [
          "Name an owner for each feature set.",
          "Version definitions that change meaning.",
          "Measure freshness and null rates before adding more infrastructure.",
        ],
      },
    ],
    type: "article",
  },
  {
    title: "Building reliable tool-calling agents",
    excerpt:
      "A grounded loop for tool selection, error recovery, and keeping agent behavior observable in production.",
    date: "2026-07-03",
    tags: ["AI Engineering", "Agents"],
    readTime: "12 min read",
    slug: "reliable-tool-calling-agents",
    domain: "ai-engineering",
    content: [
      {
        heading: "Treat the agent as a controlled loop",
        paragraphs: [
          "A reliable agent alternates between deciding, acting, observing, and deciding again. Each step should have an explicit budget and a clear terminal condition so a recoverable tool error does not become an endless conversation with the same failure.",
          "The model can remain flexible while the surrounding loop enforces limits, permissions, and traceability.",
        ],
      },
      {
        heading: "Make tool contracts boring",
        paragraphs: [
          "Tools are easier to select when their names, descriptions, parameters, and error messages are unambiguous. Prefer a few narrow operations over one tool with many implicit modes.",
        ],
        bullets: [
          "Validate arguments before the external action begins.",
          "Return structured errors that distinguish retryable and terminal failures.",
          "Require confirmation for actions with material external impact.",
          "Keep observations concise enough to fit in the next decision step.",
        ],
      },
      {
        heading: "Observability is part of agent quality",
        paragraphs: [
          "Record the user goal, selected tool, validated arguments, result category, latency, and final outcome. These traces reveal whether failures come from reasoning, tool design, permissions, or unreliable dependencies.",
          "Evaluate complete trajectories rather than only the final answer. A successful result reached through unnecessary or risky actions is still a system defect worth fixing.",
        ],
      },
    ],
    type: "article",
  },
];
