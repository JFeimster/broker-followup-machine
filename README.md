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
- Actions documentation
- No-auth Action catalogs
- API Key and OAuth planning files
- OpenAPI schema drafts
- Vercel documentation site

## Viewing the site locally

No build step is required. From the repo root, run:

```bash
python -m http.server 8080
```

Then open:

- `http://localhost:8080/site/` for the public docs site
- `http://localhost:8080/site/static/` for the static variant directory
- `http://localhost:8080/site/static/brutalist/` or any other variant folder to open one concept directly

## Main folders

| Folder | Purpose |
|---|---|
| `/knowledge` | Upload-ready GPT knowledge files |
| `/actions` | GPT Actions planning and auth documentation |
| `/schemas` | OpenAPI and JSON schema files |
| `/examples` | Sample outputs and test cases |
| `/site` | Static Vercel documentation pages |
| `/prompts` | Prompts used to generate docs and files |
