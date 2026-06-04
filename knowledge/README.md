# knowledge/

This is where the GPT upload-ready knowledge files live.

Use this for:

- Broker workflow playbooks
- SLA standards
- CRM stages
- Messaging libraries
- Automation recipes
- Decision trees
- Swipe files
- SOPs

This folder should contain the files you upload directly to GPT knowledge.

## Tier(s) 1-5

### Tier 1: core-operating-system/
- `broker-follow-up-machine-sla-standards.md`
- `broker-pipeline-operating-system.md`
- `broker-crm-stage-library.md`
- `broker-tags-statuses-library.md`
- `broker-human-review-rules.md`

### Tier 2: workflow-playbooks/
- `workflow-new-lead-playbook.md`
- `workflow-missing-documents-playbook.md`
- `workflow-stalled-deal-playbook.md`
- `workflow-declined-borrower-reactivation.md`
- `workflow-funded-client-renewals.md`
- `workflow-referral-partner-nurture.md`
- `workflow-dead-lead-revival.md`

### Tier 3: messaging-library/
- `email-template-library.md`
- `sms-template-library.md`
- `call-script-library.md`
- `objection-handling-library.md`

### Tier 4: automation-intelligence/
- `automation-recipes.json`
- `ghl-hubspot-pipedrive-mapping.md`
- `workflow-decision-tree.json`

### Tier 5: expert-examples
- `broker-workflow-swipe-file.md`

## actions/

This is where the GPT Actions documentation lives.

Use this for:

- Authentication explanations
- No-auth action catalogs
- API Key action catalogs
- OAuth action catalogs
- Safety rules
- Action selection rules
- Human review rules

This keeps Actions separate from general GPT knowledge.

---

## `schemas/`

This is where future technical files should live.

Use this for:

- OpenAPI YAML files
- JSON schemas
- Example request payloads
- Example responses
- Validation schemas

When you start building actual GPT Actions, this folder becomes important.

---

## `site/`

This is for the Vercel documentation site.

Recommended pages:

| File | Purpose |
| --- | --- |
| `agents.html` | Public-facing explanation of the GPT/agent. |
| `knowledge.html` | Browse the knowledge stack. |
| `actions.html` | Browse Action categories and auth types. |
| `workflows.html` | Browse workflow playbooks. |
| `templates.html` | Browse email/SMS/call templates. |
| `safety.html` | Human review and compliance-safe language rules. |
| `assets.html` | Downloadable files, screenshots, examples. |

---

## `examples/`

This is for sample outputs and test cases.

Use it to show:

- Sample workflow outputs
- Sample follow-up sequences
- Sample action calls
- Sample webhook responses
- Before/after examples

This helps you test the GPT consistently.

---

## `prompts/`

This is useful because you’re generating a lot of knowledge files.

Suggested files:

```
prompts/
├── gpt-builder-instructions.md
├── conversation-starters.md
├── testing-prompts.md
└── file-generation-prompts.md
```

Especially useful:

```
file-generation-prompts.md
```

This can store prompts like:
