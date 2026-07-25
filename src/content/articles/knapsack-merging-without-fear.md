## Start with the meaning of one state

Tree knapsack becomes manageable when every array entry has one precise sentence behind it. Let `dp[u][b]` mean the best value available inside the subtree of `u` after spending exactly `b` units of budget.

That definition tells us what a child contributes: another small table indexed by budget. Merging a child is therefore the same operation as combining two bounded knapsacks.

## Merge one child at a time

Keep the current table immutable during a merge. Write results into a fresh table, try every split of the available budget, and replace the old table only after the child is completely processed.

```text
for child in children[u]:
  next = copy(dp[u])
  for used in 0..budget:
    for given in 0..budget-used:
      next[used + given] = max(
        next[used + given],
        dp[u][used] + dp[child][given]
      )
  dp[u] = next
```

## A practical correctness checklist

Most bugs come from violating the state definition rather than from the recurrence itself. Before optimizing, verify the following invariants on tiny trees.

- Initialize impossible budgets explicitly instead of treating them as zero.
- Do not read values written earlier in the same child merge.
- Limit loops to the current subtree size when the budget represents selected nodes.
- Test leaves, a chain, and a node with several children separately.
