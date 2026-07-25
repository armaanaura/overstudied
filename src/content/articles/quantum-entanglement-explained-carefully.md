Entanglement describes a quantum state that cannot be written as independent states for each of its parts. The system has a complete state, but its individual qubits do not carry separate, predetermined descriptions of every measurement outcome.

## Start with a two-qubit state

Consider the Bell state:

```text
|Φ+⟩ = (|00⟩ + |11⟩) / √2
```

Measuring both qubits in the computational basis produces either `00` or `11`, each with equal probability. The outcomes are correlated even when the qubits are separated.

## Creating entanglement

A common circuit begins with two qubits in `|00⟩`. A Hadamard gate places the first qubit into a superposition, and a controlled-NOT gate correlates the second qubit with it.

```text
|00⟩ → (|00⟩ + |10⟩) / √2 → (|00⟩ + |11⟩) / √2
```

The resulting amplitudes describe the pair as one quantum system.

## Correlation is not communication

Entanglement does not let one observer send a controllable message faster than light. Each local measurement result is random. The correlation becomes visible only when the observers later compare their results through an ordinary classical channel.

This distinction matters: quantum theory predicts correlations stronger than a broad class of local hidden-variable explanations, but it still prevents faster-than-light signalling.

## Why entanglement is useful

Entanglement is a resource in several quantum protocols:

- Quantum teleportation transfers an unknown quantum state using entanglement and classical communication
- Superdense coding communicates two classical bits after sending one entangled qubit
- Quantum error-correcting codes distribute information across correlated physical qubits
- Some quantum algorithms use multipartite interference built from entangling gates

## A better mental model

Avoid imagining two particles carrying matching secret instructions. Treat the joint state as the object that quantum mechanics describes. Individual outcomes remain uncertain, while the structure of their correlations is precisely predictable.
