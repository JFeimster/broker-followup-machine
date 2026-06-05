# Broker Follow-Up Machine

Broker follow-up workflows, GPT knowledge files, Actions specs, and CRM automation docs.

## Product Snapshot

| Label | Info |
|---|---|
| `Problem` | Loan brokers lose funded deals because leads, missing docs, and referral partners fall through the cracks. |
| `Solution` | A GPT that builds borrower, referral partner, and pipeline follow-up systems with scripts, CRM stages, and automation rules. |
| `Best use` | Converting messy broker follow-up into repeatable revenue protection. |

## Positioning

| Title | Description |
|---|---|
| **Category:** | Sales & Client Relations / Productivity & Automation |
| **Audience:** | Loan brokers, funding agency owners, independent brokers, referral partner managers, broker sales teams. |
| **Funnel stage:** | Lead Magnet |
| **Primary CTA:** | Download the broker follow-up sequence pack or request CRM automation setup. |

## What this repo contains

- GPT Builder instructions
- Knowledge stack files
- Workflow playbooks
- Messaging libraries
- Actions documentation and planning layer
- No-auth Action catalogs
- API Key and OAuth planning files
- OpenAPI schema drafts
- Vercel documentation site

## Knowledge

The `knowledge/` folder holds the upload-ready broker-specific knowledge stack for Broker Follow-Up Machine GPT.

- `knowledge/core/` covers positioning, audience, operating rules, output format, and first-response behavior.
- `knowledge/workflows/` covers the seven core follow-up playbooks.
- `knowledge/messaging/` covers email, SMS, calls, voicemail, objections, and cadence guidance.
- `knowledge/automation/` covers CRM stages, tags, triggers, review checkpoints, and metrics.
- `knowledge/safety/` covers review rules, restricted language, privacy, and automation boundaries.
- `knowledge/examples/` covers short sample outputs for consistency checks.
- `business/` covers offer, funnel, pricing, and service packaging strategy.

Keep these files concise, product-specific, and ready for GPT upload.

## Schemas

The `schemas/` folder holds static JSON Schema drafts and example payload shapes for the Broker Follow-Up Machine utility layer.

- `schemas/*.json` define the expected payload shape for lead intake, workflow requests, template requests, safety review, CRM stage maps, and webhook events.
- Keep these schemas example-only and aligned to the broker follow-up workflows.

## Examples

The `examples/` folder holds static payload examples, webhook examples, and sample GPT outputs.

- `examples/payloads/` shows the minimal request shapes.
- `examples/webhooks/` shows webhook event wrappers.
- `examples/outputs/` shows the expected style of workflow output.

## Actions planning

The `actions/` folder is documentation-only planning for future GPT Actions.

- `actions/README.md` explains the folder map and scope.
- `actions/catalog.md` indexes the major Action paths.
- `actions/safety.md` defines the review boundary.
- `actions/none/`, `actions/api-key/`, `actions/oauth/`, `actions/webhooks/`, `actions/schemas/`, and `actions/review/` hold the detailed planning files.

Do not add live integrations, secrets, or executable network code to the planning layer.

## Viewing the site locally

No build step is required. From the repo root, run:

```bash
python -m http.server 8080
```

Then open:

- `http://localhost:8080/site/` for the public docs site
- `http://localhost:8080/site/tools/` for the static utility viewer
- `http://localhost:8080/site/tools/payload-builder.html` for the local payload builder
- `http://localhost:8080/site/tools/safety-language-checker.html` for the local safety language checker
- `http://localhost:8080/site/tools/sequence-builder.html` for the local follow-up sequence builder
- `http://localhost:8080/site/static/` for the static variant directory
- `http://localhost:8080/site/static/brutalist/` or any other variant folder to open one concept directly

## Main folders

| Folder | Purpose |
|---|---|
| `/knowledge` | Upload-ready GPT knowledge files |
| `/business` | Offer, funnel, pricing, and service packaging strategy |
| `/schemas` | Static JSON Schema drafts and payload shapes |
| `/examples` | Static payload, webhook, and output examples |
| `/actions` | GPT Actions planning and auth documentation |
| `/site` | Static Vercel documentation pages |
| `/prompts` | Prompts used to generate docs and files |
