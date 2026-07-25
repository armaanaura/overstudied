## Separate orchestration from compute

The workflow service owns schedules, task dependencies, retries, and run state. Compute resources execute notebooks, Python packages, SQL, or other workloads without becoming the source of truth for orchestration.

This separation lets a run survive cluster replacement and gives operators one consistent place to inspect state.

## Make the task graph explicit

Each task should have a clear input, output, and retry boundary. Dependencies then describe the data or control flow rather than relying on timing assumptions.

- Use job clusters when isolation matters.
- Reuse compute only when startup cost justifies the coupling.
- Set retries according to whether an operation is idempotent.
- Pass small values as parameters and large results through durable storage.

## Operate through observable run state

Logs alone are not enough. Record task duration, retry count, input version, output location, and the compute used for each attempt.

Alerts should point to the failed boundary and preserve enough context for a safe rerun. The goal is not merely to know that a workflow failed, but to know what can be resumed without duplicating work.
