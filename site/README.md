# `site/`

Public static documentation site for Broker Follow-Up Machine GPT.

Purpose:

- Explain the GPT and its operator use cases.
- Document the planned knowledge stack and Actions structure.
- Show workflow playbooks, template categories, and safety rules.
- Keep public site files separate from `/site/static/` reference variants.

Page map:

| File | Purpose |
| --- | --- |
| `index.html` | Landing page with the site overview, value proposition, and CTAs. |
| `agents.html` | Explain the GPT, ideal users, outputs, use cases, and prompts. |
| `knowledge.html` | Show the planned knowledge stack by category. |
| `actions.html` | Show Actions planning by auth type and safety boundary. |
| `workflows.html` | Show the core workflow playbooks. |
| `templates.html` | Show the template categories for common channels. |
| `safety.html` | Show human review rules and safer language patterns. |
| `downloads.html` | Show downloadable asset categories and future file types. |
| `assets.html` | Legacy compatibility page that points to `downloads.html`. |
| `tools/payload-builder.html` | Static in-browser payload builder. |
| `tools/index.html` | Static utility viewer for schemas, examples, and OpenAPI drafts. |
| `tools/payload-viewer.html` | Static catalog of payload, webhook, and output examples. |
| `tools/schema-index.html` | Static index of JSON Schema drafts. |
| `tools/openapi-index.html` | Static index of OpenAPI draft placeholders. |

Secondary pages:

| File | Purpose |
| --- | --- |
| `launch-path.html` | Implementation roadmap for what to build first. |
| `brokers.html` | Role page for solo loan brokers and independent funding brokers. |
| `agency-owners.html` | Role page for funding agency owners and broker team leaders. |
| `processors.html` | Role page for processors, VAs, and ops support. |
| `referral-partners.html` | Role page for referral partner managers and partner-channel operators. |

Workflow detail pages:

| File | Purpose |
| --- | --- |
| `workflows/new-lead.html` | Detail page for new lead speed-to-contact. |
| `workflows/missing-docs.html` | Detail page for missing document follow-up. |
| `workflows/stalled-deal.html` | Detail page for stalled deal revival. |
| `workflows/declined-reactivation.html` | Detail page for declined reactivation. |
| `workflows/funded-renewals.html` | Detail page for funded client renewals. |
| `workflows/referral-nurture.html` | Detail page for referral partner nurture. |
| `workflows/dead-lead-revival.html` | Detail page for dead lead revival. |

Template detail pages:

| File | Purpose |
| --- | --- |
| `templates/email.html` | Detail page for email follow-up drafts. |
| `templates/sms.html` | Detail page for SMS follow-up drafts. |
| `templates/calls.html` | Detail page for call follow-up drafts. |
| `templates/voicemail.html` | Detail page for voicemail follow-up drafts. |
| `templates/crm-tasks.html` | Detail page for CRM task drafts. |
| `templates/objections.html` | Detail page for common objection responses. |
| `templates/follow-up-calendars.html` | Detail page for follow-up calendar planning. |

Notes:

- Public site files live directly under `/site`.
- Preserve `/site/static/` as-is for reference variants and experiments.
- Preserve `/site/tools/` as a static utility viewer for repo assets.
- Keep borrower-facing language compliance-conscious.
