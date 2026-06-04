# Broker Pipeline Operating System

## Purpose

This knowledge file gives **Broker Follow-Up Machine** a complete operating framework for loan broker, business funding, and funding agency pipelines.

Use this file when creating:

- Follow-up workflows
- CRM stages
- Pipeline audits
- Handoff rules
- Role assignments
- Task accountability systems
- Automation maps
- SOPs
- Team-based agency workflows
- Solo-broker operating systems

The goal is to help brokers keep every deal visible, owned, and moving without making approval promises, funding guarantees, or automating sensitive judgment calls.

---

## Core Pipeline Philosophy

A broker pipeline should answer five questions at all times:

1. **What stage is this deal in?**
2. **Who owns the next action?**
3. **What is the next action?**
4. **When is it due?**
5. **What stops or escalates the workflow?**

No deal should remain ownerless, stageless, or without a next action.

Every active deal must have:

- Pipeline stage
- Owner
- Next action
- Due date
- Contact status
- Document status
- Last touch date
- Stop condition or escalation rule

If a deal does not have those fields, the GPT should flag it as a pipeline hygiene issue.

---

## Operating Principles

### 1. Speed matters, but clarity matters more

Fast follow-up helps conversion, but speed should not create sloppy communication, compliance risk, or unclear ownership.

### 2. Every lead needs an owner

Every borrower, partner lead, renewal opportunity, and stale deal needs a named owner or owner role.

Examples:

- Broker
- Intake rep
- Processor
- VA
- Referral partner manager
- Admin
- Automation system
- Solo operator

### 3. Every stage needs a definition

A CRM stage should mean something specific. If the stage does not explain what happened and what happens next, it is too vague.

### 4. Every handoff needs a logged next step

When work moves from one role to another, the CRM should show:

- Who handed it off
- Who received it
- What changed
- What must happen next
- When it is due

### 5. Automation should support judgment, not replace it

Automate reminders, tasks, routing, alerts, and status updates. Do not automate sensitive lending judgment, underwriting decisions, funding terms, approvals, declines, or lender-specific promises.

---

## Required Pipeline Fields

Every borrower/deal record should include these core fields whenever possible.

### Identity Fields

- Borrower name
- Business name
- Email
- Phone
- State
- Industry
- Lead source
- Referral partner, if applicable

### Deal Fields

- Funding amount requested
- Use of funds
- Product interest, if known
- Time in business
- Monthly revenue range
- Credit score range, if provided
- Current stage
- Deal owner
- Priority
- Next action
- Next action due date
- Last contact date
- Last response date

### Document Fields

- Application status
- Bank statements status
- ID status
- Tax return status, if needed
- Merchant statement status, if needed
- Additional documents needed
- Document upload link
- Document review owner

### Follow-Up Fields

- Follow-up status
- Follow-up sequence name
- Follow-up touch count
- Last touch channel
- Next touch date
- Stop condition
- Escalation status

### Outcome Fields

- Submitted to lender date
- Lender status
- Offer presented date
- Funded date
- Closed lost reason
- Renewal date
- Review/referral request status

---

## Core Borrower Pipeline Stages

Use these as a default borrower pipeline unless the user provides their own CRM stages.

### 1. New Lead

**Definition:** A new borrower or business funding lead has entered the system.

**Required next action:** Contact within SLA.

**Owner:** Intake rep, broker, VA, or solo operator.

**Exit criteria:** Lead is contacted, attempted, or disqualified after review.

---

### 2. Contact Attempted

**Definition:** The team has attempted contact but has not yet connected with the borrower.

**Required next action:** Continue speed-to-contact sequence.

**Owner:** Intake rep, broker, or assigned follow-up owner.

**Exit criteria:** Borrower replies, books a call, completes intake, opts out, or sequence ends.

---

### 3. Connected / Discovery Started

**Definition:** Borrower has responded or spoken with the team.

**Required next action:** Confirm funding need, use of funds, timeline, and basic fit.

**Owner:** Broker or sales rep.

**Exit criteria:** Intake is completed, application is started, or borrower is moved to nurture/closed.

---

### 4. Application Started

**Definition:** Borrower has started the application or intake process but has not completed it.

**Required next action:** Send completion reminder and create follow-up task.

**Owner:** Intake rep, VA, or automation system.

**Exit criteria:** Application completed or moved to incomplete/nurture.

---

### 5. Documents Requested

**Definition:** Borrower needs to provide required documents.

**Required next action:** Send document checklist and reminders.

**Owner:** Processor, VA, or document collection owner.

**Exit criteria:** Documents received, borrower replies, or file becomes dormant.

---

### 6. Documents Received

**Definition:** Borrower has submitted required documents.

**Required next action:** Broker or authorized reviewer checks file completeness.

**Owner:** Processor or broker.

**Exit criteria:** File is marked ready for review, more docs requested, or closed.

---

### 7. Ready for Broker Review

**Definition:** File appears complete enough for broker review.

**Required next action:** Broker reviews before any lender submission or funding discussion.

**Owner:** Broker.

**Exit criteria:** File is approved for submission prep, more information requested, or closed.

**Human review required:** Yes.

---

### 8. Submission Prep

**Definition:** File is being prepared for lender or funding partner review.

**Required next action:** Confirm package, notes, documents, and safe communication.

**Owner:** Broker or processor.

**Exit criteria:** Submitted to lender/funding partner or returned for more info.

**Human review required:** Yes.

---

### 9. Submitted to Lender

**Definition:** File has been submitted to lender or funding partner.

**Required next action:** Track status and avoid borrower-facing claims until verified.

**Owner:** Broker.

**Exit criteria:** Lender response, offer, more docs requested, decline, or withdrawal.

---

### 10. Lender Review / More Info Needed

**Definition:** Lender/funding partner is reviewing or requested more information.

**Required next action:** Gather requested information and update borrower safely.

**Owner:** Broker, processor, or document owner.

**Exit criteria:** Offer presented, additional docs submitted, decline, or closed.

---

### 11. Offer Presented

**Definition:** A funding offer or option is ready to discuss.

**Required next action:** Broker reviews and communicates clearly without overpromising.

**Owner:** Broker.

**Human review required:** Yes.

**Exit criteria:** Borrower accepts, declines, requests changes, or goes inactive.

---

### 12. Funded

**Definition:** Deal was funded or completed.

**Required next action:** Post-funding check-in, review request, referral request, and renewal tracking.

**Owner:** Broker, retention owner, or referral manager.

**Exit criteria:** Client added to retention/renewal workflow.

---

### 13. Renewal Candidate

**Definition:** Funded client may be eligible or interested in reviewing future options later.

**Required next action:** Start renewal outreach at the appropriate time.

**Owner:** Broker or retention owner.

**Important:** Do not say the client is approved, eligible, or guaranteed. Use review language.

---

### 14. Nurture

**Definition:** Lead is not ready, not responsive, or not currently moving but should remain in long-term follow-up.

**Required next action:** Add to periodic nurture or reactivation sequence.

**Owner:** Automation system, VA, or marketing owner.

---

### 15. Closed Lost

**Definition:** Deal is no longer active.

**Required next action:** Log reason and decide whether future reactivation is appropriate.

**Closed lost reasons may include:**

- No response
- Missing documents
- Not ready
- Funded elsewhere
- Withdrew request
- Not a fit after review
- Duplicate record
- Bad contact info

---

## Referral Partner Pipeline Stages

Use this structure when the GPT builds partner follow-up, partner nurture, or referral workflows.

### 1. Partner Prospect

Potential referral source identified.

### 2. Contacted

Initial outreach sent.

### 3. Conversation Started

Partner has replied or engaged.

### 4. Meeting Scheduled

Partner call or intro meeting is booked.

### 5. Partner Active

Partner has agreed to send referrals or collaborate.

### 6. Lead Sent

Partner has submitted at least one lead.

### 7. Partner Nurture

Partner is not currently active but should receive check-ins.

### 8. Inactive / Reactivation

Partner has not sent leads or engaged for a defined period.

---

## Role Definitions

### Owner / Agency Owner

Responsible for pipeline health, performance, team accountability, and process improvement.

### Broker

Responsible for borrower conversations, deal review, lender communication, funding option discussion, and sensitive judgment calls.

### Intake Rep

Responsible for new lead contact, basic information gathering, call booking, and application completion support.

### Processor

Responsible for document tracking, file completeness, checklist management, and submission prep support.

### VA / Admin

Responsible for CRM cleanup, task creation, routine follow-up reminders, inbox checks, document checklist updates, and scheduling support.

### Referral Partner Manager

Responsible for partner communication, referral acknowledgements, partner nurture, and partner reactivation.

### Automation System

Responsible for mechanical tasks such as creating records, assigning tasks, sending generic reminders, updating fields, and triggering alerts.

### Solo Operator

If the user is solo, collapse roles into:

- **Sales Mode:** borrower and partner communication
- **Processing Mode:** docs, files, checklists
- **Admin Mode:** CRM updates, task management, scheduling
- **Review Mode:** judgment calls, funding discussion, lender submission decisions

---

## Handoff Standards

Every handoff should include:

- From owner
- To owner
- Stage
- Reason for handoff
- Next action
- Due date
- Required context
- Documents or links needed
- Escalation condition

Example handoff note:

```markdown
Handoff: Intake → Processing
Reason: Borrower completed application and needs document checklist.
Next action: Send missing docs request.
Due: Within 24 hours.
Owner: Processor/VA.
Escalate if: Borrower does not respond after 2 touches.
```

---

## Pipeline Hygiene Rules

The GPT should flag pipeline hygiene issues when it sees any of the following:

- Deal has no owner
- Deal has no next action
- Deal has no due date
- Deal is in the wrong stage
- Deal has stale activity
- Deal has missing document status
- Deal has no stop condition
- Deal has duplicate records
- Deal has unclear lead source
- Deal has sensitive status but no human review point
- Deal has overdue tasks with no escalation rule

Recommended GPT language:

“Pipeline hygiene issue: this deal has no clear next action or owner. Assign an owner and create a due task before adding automation.”

---

## Deal Aging Policy

Use deal age to recommend follow-up, escalation, or cleanup.

### New Lead

- 0–5 minutes: first contact due
- 5–15 minutes: urgent follow-up task
- 24 hours: second-touch workflow
- 3 days: stalled lead review
- 7 days: move to nurture or dead lead sequence if no response

### Application Started

- 1 hour: reminder due
- 24 hours: follow-up task
- 3 days: escalation or final nudge
- 7 days: move to incomplete/nurture unless active

### Documents Requested

- 24 hours: first reminder
- 48–72 hours: second reminder/call
- 5–7 days: final nudge or broker review
- 14 days: dormant or nurture unless high priority

### Submitted to Lender

- 24–48 hours: status review
- 3–5 days: follow-up/check-in depending on lender process
- 7 days: broker review for next steps

### Funded

- 3–7 days: check-in
- 30–60 days before renewal window: renewal review

---

## Stop Conditions

Every follow-up sequence should include stop conditions.

Stop a workflow when:

- Borrower replies
- Borrower books a call
- Borrower completes application
- Borrower uploads documents
- Borrower opts out
- Broker manually closes file
- Deal is funded
- Deal is moved to nurture
- Deal is assigned to human review

Do not continue sending automated messages after an opt-out or clear stop condition.

---

## Escalation Rules

Escalate when:

- High-priority borrower has not responded after 2 touches
- Referral partner lead has not been contacted within SLA
- Missing docs are overdue after 3 touches
- Deal has no owner
- Deal has no next action
- Sensitive communication is needed
- Lender-specific response is unclear
- Borrower asks about terms, approval, eligibility, or underwriting

Escalation should usually go to:

- Broker
- Agency owner
- Senior processor
- Authorized reviewer

---

## Human Review Rules

Human review is required before:

- Sending funding terms
- Presenting offers
- Declining a borrower
- Suggesting a borrower may match a lender
- Discussing sensitive financial documents
- Making lender-specific claims
- Making credit or underwriting decisions
- Sending any message that could imply approval or eligibility

Safe phrase:

“This should be reviewed by a broker before sending.”

---

## Automation Rules

### Safe to automate

- Create CRM record
- Assign owner
- Send generic confirmation
- Send generic reminder
- Create tasks
- Update simple statuses
- Notify team
- Move stale records to review queue
- Log activity
- Schedule follow-up

### Automate with caution

- Lead scoring
- Lender matching suggestions
- Renewal timing
- Referral partner alerts
- Reactivation campaigns
- Priority flags

### Do not fully automate

- Funding approvals
- Declines
- Underwriting decisions
- Lender submissions
- Funding terms
- Sensitive document review
- Eligibility claims
- Rate or offer claims

---

## CRM Status Standards

Useful statuses:

- Hot
- Warm
- Cold
- Needs Contact
- Contact Attempted
- Awaiting Borrower
- Needs Docs
- Docs Received
- Broker Review Needed
- Submitted
- Awaiting Lender
- Offer Presented
- Funded
- Renewal Candidate
- No Response
- Nurture
- Closed Lost

Useful tags:

- New Lead
- Referral Lead
- Partner Lead
- Missing Docs
- Incomplete Application
- High Priority
- Stalled Deal
- Renewal
- Dead Lead
- Do Not Contact
- Human Review Required

---

## Pipeline Audit Framework

When auditing a pipeline, review:

1. Owner coverage
2. Stage accuracy
3. Next action coverage
4. Due date coverage
5. SLA compliance
6. Overdue tasks
7. Missing documents
8. Stalled deals
9. Referral partner follow-up
10. Funded client renewal tracking
11. Dead lead recycling
12. Human review risks
13. Automation opportunities
14. Stop condition gaps

Default audit output:

```markdown
# Pipeline Audit

## Biggest Leak

## Ownerless Deals

## Stale Deals

## Missing Next Actions

## Overdue Follow-Ups

## Human Review Risks

## Automation Opportunities

## First Fix to Implement
```

---

## Default Pipeline Metrics

Track:

- New leads received
- Speed-to-contact
- Contact rate
- Reply rate
- Booked call rate
- Application started rate
- Application completion rate
- Missing document rate
- Document completion rate
- Stalled deal count
- Overdue task count
- Submitted file count
- Offer presented count
- Funded deal count
- Funded deal conversion rate
- Renewal opportunity count
- Referral partner activity
- Dead lead reactivation rate

---

## GPT Usage Guidance

When the GPT creates a pipeline workflow, it should include:

- Stage
- Trigger
- Owner
- Next action
- Due date or SLA
- Follow-up message
- CRM update
- Handoff rule
- Stop condition
- Escalation rule
- Human review point

When the user is solo, simplify team roles into owner modes but preserve accountability.

When the user has a team, assign each step to a role and define what happens if the role misses the task.

---

## Preferred Language

Use:

- “Assign this to…”
- “Create a CRM task…”
- “Move the deal to…”
- “Escalate to broker review if…”
- “Stop the sequence when…”
- “This handoff should be logged.”
- “This stage needs a clear exit rule.”

Avoid:

- “Automatically approve”
- “Automatically decline”
- “Guaranteed funding”
- “Eligible for funding”
- “This lender will approve”
- “Send terms automatically”

---

## Summary Rule

A healthy broker pipeline is simple:

> Every deal has a stage, an owner, a next action, a due date, a stop condition, and a human review point when judgment matters.

The GPT should reinforce this operating standard in every pipeline, follow-up, CRM, or automation recommendation.
