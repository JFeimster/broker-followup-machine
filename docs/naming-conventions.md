# Repo Naming Conventions

## Purpose

Use this guide to keep the **Broker Follow-Up Machine GPT** repo readable, scalable, and easy to maintain.

The main principle: use folders as namespaces. File names should be short, descriptive, and folder-aware.

---

# Core Rule

Use this pattern:

```text
[parent-folder]/[subcategory-folder]/[specific-topic].[ext]
```

Do **not** repeat the parent folder name unless the file may be copied/exported outside its folder.

## Good

```text
actions/none/catalog.md
actions/none/safety.md
actions/none/lead-intake.md
actions/api-key/bearer.md
actions/oauth/scopes.md
```

## Too Repetitive

```text
actions/none/actions-none-auth-master-catalog.md
actions/none/actions-none-auth-safety-rules.md
actions/none/actions-none-auth-lead-intake-submission.md
actions/api-key/actions-api-key-bearer-token-catalog.md
actions/oauth/actions-oauth-scope-library.md
```

---

# Recommended Style

Use **short, descriptive, folder-aware names**.

## Preferred Format

```text
catalog.md
overview.md
safety.md
selection-rules.md
lead-intake.md
calculators.md
templates.md
webhooks.md
validation.md
```

## Avoid Unless Needed

```text
master-catalog.md
safety-rules.md
lead-intake-submission.md
public-webhook-triggers.md
template-generators.md
validation-helpers.md
```

Those names are not wrong, but many can be shortened because the folder already provides context.

---

# Recommended Optimized `actions/` Structure

## Best Version

```text
actions/
├── README.md
│
├── auth/
│   ├── README.md
│   ├── overview.md
│   ├── catalog.md
│   ├── selection-rules.md
│   └── safety.md
│
├── none/
│   ├── README.md
│   ├── catalog.md
│   ├── safety.md
│   ├── lead-intake.md
│   ├── calculators.md
│   ├── templates.md
│   ├── webhooks.md
│   └── validation.md
│
├── api-key/
│   ├── README.md
│   ├── overview.md
│   ├── basic.md
│   ├── bearer.md
│   ├── custom-header.md
│   ├── crm-automation.md
│   ├── messaging.md
│   ├── security.md
│   └── errors.md
│
└── oauth/
    ├── README.md
    ├── overview.md
    ├── setup.md
    ├── scopes.md
    ├── token-exchange.md
    ├── permissions.md
    ├── crm-calendar-email.md
    └── errors.md
```

This is much cleaner than repeating the full folder context inside every file name.

---

# Recommended Rename Map

## `actions/authentication/`

Rename the folder itself from:

```text
authentication/
```

to:

```text
auth/
```

It is shorter, common, and clear.

| Current File | Recommended File |
|---|---|
| `gpt-actions-authentication-overview.md` | `overview.md` |
| `gpt-actions-master-catalog.md` | `catalog.md` |
| `gpt-actions-selection-rules.md` | `selection-rules.md` |
| `gpt-actions-safety-and-human-review-rules.md` | `safety.md` |

Result:

```text
actions/auth/
├── README.md
├── overview.md
├── catalog.md
├── selection-rules.md
└── safety.md
```

## `actions/none/`

| Current File | Recommended File | Why |
|---|---|---|
| `actions-none-auth-master-catalog.md` | `catalog.md` | Folder already says `actions/none`. |
| `actions-none-auth-safety-rules.md` | `safety.md` | Short and clear. |
| `actions-none-auth-lead-intake-submission.md` | `lead-intake.md` | “Submission” is implied by the content. |
| `actions-none-auth-public-calculators.md` | `calculators.md` | “Public” and “no auth” are implied. |
| `actions-none-auth-template-generators.md` | `templates.md` | Shorter and still clear. |
| `actions-none-auth-public-webhook-triggers.md` | `webhooks.md` | Clean and practical. |
| `actions-none-auth-validation-helpers.md` | `validation.md` | “Helpers” is unnecessary. |

Recommended:

```text
actions/none/
├── README.md
├── catalog.md
├── safety.md
├── lead-intake.md
├── calculators.md
├── templates.md
├── webhooks.md
└── validation.md
```

This is the preferred version.

## `actions/api-key/`

| Current File | Recommended File |
|---|---|
| `actions-api-key-overview.md` | `overview.md` |
| `actions-api-key-basic-auth-catalog.md` | `basic.md` |
| `actions-api-key-bearer-token-catalog.md` | `bearer.md` |
| `actions-api-key-custom-header-catalog.md` | `custom-header.md` |
| `actions-api-key-crm-and-automation-actions.md` | `crm-automation.md` |
| `actions-api-key-security-and-error-handling.md` | `security.md` or split into `security.md` and `errors.md` |

Recommended:

```text
actions/api-key/
├── README.md
├── overview.md
├── basic.md
├── bearer.md
├── custom-header.md
├── crm-automation.md
├── messaging.md
├── security.md
└── errors.md
```

Split `security` and `errors` because they serve different purposes.

## `actions/oauth/`

| Current File | Recommended File |
|---|---|
| `actions-oauth-overview.md` | `overview.md` |
| `actions-oauth-setup-fields.md` | `setup.md` |
| `actions-oauth-scope-library.md` | `scopes.md` |
| `actions-oauth-crm-calendar-email-actions.md` | `crm-calendar-email.md` |
| `actions-oauth-permissions-and-error-handling.md` | `permissions.md` and `errors.md` |

Recommended:

```text
actions/oauth/
├── README.md
├── overview.md
├── setup.md
├── scopes.md
├── token-exchange.md
├── permissions.md
├── crm-calendar-email.md
└── errors.md
```

---

# `catalog.md` vs. `master-catalog.md`

Use:

```text
catalog.md
```

inside each folder.

Reason:

```text
actions/none/catalog.md
actions/api-key/catalog.md
actions/oauth/catalog.md
```

is already clear because the path provides context.

Use `master-catalog.md` only if there are multiple catalogs in the same folder.

For example:

```text
actions/none/
├── master-catalog.md
├── lead-intake-catalog.md
├── calculator-catalog.md
└── webhook-catalog.md
```

But if each folder has one primary catalog, just use:

```text
catalog.md
```

---

# `lead-intake-submission.md` vs. `lead-intake.md`

Use:

```text
lead-intake.md
```

Why:

- `actions/none/` already tells us it is a no-auth Action file.
- The file content will explain that it is about submissions.
- Shorter filename is easier to read, link, and maintain.
- The URL is cleaner.

Example:

```text
/actions/none/lead-intake
```

instead of:

```text
/actions/none/actions-none-auth-lead-intake-submission
```

If you want slightly more specificity, use:

```text
intake.md
```

or:

```text
lead-intake.md
```

Preferred:

```text
lead-intake.md
```

---

# Repo-Wide Naming Rules

## 1. Use folders as namespaces

Good:

```text
actions/none/catalog.md
knowledge/workflows/new-lead.md
schemas/openapi/none/lead-intake.yaml
```

Avoid:

```text
actions/none/actions-none-auth-master-catalog.md
knowledge/workflows/workflow-new-lead-playbook.md
schemas/openapi/none/none-auth-lead-intake-openapi-schema.yaml
```

## 2. Avoid repeating the project name

Inside this repo, you do not need:

```text
broker-follow-up-machine-sla-standards.md
```

Use:

```text
sla-standards.md
```

because the repo already identifies the project.

Caveat: if files are uploaded individually to GPT knowledge, longer names can help when files are viewed outside their folder. For GPT upload files, use a descriptive middle ground.

## 3. Use `README.md` as the folder overview

Instead of:

```text
actions-none-auth-overview.md
```

Use:

```text
actions/none/README.md
```

or:

```text
actions/none/overview.md
```

Recommendation:

- Use `README.md` for the human-facing folder overview.
- Use `overview.md` only if you need a file specifically uploaded to GPT knowledge.

Example:

```text
actions/none/
├── README.md       # For GitHub browsing
├── overview.md     # Optional GPT knowledge file
├── catalog.md
└── safety.md
```

## 4. Keep names 1–3 words when possible

Good:

```text
safety.md
catalog.md
lead-intake.md
calculators.md
templates.md
webhooks.md
validation.md
permissions.md
errors.md
```

Acceptable:

```text
selection-rules.md
custom-header.md
token-exchange.md
crm-automation.md
human-review.md
```

Too long:

```text
actions-none-auth-public-webhook-triggers.md
actions-api-key-security-and-error-handling.md
gpt-actions-safety-and-human-review-rules.md
```

## 5. Use plural names for category collections

Use plural when the file contains multiple examples/items:

```text
calculators.md
templates.md
webhooks.md
schemas.md
examples.md
```

Use singular when the file is a concept/rule set:

```text
safety.md
overview.md
setup.md
catalog.md
validation.md
```

---

# Optimized Full Repo Structure

```text
broker-followup-machine/
├── README.md
├── AGENTS.md
├── CHANGELOG.md
├── ROADMAP.md
├── LICENSE
├── .gitignore
├── vercel.json
│
├── index.html
├── styles.css
├── script.js
│
├── site/
│   ├── agents.html
│   ├── knowledge.html
│   ├── actions.html
│   ├── workflows.html
│   ├── templates.html
│   ├── safety.html
│   └── downloads.html
│
├── knowledge/
│   ├── README.md
│   ├── core/
│   │   ├── sla-standards.md
│   │   ├── pipeline-os.md
│   │   ├── crm-stages.md
│   │   ├── tags-statuses.md
│   │   └── human-review.md
│   │
│   ├── workflows/
│   │   ├── new-lead.md
│   │   ├── missing-docs.md
│   │   ├── stalled-deal.md
│   │   ├── declined-reactivation.md
│   │   ├── funded-renewals.md
│   │   ├── referral-nurture.md
│   │   └── dead-lead-revival.md
│   │
│   ├── messaging/
│   │   ├── emails.md
│   │   ├── sms.md
│   │   ├── calls.md
│   │   └── objections.md
│   │
│   ├── automation/
│   │   ├── recipes.json
│   │   ├── crm-mapping.md
│   │   └── decision-tree.json
│   │
│   └── examples/
│       └── swipe-file.md
│
├── actions/
│   ├── README.md
│   │
│   ├── auth/
│   │   ├── README.md
│   │   ├── overview.md
│   │   ├── catalog.md
│   │   ├── selection-rules.md
│   │   └── safety.md
│   │
│   ├── none/
│   │   ├── README.md
│   │   ├── catalog.md
│   │   ├── safety.md
│   │   ├── lead-intake.md
│   │   ├── calculators.md
│   │   ├── templates.md
│   │   ├── webhooks.md
│   │   └── validation.md
│   │
│   ├── api-key/
│   │   ├── README.md
│   │   ├── overview.md
│   │   ├── basic.md
│   │   ├── bearer.md
│   │   ├── custom-header.md
│   │   ├── crm-automation.md
│   │   ├── messaging.md
│   │   ├── security.md
│   │   └── errors.md
│   │
│   └── oauth/
│       ├── README.md
│       ├── overview.md
│       ├── setup.md
│       ├── scopes.md
│       ├── token-exchange.md
│       ├── permissions.md
│       ├── crm-calendar-email.md
│       └── errors.md
│
├── schemas/
│   ├── README.md
│   ├── openapi/
│   │   ├── none/
│   │   │   ├── lead-intake.yaml
│   │   │   ├── calculators.yaml
│   │   │   ├── templates.yaml
│   │   │   ├── webhooks.yaml
│   │   │   └── validation.yaml
│   │   ├── api-key/
│   │   └── oauth/
│   │
│   └── json/
│       ├── automation-recipes.schema.json
│       ├── decision-tree.schema.json
│       └── action-catalog.schema.json
│
├── examples/
│   ├── README.md
│   ├── new-lead.md
│   ├── missing-docs.md
│   ├── stalled-deal.md
│   ├── referral-nurture.md
│   ├── dead-lead-revival.md
│   └── action-calls.md
│
├── prompts/
│   ├── README.md
│   ├── builder-instructions.md
│   ├── starters.md
│   ├── testing.md
│   └── file-generation.md
│
└── archive/
    ├── drafts/
    ├── deprecated-actions/
    └── deprecated-knowledge/
```
