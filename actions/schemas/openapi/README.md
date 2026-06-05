# OpenAPI Drafts

Use this folder for static OpenAPI 3.1.0 drafts only.

## Files

- `broker-followup-machine.openapi.yaml`
- `lead-intake.openapi.yaml`
- `workflow-builder.openapi.yaml`
- `template-generator.openapi.yaml`
- `safety-review.openapi.yaml`

## Safety boundary

- Do not add executable API code
- Do not store secrets
- Keep the drafts example-only and broker-specific

## Next implementation step

Align each draft to the corresponding workflow or utility shape, then keep the examples consistent with the root `schemas/` and `examples/` folders.
