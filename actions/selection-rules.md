# Action Selection Rules

These rules help decide which Action path belongs to a workflow.

## Purpose

Choose the simplest path that solves the problem without introducing unnecessary auth or automation surface area.

## Decision order

1. Prefer no-auth if the output is static, local, or purely document-driven.
2. Use an API key if the Action needs a simple service-to-service request and the operator controls the key handling.
3. Use OAuth if the Action must act on a user-connected workspace or CRM account.
4. Use webhooks if the workflow depends on inbound events or status changes from another system.

## Inputs to check

- Does the workflow need to write data?
- Does it need a user connection?
- Is the data sensitive?
- Can the operator review the output before send?
- Can the workflow stay as a draft or reminder instead of a live sync?

## Outputs to produce

- One recommended auth path
- One fallback manual path
- One human review checkpoint
- One next implementation step

## Safety boundary

If the answer would require promise language, lender-specific wording, or sensitive handling, stop and route the draft through review.

## Next implementation step

Use these rules when filling in the catalog files under each auth folder so the documentation stays narrow and consistent.
