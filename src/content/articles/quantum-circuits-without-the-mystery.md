## A qubit stores amplitudes, not two classical values

A classical bit is observed as either zero or one. A qubit is described by two amplitudes whose squared magnitudes determine the probabilities of those outcomes when the qubit is measured.

The amplitudes can reinforce or cancel one another. That interference—not simply being in two states at once—is the useful resource quantum circuits are designed to control.

## Gates reshape the state

Quantum gates are reversible transformations. A single-qubit gate can rotate amplitudes, while a controlled gate can make the evolution of one qubit depend on another.

- The X gate exchanges the zero and one amplitudes.
- The H gate creates or removes an equal superposition.
- Controlled gates connect qubits and can produce entanglement.
- Gate order matters because quantum operations do not always commute.

## Read the circuit from left to right

Each horizontal wire tracks one qubit through time. Apply gates column by column, update the joint state, and postpone measurement until the circuit explicitly requests it.

A circuit diagram describes one execution recipe. To estimate output probabilities, the same circuit must usually be run many times and the measurement results counted.
