# Schemas

This folder contains static JSON Schema drafts for the Broker Follow-Up Machine utility layer.

## Purpose

- Define the shape of example payloads and review objects
- Keep the schema layer static and example-only
- Support consistent GPT output without introducing live integration code

## Files

- `lead-intake.schema.json`
- `workflow-request.schema.json`
- `template-request.schema.json`
- `safety-review.schema.json`
- `crm-stage-map.schema.json`
- `webhook-event.schema.json`

## Rules

- Use JSON Schema draft 2020-12
- Keep borrower data placeholder-only
- Include human review fields where relevant
- Include safety flags where relevant
