# `site/tools/`

This folder contains a lightweight static viewer for the repository's schemas, examples, webhook examples, and OpenAPI drafts.

## Purpose

- Give operators a quick way to inspect static utility assets
- Keep the viewer separate from the main public docs pages
- Avoid any dynamic fetching or live integrations

## Pages

- `index.html` for the tools home page
- `payload-builder.html` for a local static payload builder
- `safety-language-checker.html` for local safety-language review
- `sequence-builder.html` for local follow-up sequence drafting
- `crm-stage-map-builder.html` for local CRM stage map planning
- `payload-viewer.html` for payload, webhook, and output examples
- `schema-index.html` for JSON Schema drafts
- `openapi-index.html` for OpenAPI drafts

## Rules

- Use relative links only
- Keep the pages static
- Treat examples as placeholders that require human review before borrower-facing use
