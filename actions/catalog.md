# Consolidated Action Idea Catalog

## Purpose

This catalog summarizes recommended Action ideas for **Broker Follow-Up Machine GPT** and maps each idea to the suggested documentation file where it should live.

Use this as the planning index before creating OpenAPI schemas, Action documentation, or no-auth/API-key/OAuth implementation specs.

## Action Ideas

| Category | Action Idea | Suggested File | Best For |
|---|---|---|---|
| Lead intake | Submit Broker Consultation Request | `actions/none/lead-intake.md` | Capturing general broker requests |
| Lead intake | Submit Workflow Audit Request | `actions/none/lead-intake.md` | Pipeline/follow-up audits |
| Lead intake | Submit CRM Automation Request | `actions/none/lead-intake.md` | DFY automation inquiries |
| Lead intake | Submit Follow-Up Sequence Request | `actions/none/lead-intake.md` | Sequence generation intake |
| Lead intake | Submit Missing Document Workflow Request | `actions/none/lead-intake.md` | Missing-doc workflow intake |
| Lead intake | Submit Referral Partner System Request | `actions/none/lead-intake.md` | Referral nurture system intake |
| Public calculators | Calculate Days Since Last Contact | `actions/none/calculators.md` | Deal aging |
| Public calculators | Score Pipeline Urgency | `actions/none/calculators.md` | Prioritization |
| Public calculators | Estimate Follow-Up Cadence | `actions/none/calculators.md` | Timing recommendations |
| Public calculators | Prioritize Stale Deals | `actions/none/calculators.md` | Pipeline cleanup |
| Public calculators | Calculate SLA Breach Risk | `actions/none/calculators.md` | SLA monitoring |
| Public calculators | Estimate Follow-Up Load | `actions/none/calculators.md` | Staffing/workload planning |
| Template generators | Generate Email Sequence Pack | `actions/none/templates.md` | Email workflow assets |
| Template generators | Generate SMS Sequence Pack | `actions/none/templates.md` | SMS workflow assets |
| Template generators | Generate CRM Task Checklist | `actions/none/templates.md` | Task planning |
| Template generators | Generate Referral Partner Nurture Plan | `actions/none/templates.md` | Partner nurture |
| Template generators | Generate Missing Docs Checklist | `actions/none/templates.md` | Document collection |
| Template generators | Generate Workflow SOP Document | `actions/none/templates.md` | SOP creation |
| Public webhooks | Trigger Generic Workflow Request Webhook | `actions/none/webhooks.md` | General workflow request routing |
| Public webhooks | Trigger Broker Audit Intake Webhook | `actions/none/webhooks.md` | Audit request routing |
| Public webhooks | Trigger Template Delivery Webhook | `actions/none/webhooks.md` | Sending requested assets |
| Public webhooks | Trigger Internal Notification Webhook | `actions/none/webhooks.md` | Team notifications |
| Public webhooks | Trigger Downloadable Asset Creation | `actions/none/webhooks.md` | PDF/Markdown/CSV creation |
| Public webhooks | Trigger Workflow Demo Submission | `actions/none/webhooks.md` | Testing Actions |
| Validation helpers | Validate CRM Stage Naming | `actions/none/validation.md` | CRM cleanup |
| Validation helpers | Validate Automation Map Structure | `actions/none/validation.md` | Automation design |
| Validation helpers | Validate Required Workflow Fields | `actions/none/validation.md` | Workflow readiness |
| Validation helpers | Validate Follow-Up Sequence Timing | `actions/none/validation.md` | Cadence quality |
| Validation helpers | Validate Human Review Points | `actions/none/validation.md` | Safety routing |
| Validation helpers | Validate Message Safety Language | `actions/none/validation.md` | Compliance-conscious copy review |

## Recommended First Build Order

1. `actions/none/lead-intake.md`
2. `actions/none/templates.md`
3. `actions/none/validation.md`
4. `actions/none/calculators.md`
5. `actions/none/webhooks.md`

## Notes

- Start with no-auth Actions first because they are lower-friction and easier to document.
- Keep borrower-sensitive workflows conservative.
- Require human review when a workflow touches funding terms, offers, declines, eligibility language, approval language, lender-specific claims, or sensitive document interpretation.
- Use the folder path as the namespace; avoid repeating `actions-none-auth` inside every file name.
