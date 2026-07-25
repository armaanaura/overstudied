## Choose around the demo boundary

The useful question is not which framework is better. Ask what the demo must prove and how much product infrastructure it needs before a user can understand the idea.

A model playground with two endpoints has a different boundary from a multi-user application with permissions, saved projects, and an editorial interface.

## When FastAPI keeps the idea visible

FastAPI is a strong default when the backend mainly validates typed input, calls a service or model, and returns a response. Its small surface area makes request flow easy to inspect during an experiment.

- The frontend and backend are deployed independently.
- Most behavior lives in Python services rather than database-backed screens.
- Interactive API documentation is useful during development or a demo.

## When Django avoids rebuilding a product shell

Django earns its larger starting footprint when authentication, relational data, forms, permissions, and administration are already part of the demonstration. Those features are expensive to assemble repeatedly around a thin API.

Start with the smallest boundary you can defend. Moving to a larger framework later is often cheaper than hiding the original idea behind infrastructure it did not yet need.
