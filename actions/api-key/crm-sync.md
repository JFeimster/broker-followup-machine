# CRM Sync

## Purpose

Plan a simple API key sync for CRM updates.

## When to use

- A record update needs to be mirrored into a CRM.
- The operator controls the connection and key handling.

## Inputs

- Record identifier
- Stage or tag change
- Sync direction

## Outputs

- Sync note
- Field mapping reminder
- Review step

## Safety boundary

- Human review required before changes that trigger borrower-facing sends.
- Do not document sensitive data fields beyond what is necessary to plan the sync.

## Next implementation step

List the minimum fields first and delay any live wiring.
