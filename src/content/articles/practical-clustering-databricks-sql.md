## Clustering is about data skipping

A table layout is useful when it helps the engine avoid reading files. Clustering columns should therefore come from real selective filters, not simply from the columns that appear most often in a schema.

Liquid clustering lets the layout evolve without treating a fixed partition directory as a permanent contract. That is especially helpful when table size and query patterns change over time.

## Choose keys from workload evidence

Start with query history. Look for columns used repeatedly in selective equality or range predicates, then check whether those columns have enough variation to separate data meaningfully.

- Prefer columns that remove large portions of the table during common reads.
- Avoid collecting many weak keys in case one becomes useful later.
- Revisit the choice when a table's dominant workload changes.

## Treat maintenance as part of the design

Clustering does not remove the need to observe file sizes, write patterns, and pruning behavior. Record a baseline, make one layout change, and compare bytes scanned for representative queries.

The practical goal is not a perfectly organized table. It is a table whose maintenance cost is justified by predictable improvements in the workloads that matter.
