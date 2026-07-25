## A jump table is a set of powers of two

For every node, store its parent, its two-step ancestor, its four-step ancestor, and so on. Column `j` answers one question: where do I land after moving `2^j` edges upward?

Each larger jump is built from two smaller jumps. If `mid` is the `2^(j-1)` ancestor of a node, then the `2^j` ancestor is the `2^(j-1)` ancestor of `mid`.

```text
up[node][0] = parent[node]
for j in 1..LOG-1:
  mid = up[node][j - 1]
  up[node][j] = up[mid][j - 1]
```

## Read a distance through its binary bits

To find the kth ancestor, decompose `k` into powers of two. Every set bit selects one column from the jump table. A distance of 13 becomes jumps of 8, 4, and 1.

The same idea makes depth alignment in lowest-common-ancestor queries fast: lift the deeper node by exactly the depth difference before comparing ancestors.

## The LCA step that usually feels magical

Once both nodes have equal depth, inspect jumps from largest to smallest. Whenever the two proposed ancestors differ, take both jumps. This keeps both nodes below their lowest common ancestor while removing as much distance as possible.

After the loop, the nodes are distinct children of the answer, so either parent is the LCA.
