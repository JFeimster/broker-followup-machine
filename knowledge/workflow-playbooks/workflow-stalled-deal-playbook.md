# workflow-stalled-deal-playbook.md

## Purpose

This knowledge file gives **Broker Follow-Up Machine GPT** a detailed playbook for reviving stalled borrower deals inside loan broker, business funding broker, and funding agency pipelines.

Use this file when the GPT needs to build, audit, or improve workflows for deals that were once active but have stopped moving because the borrower stopped replying, missed the next step, delayed documents, failed to book a call, went quiet after an offer discussion, or left a file sitting in the CRM without a clear owner.

The goal is to help brokers recover revenue that is already in the pipeline without sounding desperate, aggressive, careless, or compliance-risky.

---

## Core Principle

A stalled deal is not automatically a dead deal.

Most stalled deals fall into one of these categories:

1. The borrower is busy.
2. The borrower is confused.
3. The borrower is unsure what the next step is.
4. The borrower is nervous about documents or terms.
5. The broker did not assign a clear next action.
6. The CRM stage is wrong or too vague.
7. The deal needs human review before moving forward.
8. The borrower is no longer interested but nobody confirmed it.

A strong stalled-deal workflow should diagnose the stall before pushing harder.

Default rule:

> Do not chase blindly. Identify the likely reason the deal stalled, send the right message for that reason, and create a clear next action with an owner and due date.

---

## What Counts as a Stalled Deal?

A deal is stalled when it is in an active pipeline stage but has not advanced within the expected time window.

Common stalled stages:

- Contact Attempted
- Discovery Scheduled
- Application Started
- Application Completed
- Documents Requested
- Documents Received
- Ready for Broker Review
- Submitted to Lender
- Lender Review
- Offer Presented
- Renewal Candidate

A deal should not remain in an active stage without:

- Owner
- Next action
- Due date
- Last touch date
- Reason for stall
- Stop condition

---

## Common Stall Triggers

Use these as automation triggers or CRM audit filters.

### 3-Day Inactivity

Use for early rescue.

Examples:

- Borrower has not replied after initial engagement
- Application started but not completed
- Documents requested but not uploaded
- Call booked but borrower no-showed
- Deal owner has not logged a touchpoint

### 7-Day Inactivity

Use for stronger reactivation.

Examples:

- Borrower has gone quiet after multiple touches
- Missing documents remain unresolved
- Deal is waiting on borrower action
- Offer or option was discussed but borrower has not responded
- Referral partner lead is stalled

### 14-Day Inactivity

Use for decision point.

Examples:

- Deal should move to nurture, closed lost, or manager review
- Borrower needs a final soft touch
- Broker needs to decide whether to keep chasing
- High-value deal may need personal owner escalation

---

## CRM Setup

### Primary Stage Options

Keep the original deal stage if it is still accurate, then add a stalled status or tag.

Examples:

- Stage: Documents Requested
- Status: Stalled
- Tag: Stalled Deal Sequence

Do not create too many duplicate stages like “Stalled Docs,” “Stalled App,” and “Stalled Offer” unless the CRM team wants separate views.

### Recommended Statuses

- Stalled
- No Response
- Awaiting Borrower
- Awaiting Broker
- Awaiting Processor
- Awaiting Lender
- Follow-Up Paused
- Broker Review Needed
- Escalation Needed
- Nurture
- Closed Lost

### Recommended Tags

- Stalled Deal Sequence
- 3-Day Inactive
- 7-Day Inactive
- 14-Day Inactive
- No Response
- Missing Docs
- Incomplete Application
- Broker Review Required
- Human Review Required
- High Priority
- Referral Lead
- Offer Follow-Up
- Renewal Candidate
- Follow-Up Paused

### Required Fields

Every stalled deal should have:

- Current stage
- Current status
- Deal owner
- Last touch date
- Last borrower response date
- Next action
- Next action due date
- Reason for stall
- Priority
- Lead source
- Referral partner, if applicable
- Human review flag, if needed
- Stop condition

---

## Stalled Deal Reason Codes

Use a specific reason code instead of vague “stalled.”

Recommended reason codes:

- No response after contact
- Missed scheduled call
- Application incomplete
- Missing documents
- Partial documents received
- Borrower confused
- Borrower busy
- Borrower comparing options
- Borrower asked about terms
- Broker review overdue
- Processor review overdue
- Awaiting lender update
- Offer presented, no response
- Referral partner lead stalled
- Renewal outreach stalled
- Internal handoff missed
- No clear next action

The GPT should recommend these reason codes during audits.

---

## Role Ownership

### Broker / Sales Rep

Owns:

- Borrower re-engagement
- Discovery restart
- Offer follow-up
- Sensitive questions
- Terms, lender, underwriting, or approval-related conversations
- High-value stalled deal rescue

### Processor / Document Owner

Owns:

- Missing document stalls
- Partial upload follow-up
- Document checklist clarification
- File completeness review

### Intake Rep / VA

Owns:

- Routine reminders
- Call/SMS/email attempts
- Scheduling
- CRM cleanup
- Moving no-response files to nurture when approved

### Agency Owner / Manager

Owns:

- Overdue task review
- High-value stalled deal escalation
- Pipeline accountability
- Team handoff failures
- Stalled referral partner leads

### Solo Broker Version

For a solo broker, use operating modes:

- **Sales Mode:** revive conversation and book next action
- **Processing Mode:** resolve documents and file gaps
- **Admin Mode:** update CRM and schedule follow-up tasks
- **Review Mode:** pause before sensitive funding, approval, terms, underwriting, or lender-specific communication

Even if one person does everything, the workflow must still pause at review points.

---

# Stalled Deal Diagnosis Framework

Before writing a follow-up sequence, identify the stall type.

## 1. Borrower Silence Stall

Borrower stopped replying.

Use when:

- No response after prior engagement
- No answer to calls/texts
- Borrower has not confirmed next step

Primary goal:

- Get a simple reply or decision

Best channels:

- SMS first, then email, then call

---

## 2. Missing Action Stall

Borrower has not completed the next step.

Use when:

- Application incomplete
- Documents missing
- Signature missing
- Call not booked

Primary goal:

- Make the next step obvious and easy

Best channels:

- Email with checklist + SMS reminder

---

## 3. Confusion Stall

Borrower is not ignoring the broker; they do not understand what to do next.

Use when:

- Borrower asks repeated questions
- Borrower submits wrong documents
- Borrower says they are unsure
- Borrower keeps delaying

Primary goal:

- Clarify the next step and reduce friction

Best channels:

- Phone call + simple email recap

---

## 4. Trust / Sensitivity Stall

Borrower is hesitant because of documents, terms, privacy, or uncertainty.

Use when:

- Borrower asks why documents are needed
- Borrower worries about sharing information
- Borrower asks if they are approved
- Borrower asks about terms or lender fit

Primary goal:

- Pause automation and route to broker review

Best channels:

- Broker call or reviewed broker message

---

## 5. Internal Handoff Stall

The borrower is ready, but the team dropped the ball.

Use when:

- No owner assigned
- Broker review overdue
- Processor review overdue
- Lender status not checked
- CRM task overdue

Primary goal:

- Assign ownership and complete internal action

Best channels:

- Internal task, Slack/email notification, manager escalation

---

## 6. Offer / Decision Stall

Borrower has seen an offer or option but has not responded.

Use when:

- Offer presented
- Borrower said they need time
- Borrower is comparing options
- Borrower asks detailed terms questions

Primary goal:

- Book a reviewed conversation, not pressure acceptance

Best channels:

- Broker call + reviewed follow-up email

Human review required.

---

# Standard Stalled Deal Timeline

Use this default framework unless the user provides a different SLA.

| Timing | Purpose | Channel | Owner |
|---|---|---|---|
| Day 3 | Early rescue | SMS/email | Deal owner |
| Day 5 | Remove blocker | Call/SMS | Deal owner |
| Day 7 | Escalate or clarify decision | Email/call | Broker/manager |
| Day 10 | Soft decision message | SMS/email | Owner/automation |
| Day 14 | Final active follow-up | Email/SMS | Owner |
| After Day 14 | Move to nurture/closed lost | CRM | Admin/owner |

For high-priority deals, referral leads, or offer-stage files, escalate earlier.

---

# 3-Day Inactivity Workflow

## Goal

Catch the deal before it becomes cold.

## Trigger

No borrower response or no stage movement for 3 days.

## CRM Setup

- Keep current stage
- Status: Stalled
- Tag: 3-Day Inactive
- Task: Check stalled deal
- Owner: Deal owner
- Due: Same day

## SMS Template

Hi [First Name], quick check-in — do you still want to keep this moving, or should we pause it for now?

## Email Template

**Subject:** Quick check-in on your file

Hi [First Name],

I wanted to check in on your file.

The next step is [specific next step]. If you still want to keep this moving, reply here and we’ll pick it back up.

If timing changed, no problem — just let me know and I’ll update the file.

Thanks,
[Sender Name]

## Call Opener

Hi [First Name], this is [Sender Name] with [Company]. I’m checking in because your file has been quiet for a few days and I wanted to see if you still want to keep it moving or if we should pause for now.

## CRM Action

- Log touchpoint
- Set next follow-up due in 2 days
- If borrower replies, stop stalled sequence and move to correct stage

---

# 7-Day Inactivity Workflow

## Goal

Force clarity: continue, pause, or escalate.

## Trigger

No response or no stage movement after 7 days.

## CRM Setup

- Status: Stalled / No Response
- Tag: 7-Day Inactive
- Task: Escalate stalled deal review
- Owner: Broker or manager for high-priority files

## SMS Template

Hi [First Name], I don’t want to keep chasing you if timing changed. Should we keep your file open, or pause this for now?

## Email Template

**Subject:** Should we keep this open?

Hi [First Name],

We haven’t been able to move your file forward, so I wanted to check before we pause active follow-up.

Should we keep this open, or is now not the right time?

Either answer is fine — I just want to keep the file accurate.

Thanks,
[Sender Name]

## Broker Escalation Message for High-Value Deal

Hi [First Name], this is [Broker Name]. I wanted to personally check in because your file has stalled and I don’t want you to lose momentum if you still want to move forward.

Is there a question or next step holding this up?

## CRM Action

- Add reason code if known
- Escalate high-priority or referral leads
- Create next task due in 3–5 days
- Pause automation if borrower asks sensitive questions

---

# 14-Day Inactivity Workflow

## Goal

Close active loop without burning the relationship.

## Trigger

No response or no stage movement after 14 days.

## CRM Setup

- Status: No Response or Follow-Up Paused
- Tag: 14-Day Inactive
- Consider: Nurture, Dead Lead Revival, or Closed Lost

## Email Template

**Subject:** Closing the loop for now

Hi [First Name],

I haven’t been able to connect, so I’m going to pause active follow-up for now.

If you still want to continue, just reply to this email and we can reopen the conversation.

Thanks,
[Sender Name]

## SMS Template

Hi [First Name], I’m going to pause active follow-up for now. If you still want to continue, just reply here and we can reopen it.

## CRM Action

- Stop active stalled-deal sequence
- Move to Nurture or Closed Lost based on policy
- Add closed lost reason if closing
- Set reactivation date if appropriate
- Keep relationship-friendly notes

---

# Stage-Specific Stalled Deal Playbooks

## Application Started but Not Completed

### Likely Problem

The borrower got distracted, found the form too long, or was unsure whether to continue.

### SMS

Hi [First Name], looks like the application is still unfinished. Do you want me to resend the link, or would a quick call be easier?

### Email

**Subject:** Need help finishing the application?

Hi [First Name],

Your application looks like it is still incomplete.

If you want to keep moving, you can finish it here:

[Application Link]

If something is unclear, reply here and we’ll help with the next step.

Thanks,
[Sender Name]

### CRM Action

- Stage: Application Started
- Status: Application Incomplete
- Tag: Stalled Deal Sequence
- Task: Help borrower complete application

---

## Documents Requested but Not Received

### Likely Problem

Borrower is busy, confused, hesitant, or missing a specific item.

### SMS

Hi [First Name], quick check — are you able to upload the remaining documents today, or is there one item holding things up?

### Email

**Subject:** Is one document holding this up?

Hi [First Name],

We’re still waiting on the remaining items for your file.

Still needed:

- [Missing Document 1]
- [Missing Document 2]

If one of these is hard to access, reply and let us know. We’ll help clarify the next step.

Upload link:
[Secure Upload Link]

Thanks,
[Sender Name]

### Human Review Trigger

If borrower asks whether the documents are enough to qualify, pause and route to broker review.

---

## Discovery Scheduled but No-Show

### Likely Problem

Borrower forgot, got busy, or was not committed.

### SMS

Hi [First Name], sorry we missed you for the call. Do you want to reschedule, or should we pause this for now?

### Email

**Subject:** Want to reschedule?

Hi [First Name],

Looks like we missed each other for the scheduled call.

If you still want to review next steps, you can grab another time here:

[Scheduling Link]

If timing changed, no problem — just let me know.

Thanks,
[Sender Name]

### CRM Action

- Status: No-show
- Task: Reschedule discovery
- If no response after second no-show, move to nurture or manager review

---

## Documents Received but Broker Review Overdue

### Likely Problem

Internal handoff failure.

### Borrower Message

Use only if needed:

Hi [First Name], thanks again for sending the items over. The team is reviewing the file and will follow up with the next step once review is complete.

### Internal Task

Task: Broker review overdue

Priority: High

Due: Same day

Notes:

- Documents received: [date]
- Last borrower touch: [date]
- Next action needed: Review file and confirm next step

### GPT Warning

This is not a borrower problem. Do not send more borrower reminders if the internal team owns the delay.

---

## Submitted to Lender but No Update

### Likely Problem

The file is waiting on lender/funding partner response or internal status check.

### Internal Task

Task: Check lender status

Owner: Broker

Due: Same day or within 24 hours

### Borrower Update Template

Hi [First Name], quick update — your file is still in review. We’ll follow up once there is a confirmed next step. If anything else is needed, we’ll let you know.

### Human Review

Required before lender-specific claims or timelines.

Do not say:

- “The lender should approve this.”
- “You’ll hear back today.”
- “This looks good.”

Unless verified and reviewed.

---

## Offer Presented but Borrower Went Quiet

### Likely Problem

Borrower is comparing options, unsure, uncomfortable with terms, or avoiding a decision.

### Human Review Required

Offer follow-up should be reviewed by a broker before sending.

### Broker SMS

Hi [First Name], wanted to check in on the option we discussed. Do you have questions, or would it be better to pause this for now?

### Broker Email

**Subject:** Any questions on the next step?

Hi [First Name],

I wanted to follow up on the option we reviewed.

If you have questions, I’m happy to walk through them. If timing changed or this is not the right fit, that is fine too — I just want to make sure we close the loop correctly.

Thanks,
[Broker Name]

### Avoid

- Pressure tactics
- Artificial urgency
- “You should take this” language
- Guarantees
- Unverified comparisons

---

## Renewal Candidate Stalled

### Likely Problem

Client is not ready, not interested, or missed the renewal message.

### SMS

Hi [First Name], quick check-in — do you want to review options again, or should I follow up another time?

### Email

**Subject:** Should I check back later?

Hi [First Name],

I wanted to check whether now is a good time to review your current funding needs, or if I should follow up later.

Either way is fine — I just want to keep the timing useful.

Thanks,
[Sender Name]

### Compliance Note

Do not say the borrower is eligible, pre-approved, or guaranteed for renewal.

---

# Objection and Blocker Responses

## “I’ve been busy.”

Totally understand. Do you want to keep this moving now, or should I pause follow-up and check back later?

## “I’m still thinking about it.”

No problem. What would help you decide the next step — a quick call, a recap email, or pausing for now?

## “I already sent everything.”

Thanks for letting me know. We’ll check the file and confirm what we have. If anything is still missing, we’ll send a clear updated checklist.

## “I found another option.”

Got it. Thanks for letting us know. Should we close this out for now, or would you still like us to keep the file open in case timing changes?

## “I don’t want to move forward.”

Understood. We’ll update the file and pause follow-up. If anything changes later, you can reach back out.

## “Am I approved?”

That needs broker review before we comment on options or next steps. I’ll flag this for review.

## “What rate/payment can I get?”

A broker should review the file before discussing any terms. I’ll flag this so the right person can follow up.

---

# Automation Map

Use this minimum viable automation for stalled deal revival.

```text
Trigger: Active deal has no stage movement or logged touch for defined period

Conditions:
- Deal is not closed
- Deal is not funded
- Deal is not Do Not Contact
- Deal does not already have Human Review Required unless assigned

Actions:
1. Identify current stage
2. Identify owner
3. Identify last touch date
4. Identify next action
5. Add tag = Stalled Deal Sequence
6. Add inactivity tag = 3-Day, 7-Day, or 14-Day Inactive
7. Create owner task
8. Send stage-appropriate follow-up if safe
9. Wait defined period
10. If borrower replies, stop stalled sequence
11. If no response and high priority, escalate
12. If no response after final touch, move to nurture or closed lost
```

---

# If/Then Rules

## If borrower replies

- Stop stalled sequence
- Update last response date
- Move to correct stage
- Create next task
- Assign owner

## If borrower books a call

- Stop stalled sequence
- Move to Discovery Scheduled
- Send confirmation
- Create call prep task

## If borrower completes the missing action

- Stop stalled sequence
- Move to the next stage
- Assign review owner
- Create next task

## If borrower asks about terms, approval, or lender fit

- Pause automation
- Add Human Review Required
- Add Broker Review Required
- Create broker task
- Do not send automated substantive answer

## If borrower opts out

- Stop all follow-up
- Apply Do Not Contact
- Log opt-out
- Notify owner if needed

## If the stall is internal

- Do not send borrower pressure messages
- Create internal overdue task
- Escalate to manager if overdue
- Update borrower only with safe, generic status if needed

---

# Human Review Points

Human review is required before:

- Offer follow-up
- Terms discussion
- Approval or eligibility response
- Decline or not-a-fit messaging
- Lender-specific claims
- Underwriting discussion
- Sensitive document interpretation
- Borrower complaint or dispute response
- Referral partner update involving borrower-specific details

Use this phrase:

> “This should be reviewed by a broker before sending.”

---

# Metrics to Track

Track these KPIs:

- Number of stalled active deals
- Stalled deals by stage
- Stalled deals by owner
- Average days stalled
- 3-day rescue response rate
- 7-day reactivation response rate
- 14-day close-loop rate
- Stalled-to-active conversion rate
- Stalled-to-funded conversion rate
- Closed lost due to no response
- Closed lost due to missing documents
- Internal handoff overdue count
- Broker review overdue count
- High-priority stalled deal count
- Referral lead stall rate

---

# Pipeline Audit Checklist

When auditing stalled deals, check:

- Does every active deal have an owner?
- Does every active deal have a next action?
- Does every active deal have a due date?
- Is the stage still accurate?
- Is the stall reason documented?
- Is the last touch date current?
- Is the borrower actually waiting on the team?
- Is the team mistakenly waiting on the borrower?
- Is human review required?
- Are high-priority deals escalated?
- Are referral partner leads being handled carefully?
- Are no-response deals moved to nurture after final touch?
- Are closed lost reasons tracked?

---

# GPT Output Template

When creating a stalled-deal workflow, use this structure:

```markdown
# Stalled Deal Revival Workflow

## 1. Goal
[Business outcome]

## 2. Stall Diagnosis
Current stage:
Days inactive:
Likely stall reason:
Borrower-side or internal-side stall:

## 3. CRM Setup
Stage:
Status:
Priority:
Tags:
Owner:
Task:
Due:

## 4. Follow-Up Sequence
| Step | Timing | Channel | Message Goal | Owner | Stop Condition |
|---|---:|---|---|---|---|

## 5. SMS Templates
[Templates]

## 6. Email Templates
[Templates]

## 7. Call Script
[Script]

## 8. Automation Rules
[Trigger, condition, action, wait, stop condition]

## 9. Escalation Rules
[When to escalate and to whom]

## 10. Human Review Points
[Where automation pauses]

## 11. Metrics
[KPIs]

## 12. Next Best Action
[One implementation step]
```

---

# Complete Example Workflow

## Scenario

A borrower completed discovery, started the application, but has not responded for 7 days.

## Stall Diagnosis

- Current stage: Application Started
- Days inactive: 7
- Likely stall reason: Application incomplete / borrower busy or uncertain
- Stall side: Borrower-side
- Human review needed: Not initially, unless borrower asks about approval, terms, or lender fit

## CRM Setup

- Stage: Application Started
- Status: Stalled
- Priority: Warm
- Tags: Stalled Deal Sequence, 7-Day Inactive, Application Incomplete
- Owner: Broker or intake rep
- Task: Revive incomplete application
- Due: Same day

## Sequence

| Step | Timing | Channel | Action | Owner | Stop Condition |
|---|---:|---|---|---|---|
| 1 | Day 7 | SMS | Ask whether to keep moving | Owner | Reply/opt-out |
| 2 | Day 8 | Email | Resend application link | Owner/automation | Application completed |
| 3 | Day 10 | Call | Remove blocker | Owner | Connected |
| 4 | Day 12 | SMS | Ask if timing changed | Owner | Reply |
| 5 | Day 14 | Email | Final soft close-loop | Automation | Reply |
| 6 | After Day 14 | CRM | Move to nurture/no response | Admin | Manual reopen |

## SMS

Hi [First Name], checking back on your application. Do you still want to keep this moving, or should we pause it for now?

## Email

**Subject:** Want to keep this moving?

Hi [First Name],

Your application is still unfinished, so I wanted to check before we pause active follow-up.

If you still want to continue, you can finish the next step here:

[Application Link]

If now is not the right time, just reply and I’ll update the file.

Thanks,
[Sender Name]

## Call Opener

Hi [First Name], this is [Sender Name] with [Company]. I’m checking in because your application has been quiet for a few days. I wanted to see if you had questions, needed the link again, or wanted us to pause this for now.

## Human Review Rule

If borrower asks whether completing the application means they qualify, pause and assign broker review.

Safe response:

“Completing the application helps the team review the file, but a broker should review everything before discussing options or next steps.”

## Next Best Action

Create a CRM automation that identifies active deals with no touch or stage movement after 3, 7, and 14 days, then creates the appropriate owner task and sends only safe, stage-specific follow-up messages.

---

# Summary Rule

A stalled-deal workflow should diagnose before it chases.

The GPT should help brokers revive active opportunities by identifying the stall reason, assigning ownership, using stage-specific messages, escalating high-value deals, avoiding pressure tactics, and pausing before sensitive funding, underwriting, approval, terms, offer, lender-specific, or compliance-related communication.
