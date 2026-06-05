# Webhooks Catalog

## Purpose

Document inbound and event-driven Action planning.

## Use this when

- Another system should notify the GPT or its planning layer.
- The workflow depends on status changes or event payloads.

## Inputs

- Event type
- Payload shape
- Trigger rules

## Outputs

- Webhook planning note
- Event map
- Human review step

## Safety boundary

- No executable network code.
- Human review required for any sensitive state change.

## Next implementation step

Define the event contract before any implementation path is discussed.
