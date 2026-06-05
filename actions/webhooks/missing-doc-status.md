# Missing Doc Status

## Purpose

Describe a document status event that can trigger follow-up planning.

## When to use

- A document request changes state.
- A reminder or review task should be created.

## Inputs

- Record ID
- Missing item
- Status change

## Outputs

- Follow-up task
- Draft reminder
- Review note

## Safety boundary

- Human review required before any borrower-facing send.
- Do not include sensitive file contents in the plan.

## Next implementation step

Keep the event focused on status, not file data.
