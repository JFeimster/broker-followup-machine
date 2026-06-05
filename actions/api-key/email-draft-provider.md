# Email Draft Provider

## Purpose

Plan a service that returns email drafts behind an API key.

## When to use

- A workflow needs a generated email draft.
- The operator wants a consistent format with a review step.

## Inputs

- Workflow context
- Draft request
- Tone

## Outputs

- Email draft
- Example structure
- Review note

## Safety boundary

- Draft only.
- Human review required before send.

## Next implementation step

Use this only after the no-auth template path is already defined.
