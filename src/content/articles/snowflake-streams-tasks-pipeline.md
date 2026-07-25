## Streams describe what changed

A stream gives a consumer a change-tracking offset over a table. It is best understood as pipeline state, not as a permanent event archive. The downstream transaction advances that state when changes are consumed.

That model makes small incremental transformations possible without repeatedly scanning the full source table.

## Tasks make the dependency graph explicit

Use one task for one clear transformation boundary. A root task can run on a schedule or condition, while child tasks express dependencies between stages.

- Keep transformation SQL idempotent where practical.
- Separate ingestion, normalization, and serving-table updates.
- Log batch identifiers and row counts at each boundary.

## Design recovery before scheduling

A pipeline is dependable when an operator can answer what ran, what was consumed, and how to retry safely. Define those answers before choosing a frequent schedule.

For critical data, keep a durable raw source outside the stream so a failed or incorrect transformation can be replayed from a known boundary.
