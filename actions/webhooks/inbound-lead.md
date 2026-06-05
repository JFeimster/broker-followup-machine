# Inbound Lead

## Purpose

Describe an inbound lead event that could trigger a draft or review task.

## When to use

- A new lead arrives from an external system.
- The workflow needs a first-touch draft.

## Inputs

- Lead source
- Contact record
- Trigger timestamp

## Outputs

- Draft task
- Review reminder
- Workflow start note

## Safety boundary

- Human review required before borrower-facing output.
- No promise language.

## Next implementation step

Keep the payload minimal and reviewable.
