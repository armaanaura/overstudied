## Treat the agent as a controlled loop

A reliable agent alternates between deciding, acting, observing, and deciding again. Each step should have an explicit budget and a clear terminal condition so a recoverable tool error does not become an endless conversation with the same failure.

The model can remain flexible while the surrounding loop enforces limits, permissions, and traceability.

## Make tool contracts boring

Tools are easier to select when their names, descriptions, parameters, and error messages are unambiguous. Prefer a few narrow operations over one tool with many implicit modes.

- Validate arguments before the external action begins.
- Return structured errors that distinguish retryable and terminal failures.
- Require confirmation for actions with material external impact.
- Keep observations concise enough to fit in the next decision step.

## Observability is part of agent quality

Record the user goal, selected tool, validated arguments, result category, latency, and final outcome. These traces reveal whether failures come from reasoning, tool design, permissions, or unreliable dependencies.

Evaluate complete trajectories rather than only the final answer. A successful result reached through unnecessary or risky actions is still a system defect worth fixing.
