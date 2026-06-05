# No-Authorization Actions Catalog (Broker Follow-Up Machine)

A curated catalog of **“No Authorization” GPT Actions** for Broker Follow-Up Machine GPT.

These Actions are designed to be:
- **Low-risk**
- **Public / utility / intake-oriented**
- **Non-sensitive by default**
- **Safe to run without user account access**

They should **not** access private CRM data, pull borrower records, or perform authenticated writes to external systems.

---

## What “No Authorization” means

**No Authorization** Actions do not require OAuth consent or API keys. They typically call:
- Public endpoints
- Non-sensitive internal endpoints (carefully designed)
- Utility endpoints (calculators, validators, formatters)
- Intake endpoints (form submissions / webhooks)

**Key benefit:** easy to deploy and test.  
**Key constraint:** must be safe even when used anonymously.

---

## Safety boundaries (must-follow)

### Allowed
- Creating **non-sensitive** workflow requests (intake)
- Generating **templates** (email/SMS/call scripts) as text artifacts
- Running **calculations** on user-provided values (dates, stages, urgency scoring)
- Triggering **public** webhook-style workflows with **minimal** payloads (no borrower PII)
- Validating structures (CRM stages, automation logic, safety language)

### Not allowed
- Retrieving **private** CRM data (contacts, deals, pipeline activity)
- Writing to a CRM (create/update contact/deal/task) without auth
- Sending messages (email/SMS) automatically with real recipients
- Handling sensitive data such as:
  - SSNs, tax returns, bank statements
  - credit reports / underwriting decisioning
  - lender terms, approvals, “you qualify” claims
- Anything that could be interpreted as lending compliance advice

### Human review guidance
Even when an Action is “No Auth”, add human review gates if outputs may be used borrower-facing (especially templates that could accidentally imply approval/eligibility).

---

## Catalog structure

This catalog is grouped into 5 categories:

1. **Lead intake submissions**
2. **Public calculators**
3. **Template generators**
4. **Public webhook triggers**
5. **Validation helpers**

---

# 1) Lead intake submission Actions

Use when the GPT needs to collect **non-sensitive workflow requirements** and submit them to a form endpoint/webhook for follow-up.

| # | Action name | Operation ID (suggested) | Purpose | Inputs (user-provided) | Output | Human review? |
|---:|---|---|---|---|---|---|
| 1 | Submit Broker Consultation Request | `submitBrokerConsultationRequest` | Capture a basic request for help building follow-up workflows. | Name, email, company, CRM tool, workflow need, preferred contact method | Confirmation ID + next step | No (unless sensitive details included) |
| 2 | Submit Workflow Audit Request | `submitWorkflowAuditRequest` | Intake for a pipeline/follow-up audit without CRM access. | Broker type, pain point, workflow type, team size, CRM used | Confirmation + intake summary | No |
| 3 | Submit CRM Automation Request | `submitCrmAutomationRequest` | Intake for done-for-you automation setup. | CRM platform, workflow goal, current tools, urgency, contact info | Confirmation + recommended category | Yes (before quoting/implementation) |
| 4 | Submit Follow-Up Sequence Request | `submitFollowUpSequenceRequest` | Capture details to generate borrower/partner/renewal sequences. | Audience, stage, CTA, tone, channels, timing | Structured request summary | No |
| 5 | Submit Missing Docs Workflow Request | `submitMissingDocsWorkflowRequest` | Intake for missing-doc follow-up workflows. | Doc types (high-level), stage, channels, cadence | Checklist-ready summary | No (unless sensitive doc details) |
| 6 | Submit Referral Partner System Request | `submitReferralPartnerSystemRequest` | Intake for referral partner nurture workflows. | Partner type, current partner count, cadence, CTA | Summary + recommended workflow | No |

**Notes**
- Always prefer “high-level doc types” (e.g., “bank statements”) over detailed file content.
- If a user tries to paste sensitive info, the GPT should refuse to submit it and ask for a redacted summary.

---

# 2) Public calculator Actions

Use when the GPT can provide stronger operational guidance by computing scores, cadences, or SLA risk from user-provided inputs (no CRM access).

| # | Action name | Operation ID (suggested) | Purpose | Inputs | Output | Human review? |
|---:|---|---|---|---|---|---|
| 1 | Calculate Days Since Last Contact | `calculateDaysSinceLastContact` | Compute inactivity duration. | Last contact date, current date, timezone | Days inactive + suggested label | No |
| 2 | Score Pipeline Urgency | `scorePipelineUrgency` | Score urgency based on stage + age + flags. | Stage, lead source, days inactive, priority | Score + recommended next action | No |
| 3 | Estimate Follow-Up Cadence | `estimateFollowUpCadence` | Suggest a Day 0/1/3/7 style sequence. | Workflow type, urgency, channel, stage | Cadence recommendation | No |
| 4 | Prioritize Stale Deals | `prioritizeStaleDeals` | Rank stale deals from user-entered rows. | List of deals with stage/age/value/owner | Ranked list + rescue plan | No (if no borrower PII) |
| 5 | Calculate SLA Breach Risk | `calculateSlaBreachRisk` | Check if follow-up is on-time/at-risk/breached. | Created time, last touch, SLA target | SLA status + escalation guidance | No |
| 6 | Estimate Follow-Up Load | `estimateFollowUpLoad` | Estimate task/message workload for a sequence. | # leads, sequence length, channels, team size | Workload + staffing suggestion | No |

**Notes**
- Output should be operational (“Do X next”), not compliance/lending advice.
- If the user inputs borrower-identifying information, instruct them to remove it.

---

# 3) Template generator Actions

Use when the best outcome is a clean artifact (markdown text, PDF-ready markdown, JSON, CSV) produced safely without system access.

| # | Action name | Operation ID (suggested) | Purpose | Inputs | Output | Human review? |
|---:|---|---|---|---|---|---|
| 1 | Generate Email Sequence Pack | `generateEmailSequencePack` | Produce a workflow-based email series. | Workflow type, audience, tone, CTA | Markdown/PDF-ready email pack | Sometimes |
| 2 | Generate SMS Sequence Pack | `generateSmsSequencePack` | Produce short SMS messages per step. | Workflow type, stage, tone, cadence | SMS pack with timing | Yes (borrower-facing safety check) |
| 3 | Generate CRM Task Checklist | `generateCrmTaskChecklist` | Generate task list by owner/stage. | Workflow type, roles, stages | Checklist + due-date suggestions | No |
| 4 | Generate Referral Partner Nurture Plan | `generateReferralPartnerNurturePlan` | Build a nurture calendar + messages. | Partner type, cadence, CTA | Monthly/quarterly plan | No |
| 5 | Generate Missing Docs Checklist | `generateMissingDocsChecklist` | Create borrower-facing doc checklist + nudges. | Doc types, upload method, tone | Checklist + email/SMS copy | Yes (ensure safe language) |
| 6 | Generate Workflow SOP Document | `generateWorkflowSopDocument` | Produce a full SOP for a workflow. | Workflow name, roles, SLAs, tools | SOP in markdown | No |

**Notes**
- Template generators should never “send”—only generate.
- Include a “human review point” section for any borrower-facing pack.

---

# 4) Public webhook trigger Actions

Use when the Action triggers a workflow in Zapier/Make/n8n/backend **without auth**, and the payload remains non-sensitive.

| # | Action name | Operation ID (suggested) | Purpose | Inputs | Output | Human review? |
|---:|---|---|---|---|---|---|
| 1 | Trigger Generic Workflow Request Webhook | `triggerWorkflowRequestWebhook` | Route a workflow request to automation. | Workflow type, summary, contact info | Success/failure + reference ID | No |
| 2 | Trigger Broker Audit Intake Webhook | `triggerBrokerAuditIntakeWebhook` | Route audit request payload. | Broker name, CRM, audit focus, email | Intake confirmation | No |
| 3 | Trigger Template Delivery Webhook | `triggerTemplateDeliveryWebhook` | Request delivery of a template pack. | Template type, email, format | Delivery confirmation | No |
| 4 | Trigger Internal Notification Webhook | `triggerInternalNotificationWebhook` | Notify internal ops of inquiry. | Inquiry type, urgency, summary | Notification status | No |
| 5 | Trigger Downloadable Asset Creation | `triggerDownloadableAssetCreation` | Kick off PDF/CSV generation job. | Asset type, summary, format | Job ID / link / status | No |
| 6 | Trigger Workflow Demo Submission | `triggerWorkflowDemoSubmission` | Submit test payload to validate schemas. | Demo payload, expected output | Test response | No |

**Notes**
- Do not accept borrower PII in webhook payloads.
- Payloads should be “request metadata”, not operational data.

---

# 5) Validation helper Actions

Use to quality-check workflows, language, and structures before a broker deploys them.

| # | Action name | Operation ID (suggested) | Purpose | Inputs | Output | Human review? |
|---:|---|---|---|---|---|---|
| 1 | Validate CRM Stage Naming | `validateCrmStageNaming` | Check clarity/overlap/gaps in stages. | Stage list | Issues + suggested stage fixes | No |
| 2 | Validate Automation Map Structure | `validateAutomationMapStructure` | Check trigger/condition/action/wait/stop. | Automation map (text/JSON) | Missing logic + recommendations | No |
| 3 | Validate Required Workflow Fields | `validateRequiredWorkflowFields` | Ensure workflow has needed operational fields. | Workflow type + fields provided | Missing fields + add list | No |
| 4 | Validate Follow-Up Sequence Timing | `validateFollowUpSequenceTiming` | Flag too aggressive / too sparse cadence. | Steps + timing + channels | Timing analysis + suggested cadence | No |
| 5 | Validate Human Review Points | `validateHumanReviewPoints` | Ensure sensitive steps are gated. | Workflow content | Review warnings + suggested gates | Yes (for final deployment) |
| 6 | Validate Message Safety Language | `validateMessageSafetyLanguage` | Detect risky claims (approval/guarantees). | Message copy | Flags + safer rewrite options | Yes (borrower-facing) |

**Notes**
- “Validate Message Safety Language” is high leverage for broker-safe compliance tone.
- Add a standard list of banned phrases and safe alternatives in the validator logic.

---

## Recommended “Action Card” format (for expanding each item)

Use this block format if you want each Action described in detail:

### Action: [Action Name]
**Operation ID:** `...`  
**Auth:** None  
**Category:** Intake / Calculator / Template / Webhook / Validation  

**Purpose:**  
...  

**Best used when:**  
- ...  

**Do not use when:**  
- ...  

**User inputs needed:**  
- ...  

**Suggested API payload fields:**  
- ...  

**Expected output:**  
...  

**Human review required:** Yes/No — why  

**Safe usage notes:**  
...  

**Example user request:**  
“...”  

**Recommended GPT behavior:**  
- Before calling: ...  
- After calling: ...

---

## Build order (practical)

1. Validation helpers (quality + safety)
2. Template generators (artifact creation)
3. Calculators (operational guidance)
4. Intake submissions (lead routing)
5. Webhook triggers (automation routing)

---

## Appendix: Quick index of operation IDs

**Intake**
- `submitBrokerConsultationRequest`
- `submitWorkflowAuditRequest`
- `submitCrmAutomationRequest`
- `submitFollowUpSequenceRequest`
- `submitMissingDocsWorkflowRequest`
- `submitReferralPartnerSystemRequest`

**Calculators**
- `calculateDaysSinceLastContact`
- `scorePipelineUrgency`
- `estimateFollowUpCadence`
- `prioritizeStaleDeals`
- `calculateSlaBreachRisk`
- `estimateFollowUpLoad`

**Templates**
- `generateEmailSequencePack`
- `generateSmsSequencePack`
- `generateCrmTaskChecklist`
- `generateReferralPartnerNurturePlan`
- `generateMissingDocsChecklist`
- `generateWorkflowSopDocument`

**Webhooks**
- `triggerWorkflowRequestWebhook`
- `triggerBrokerAuditIntakeWebhook`
- `triggerTemplateDeliveryWebhook`
- `triggerInternalNotificationWebhook`
- `triggerDownloadableAssetCreation`
- `triggerWorkflowDemoSubmission`

**Validation**
- `validateCrmStageNaming`
- `validateAutomationMapStructure`
- `validateRequiredWorkflowFields`
- `validateFollowUpSequenceTiming`
- `validateHumanReviewPoints`
- `validateMessageSafetyLanguage`
