# Actions Safety

This file defines the safety boundary for the Actions planning layer.

## Purpose

Keep planning docs useful for operators while preventing the docs from drifting into borrower-facing promises or unsafe automation assumptions.

## Use this when

- Drafting a new Action category
- Reviewing a proposed integration
- Deciding whether a workflow should stay manual

## Required review points

- Human review required before lender-specific statements
- Human review required before underwriting-related messages
- Human review required before decline-related messages
- Human review required before sensitive document handling
- Human review required before borrower-facing claims

## Restricted language to avoid

- approval
- qualification
- eligibility
- rate
- term
- guarantee

## Safer phrasing

- human review required
- draft only
- broker should verify
- operator-controlled send
- no automated sensitive messages

## Next implementation step

Apply these rules to every file under `none/`, `api-key/`, `oauth/`, `webhooks/`, and `review/` before adding any schemas or examples.
