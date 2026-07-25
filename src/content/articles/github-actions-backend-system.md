## A workflow starts as an event

A push, pull request, schedule, or manual dispatch becomes an event that the workflow service evaluates against repository configuration. The result is a graph of jobs with dependencies, permissions, and execution constraints.

The YAML is only the declaration. Behind it, a scheduler must persist state, resolve dependencies, and decide which ready job can run next.

## Runners form the execution plane

Hosted and self-hosted runners poll for eligible work, receive short-lived credentials, and stream logs and status back to the control plane.

- Labels constrain where a job may run.
- Concurrency groups prevent conflicting executions.
- Timeouts reclaim stuck capacity.
- Ephemeral runners reduce state leakage between jobs.

## Artifacts connect isolated jobs

Jobs should not depend on a shared local filesystem because they may execute on different machines. Artifacts and caches provide explicit transfer boundaries.

Artifacts represent outputs that must be retained, while caches are reusable performance hints. Treating them differently keeps correctness independent from cache availability.
