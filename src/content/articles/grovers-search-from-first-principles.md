Grover's algorithm searches an unstructured space of `N` possibilities using roughly the square root of `N` oracle queries. Its advantage comes from repeatedly increasing the amplitude of states that satisfy a chosen condition.

## The search problem

Assume an oracle can recognize a correct answer but does not reveal it directly. A classical strategy may need to test a large fraction of all candidates. Grover's algorithm begins by creating an equal superposition over every candidate.

For `n` qubits, the initial state represents `N = 2^n` possibilities:

```text
|s⟩ = 1/√N Σx |x⟩
```

## Marking the answer

The oracle applies a phase of `-1` to each solution state while leaving the other basis states unchanged. This phase change is not itself a measurement, so the alternatives remain in superposition.

The marked amplitude is now different in sign, which allows later interference to distinguish it.

## Amplifying its amplitude

The diffusion operator reflects amplitudes around their average. After the oracle flips the marked state below the average, this reflection raises it above the others.

One Grover iteration consists of:

1. Apply the oracle
2. Apply the diffusion operator
3. Repeat the pair an appropriate number of times
4. Measure the register

Geometrically, each iteration rotates the state vector toward the subspace containing solutions.

## How many iterations?

For one solution among `N` candidates, the useful number of iterations is approximately:

```text
π√N / 4
```

Too many iterations rotate the state past the solution and reduce the success probability. Grover's algorithm is therefore not an unlimited loop; its stopping point is part of the algorithm.

## What the speedup means

Grover provides a quadratic query improvement, not an exponential one. It is most relevant when the problem can be expressed through a practical quantum oracle and no exploitable structure supports a faster specialized algorithm.

The core idea is amplitude amplification: mark useful states by phase, then use interference to make those states more likely to appear when measured.
