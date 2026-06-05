# SMS Draft Provider

## Purpose

Plan a service that returns SMS drafts behind an API key.

## When to use

- A workflow needs a short message draft.
- The operator wants the message to stay reviewable.

## Inputs

- Workflow context
- Draft request
- Review requirement

## Outputs

- SMS draft
- Length note
- Safety note

## Safety boundary

- Do not auto-send sensitive messages.
- Broker should verify the final wording.

## Next implementation step

Keep the provider narrow and draft-only.
