# Broker Tags & Statuses Library

## Purpose

This knowledge file gives **Broker Follow-Up Machine** a standardized library of tags, statuses, priority labels, task labels, document labels, referral partner labels, and automation flags for loan brokers, business funding brokers, funding agencies, and broker teams.

Use this file when creating:

- CRM structures
- Pipeline cleanup plans
- Follow-up workflows
- Automation rules
- CRM tags
- Status properties
- Lead segmentation
- Referral partner systems
- Renewal workflows
- Dead lead reactivation campaigns
- Pipeline audit recommendations

The goal is to make every borrower, deal, referral partner, and follow-up record easier to understand, route, prioritize, and act on.

---

## Core Tagging Philosophy

Tags and statuses should create operational clarity.

A good tag or status should help answer one of these questions:

1. What kind of record is this?
2. What does this person or deal need next?
3. Who should own the next action?
4. How urgent is this?
5. What workflow should trigger?
6. Should this be reviewed by a human?
7. Should automation continue or stop?

Avoid using tags as random notes. Tags should be consistent, searchable, and useful for automation.

---

## Tag vs. Status vs. Priority

### Stage

A **stage** shows where a record is in the pipeline.

Examples:

- New Lead
- Documents Requested
- Submitted to Lender
- Funded
- Closed Lost

### Status

A **status** shows the current condition or action state.

Examples:

- Needs Contact
- Awaiting Borrower
- Needs Docs
- Broker Review Needed
- No Response

### Tag

A **tag** gives extra segmentation or routing context.

Examples:

- Referral Lead
- High Priority
- Renewal Candidate
- Missing Bank Statements
- Human Review Required

### Priority

A **priority** shows urgency or importance.

Examples:

- Hot
- Warm
- Cold
- Urgent Review
- Low Priority

---

## Naming Rules

Use clear, plain-English names.

Recommended format:

- Title Case for visible CRM labels
- No vague tags like “Follow-up” unless paired with a status or date
- Avoid duplicate meanings such as “Hot” and “Urgent” unless clearly defined
- Avoid tags that imply approval, eligibility, or lender decisions
- Use “Review Needed” instead of “Approved” or “Qualified”
- Use “Possible Fit” instead of “Qualified”

Good examples:

- Needs Docs
- Broker Review Needed
- Referral Lead
- Renewal Candidate
- Stalled Deal
- Human Review Required

Bad examples:

- Approved
- Guaranteed
- Qualified
- Eligible
- Good Deal
- Bad Deal
- Easy Fund

---

# 1. Core Borrower Statuses

Use these statuses to describe the current condition of a borrower or deal.

## Needs Contact

**Meaning:** Lead has not been contacted yet.

**Use when:** New lead enters CRM.

**Default action:** Contact within SLA.

**Automation:** Create call task, send intro email/SMS if appropriate.

---

## Contact Attempted

**Meaning:** Outreach was attempted but borrower has not replied.

**Use when:** Call, email, or SMS has been sent.

**Default action:** Continue follow-up sequence.

**Stop condition:** Borrower replies, opts out, books call, or sequence ends.

---

## Connected

**Meaning:** Borrower replied or spoke with team.

**Use when:** Borrower engages.

**Default action:** Move to discovery, application, or next review step.

---

## Awaiting Borrower

**Meaning:** Team is waiting on borrower action.

**Use when:** Borrower needs to complete application, upload docs, answer question, or schedule call.

**Default action:** Create follow-up task.

---

## Application Incomplete

**Meaning:** Borrower started but did not finish application/intake.

**Default action:** Send incomplete application reminder.

**Suggested SLA:** Follow up within 1 hour, then again within 24 hours.

---

## Needs Docs

**Meaning:** Required documents are missing.

**Default action:** Send document checklist and create follow-up task.

**Suggested SLA:** First reminder within 24 hours.

---

## Docs Received

**Meaning:** Borrower has submitted requested documents.

**Default action:** Review completeness.

**Human review:** Needed if documents are sensitive or financial.

---

## More Info Needed

**Meaning:** Additional borrower information is needed.

**Default action:** Ask specific question or request specific item.

**Avoid:** Vague “send more info” requests.

---

## Broker Review Needed

**Meaning:** File requires broker or authorized team review.

**Use when:** File is complete, sensitive, lender-specific, or requires judgment.

**Automation:** Create broker task. Do not auto-submit or auto-decline.

---

## Ready for Submission Prep

**Meaning:** File may be ready to prepare for lender/funding partner review.

**Human review:** Required before submission.

**Safe language:** “Ready for broker review” or “Ready for submission prep,” not “approved.”

---

## Submitted

**Meaning:** File has been submitted to a lender or funding partner.

**Default action:** Track status and follow up safely.

**Human review:** Required for lender-specific updates.

---

## Awaiting Lender

**Meaning:** Waiting on lender/funding partner response.

**Default action:** Status review within lender-specific timeline.

**Avoid:** Telling borrower an outcome is likely unless verified.

---

## Offer Presented

**Meaning:** Offer or option has been presented to borrower.

**Human review:** Required.

**Avoid:** Guaranteeing terms, future approvals, or outcomes.

---

## Funded

**Meaning:** Deal funded or transaction completed.

**Default action:** Trigger post-funding check-in, review/referral request, and renewal tracking.

---

## Renewal Candidate

**Meaning:** Funded client may be ready for future review.

**Default action:** Start renewal outreach 30–60 days before expected renewal window.

**Avoid:** Saying pre-approved, eligible, or guaranteed.

---

## Nurture

**Meaning:** Lead is not active but should remain in long-term follow-up.

**Default action:** Add to nurture or reactivation workflow.

---

## No Response

**Meaning:** Borrower has not responded after defined contact attempts.

**Default action:** Continue sequence, then move to nurture/dead lead if no response.

---

## Closed Lost

**Meaning:** Deal is no longer active.

**Required field:** Closed lost reason.

---

## Do Not Contact

**Meaning:** Borrower opted out or should not receive outreach.

**Automation:** Stop all follow-up.

**Important:** Respect opt-outs.

---

# 2. Priority Labels

Use priority labels to determine urgency and queue order.

## Hot

**Meaning:** High-intent lead or active borrower likely to move quickly.

**Criteria may include:**

- Replied quickly
- Urgent funding need
- Complete application
- Referral partner lead
- High-value opportunity

**Action:** Prioritize owner follow-up.

---

## Warm

**Meaning:** Interested but not urgent or not fully ready.

**Action:** Follow normal sequence.

---

## Cold

**Meaning:** Low engagement, old lead, or unclear need.

**Action:** Use nurture or reactivation.

---

## High Priority

**Meaning:** Needs prompt human attention.

**Use when:** Referral partner lead, active deal, high-value borrower, or overdue sensitive task.

---

## Urgent Review

**Meaning:** Requires same-day human review.

**Use when:** Sensitive message, lender response, offer, decline, escalation, or high-priority stalled deal.

---

## Low Priority

**Meaning:** Can be handled after urgent/active pipeline work.

**Use when:** Long-term nurture, low-intent, or nonresponsive old lead.

---

# 3. Document Tags

Use these tags to specify exactly what is missing or received.

## Missing Bank Statements

Borrower needs to upload bank statements.

## Missing ID

Borrower needs to upload identification.

## Missing Tax Returns

Borrower needs tax return documents if applicable.

## Missing Merchant Statements

Borrower needs merchant processing statements.

## Missing Invoices

Borrower needs invoices or receivables documentation.

## Missing Application Signature

Application is incomplete due to signature issue.

## Missing Voided Check

Borrower needs voided check or bank verification document.

## Docs Uploaded

Borrower uploaded documents but review is not complete.

## Docs Reviewed

Documents were reviewed by the proper owner.

## Docs Incomplete

Documents were received but still incomplete.

## Document Review Needed

File requires processor or broker review.

---

# 4. Follow-Up Tags

Use these to control follow-up workflows.

## New Lead Sequence

Record is in speed-to-contact sequence.

## Missing Docs Sequence

Record is in missing document follow-up.

## Stalled Deal Sequence

Record is in stalled deal revival workflow.

## Incomplete Application Sequence

Record is in incomplete application follow-up.

## Dead Lead Revival

Record is in reactivation campaign.

## Renewal Sequence

Record is in funded-client renewal workflow.

## Referral Partner Nurture

Partner is in nurture sequence.

## Final Touch

Final follow-up before moving to nurture, closed lost, or dormant.

## Follow-Up Paused

Automation or outreach should pause until review.

## Follow-Up Complete

Sequence ended due to reply, booking, file completion, opt-out, closure, or manual stop.

---

# 5. Human Review Tags

Use these tags to prevent unsafe automation.

## Human Review Required

A person must review before next step.

## Broker Review Required

Broker must review file, message, lender update, or borrower question.

## Sensitive Docs

File includes sensitive financial documents.

## Lender-Specific Question

Borrower or team asks something related to a specific lender/funding partner.

## Terms Discussion

Funding terms, offer terms, rates, payments, or conditions may be discussed.

## Decline Review

A decline or not-a-fit message may be needed.

## Compliance-Sensitive

Message or workflow could create compliance, UDAAP, privacy, or lending risk.

## Manual Stop

Automation should stop until a human decides next action.

---

# 6. Referral Partner Tags

Use these for partner segmentation and partner workflows.

## Referral Partner

Record is a referral partner.

## Partner Prospect

Potential referral partner not yet active.

## Partner Active

Partner is active or has agreed to send referrals.

## Partner Lead Sent

Partner has submitted at least one lead.

## Partner Inactive

Partner has not engaged or submitted leads for a defined period.

## Partner Reactivation

Partner is in reactivation workflow.

## CPA Partner

Referral source is CPA/accountant.

## Realtor Partner

Referral source is realtor or real estate professional.

## Consultant Partner

Referral source is consultant/advisor.

## Agency Partner

Referral source is marketing, web, or service agency.

## ISO Partner

Referral source is ISO/funding industry partner.

## Broker Partner

Referral source is another broker or funding agent.

---

# 7. Lead Source Tags

Use source tags to track where leads originate.

Recommended tags:

- Website Lead
- Paid Ad Lead
- Google Lead
- Facebook Lead
- LinkedIn Lead
- Referral Lead
- Partner Lead
- Organic Lead
- Email Campaign Lead
- Webinar Lead
- Event Lead
- Cold Outreach Lead
- Imported Lead
- Manual Entry
- Repeat Client
- Renewal Lead

Lead source tags should not replace referral partner fields. If a specific person or partner sent the lead, track that separately.

---

# 8. Owner & Role Tags

Use these when the CRM does not support clean owner fields or when automation needs routing logic.

Recommended tags:

- Owner Needed
- Assigned to Broker
- Assigned to Intake
- Assigned to Processor
- Assigned to VA
- Assigned to Referral Manager
- Assigned to Admin
- Automation Owned
- Solo Operator
- Sales Mode
- Processing Mode
- Admin Mode
- Review Mode

If the CRM has native owner fields, use the native field first and tags only as backup.

---

# 9. Task Statuses

Use task statuses for accountability.

## Task Needed

A task should be created.

## Task Created

Task exists and has an owner.

## Task Due Today

Task is due today.

## Task Overdue

Task is past due.

## Escalation Needed

Task is overdue or sensitive enough to escalate.

## Completed

Task is done.

## Waiting on Borrower

Task cannot move forward until borrower acts.

## Waiting on Partner

Task cannot move forward until referral partner acts.

## Waiting on Lender

Task cannot move forward until lender/funding partner responds.

---

# 10. Closed Lost Reason Tags

Every Closed Lost record should have a reason.

Recommended reasons:

- No Response
- Missing Docs
- Application Incomplete
- Not Ready
- Funded Elsewhere
- Withdrew Request
- Not a Fit After Review
- Duplicate Record
- Bad Contact Info
- Opted Out
- Timing Not Right
- Could Not Verify Info
- Broker Closed Manually

Avoid using unsafe reasons like:

- Not Qualified
- Denied Automatically
- Guaranteed Decline
- Bad Borrower

Use neutral, operational wording.

---

# 11. Automation Control Tags

Use these to control workflow behavior.

## Automation Active

Workflow is currently running.

## Automation Paused

Workflow should pause.

## Automation Complete

Workflow completed.

## Do Not Automate

Human-only handling required.

## Review Before Sending

Message should be reviewed before delivery.

## Stop Sequence

Stop current follow-up sequence.

## Escalate to Broker

Send to broker for review.

## Escalate to Owner

Send to agency owner or manager.

## Needs Routing

Record needs assignment or workflow routing.

---

# 12. Recommended Tag Bundles

## New Web Lead

- Website Lead
- Needs Contact
- New Lead Sequence
- Owner Needed or Assigned to Intake

## Referral Partner Lead

- Referral Lead
- Partner Lead
- High Priority
- Needs Contact
- Assigned to Broker or Intake

## Missing Documents

- Needs Docs
- Missing Docs Sequence
- Waiting on Borrower
- Assigned to Processor or VA

## Stalled Active Deal

- Stalled Deal Sequence
- Task Overdue
- Broker Review Required
- Follow-Up Paused if sensitive

## Funded Client

- Funded
- Repeat Client
- Renewal Candidate
- Renewal Sequence

## Dead Lead

- No Response or Closed Lost
- Dead Lead Revival
- Low Priority
- Nurture

## Sensitive Review

- Human Review Required
- Broker Review Required
- Compliance-Sensitive
- Do Not Automate

---

# 13. CRM Field Recommendations

Use fields where possible instead of overusing tags.

## Best as fields

- Stage
- Owner
- Priority
- Next action
- Next action due date
- Lead source
- Referral partner
- Last touch date
- Follow-up status
- Closed lost reason
- Renewal date

## Best as tags

- Missing Docs
- Referral Lead
- Human Review Required
- High Priority
- Stalled Deal
- Renewal Candidate
- Dead Lead Revival
- Compliance-Sensitive

## Best as tasks

- Call borrower
- Send missing docs reminder
- Review file
- Follow up with partner
- Check lender status
- Send renewal check-in

---

# 14. GPT Output Rules

When the GPT recommends tags/statuses, it should provide:

```markdown
## Recommended CRM Labels

### Stage
- [Stage]

### Status
- [Status]

### Priority
- [Priority]

### Tags
- [Tag 1]
- [Tag 2]
- [Tag 3]

### Owner
- [Role]

### Next Task
- Task name:
- Due:
- Escalation:
```

---

# 15. Hygiene Warnings

The GPT should flag these issues:

- Too many tags with overlapping meanings
- Tags used instead of clear stages
- No closed lost reason
- No owner
- No next task
- No due date
- No stop condition
- Sensitive status without human review tag
- Automation active on a record that needs manual review
- Deal marked funded without renewal tracking
- Partner active but no partner cadence

Suggested warning language:

“CRM hygiene issue: this record has a status but no owner, task, or due date. Add those before automating the next follow-up.”

---

# 16. Compliance-Safe Tagging Rules

Do not use tags or statuses that imply lending outcomes.

Avoid:

- Approved
- Guaranteed
- Eligible
- Qualified
- Pre-Approved
- Declined Automatically
- Bad Borrower
- Easy Approval
- Will Fund

Use instead:

- Broker Review Needed
- Possible Fit
- Needs Review
- Not a Fit After Review
- More Info Needed
- Submission Prep
- Offer Presented
- Closed Lost

---

# Summary Rule

Tags and statuses should help the broker know what is happening, who owns the next action, what workflow should run, and where human review is required.

Broker Follow-Up Machine should use this library to recommend clean, safe, automation-ready CRM structures for solo brokers and team-based funding agencies.
