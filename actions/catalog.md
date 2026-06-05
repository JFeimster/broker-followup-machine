# Actions Catalog

This is the planning index for the Actions layer.

## Purpose

Keep each integration path separated by auth type and by use case so the team can reason about implementation without mixing docs, prompts, and live code.

## When to use it

- You need to decide whether a workflow needs no-auth, API key, OAuth, or webhook support.
- You want to map a GPT output into a future Action without building the integration yet.
- You need a checklist for what to document before a live integration is approved.

## Inputs

- Workflow name
- Intended output
- Auth model
- Data sensitivity
- Human review requirement

## Outputs

- A categorized Action note
- The narrowest integration path
- Safety and review checkpoints

## Safety boundary

- Human review required before lender-specific statements, underwriting-related messages, decline-related messages, sensitive document handling, or borrower-facing claims.
- Do not include approval, qualification, eligibility, rate, term, or guarantee language except in restricted-language lists that clearly mark the terms to avoid.

## Next implementation step

Start with the `none/` catalog, then move to `api-key/`, `oauth/`, and `webhooks/` only when the use case is still worth building after review.
