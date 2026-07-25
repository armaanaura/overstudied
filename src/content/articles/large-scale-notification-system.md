## Accept intent before choosing a channel

Producers should submit a notification intent containing the recipient, template, priority, and business event. They should not need to know whether delivery will use email, push, SMS, or an in-product inbox.

Persisting that intent before fan-out gives the system a durable recovery boundary.

## Fan out with user preferences

A routing stage combines the intent with user preferences, consent, quiet hours, and channel availability. It then creates one delivery job per eligible channel.

- Deduplication keys prevent repeated business events from spamming users.
- Per-channel queues isolate provider failures.
- Rate limits protect both providers and recipients.
- Priority lanes keep urgent messages moving during large campaigns.

## Treat delivery as an observable state machine

Provider acceptance is not the same as user delivery. Track queued, attempted, accepted, delivered, bounced, and permanently failed states where the channel supports them.

Retries need bounded backoff and a terminal dead-letter path. Operators should be able to inspect one notification from its original intent through every delivery attempt.
