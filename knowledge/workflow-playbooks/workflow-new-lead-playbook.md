# Workflow New Lead Playbook

## Purpose

This knowledge file gives **Broker Follow-Up Machine GPT** a complete playbook for building new lead follow-up workflows for loan brokers, business funding brokers, independent brokers, funding agencies, referral partner teams, and broker operators.

Use this file when the user asks for:

- New lead follow-up sequences
- Speed-to-contact workflows
- Borrower intake follow-up
- First call scripts
- New lead SMS templates
- New lead email templates
- CRM stage setup
- Automation maps for fresh leads
- Broker or team handoff rules
- New lead pipeline audits

The goal is simple:

> Every new lead should receive a fast, clear, human follow-up with a defined owner, next action, due date, stop condition, and review rule.

---

## Core New Lead Philosophy

New leads go cold quickly.

The first workflow a broker should usually build is the **new lead speed-to-contact sequence** because it protects the highest-intent opportunities before they disappear, shop elsewhere, forget they submitted a form, or become harder to reach.

A new lead workflow should accomplish five things:

1. Confirm the lead was received.
2. Assign a clear owner.
3. Attempt contact quickly.
4. Move the borrower to the correct next stage.
5. Stop automation when the borrower replies, books a call, opts out, or needs human review.

Do not let new leads sit unassigned.

Every new lead must have:

- Stage
- Owner
- Lead source
- Contact attempt status
- Next action
- Due date
- Last touch date
- Stop condition

---

## Recommended Default SLA

Use these timing targets unless the user provides different standards.

| Action | Recommended Timing |
|---|---:|
| CRM record created | Immediately |
| Owner assigned | Immediately |
| Confirmation email/SMS | Immediately |
| First call attempt | Within 5 minutes |
| First SMS | Within 5 minutes |
| First email | Within 5 minutes |
| Second attempt | Within 30–60 minutes |
| Same-day follow-up | 2–4 hours later |
| Day 1 follow-up | 24 hours later |
| Day 2 follow-up | 48 hours later |
| Day 3–5 follow-up | Soft final attempt or nurture handoff |

Important:

These are recommended operating targets, not legal or compliance requirements.

---

## Best-Fit Use Cases

Use this workflow for:

- Website form leads
- Paid ad leads
- Referral partner leads
- Marketplace leads
- Cold inbound inquiries
- Missed call leads
- Chat widget leads
- Imported warm leads
- Webinar or event leads
- Renewal inquiries
- Repeat client inquiries

Do not use aggressive sales language. The workflow should be fast and persistent, but respectful.

---

# New Lead Workflow Overview

## Trigger

A new borrower or funding lead enters the CRM.

Examples:

- Website form submitted
- Facebook or Google lead received
- Referral partner submits a client
- Borrower calls and leaves voicemail
- Borrower sends email inquiry
- Chat widget creates a lead
- Spreadsheet import creates a new lead

## Goal

Contact the borrower quickly, confirm their funding need, guide them to the right next step, and prevent the lead from becoming stale.

## Primary Conversion Goal

Usually one of these:

- Book discovery call
- Complete application
- Finish intake form
- Upload required documents
- Reply with funding need
- Confirm best contact time

## Default CRM Stage

`New Lead`

## Default Status

`Needs Contact`

## Default Priority

`Hot` if the lead is fresh and high-intent.

## Default Tags

- New Lead Sequence
- Needs Contact
- Lead Source: [source]
- Owner Needed or Assigned to [role]

---

# Role and Ownership Model

## Team-Based Agency

### Intake Rep or VA

Owns:

- Immediate confirmation
- First call attempt
- First SMS/email
- Basic qualification questions
- Scheduling
- CRM cleanup

Does not own:

- Funding terms
- Approval statements
- Lender recommendations
- Decline messaging

### Broker or Sales Rep

Owns:

- Discovery conversation
- Funding need review
- Next-step recommendation
- Broker review points
- Sensitive borrower questions

### Processor

Owns:

- Application completeness
- Document checklist
- File organization
- Missing document handoff after the lead progresses

### Agency Owner / Manager

Owns:

- SLA monitoring
- Escalations
- Overdue lead review
- Team accountability
- High-value lead rescue

---

## Solo Broker Version

A solo broker should treat roles as operating modes:

- **Sales Mode:** Call, text, qualify, and book.
- **Admin Mode:** Update CRM, create tasks, log touchpoints.
- **Processing Mode:** Review application completeness and request documents.
- **Review Mode:** Pause before terms, offers, lender-specific statements, underwriting comments, or declines.

Even if the same person does everything, the workflow should still pause at review points.

---

# Standard New Lead Sequence

## Sequence Summary

Use this as the default workflow for a fresh inbound borrower lead.

| Step | Timing | Channel | Goal |
|---|---:|---|---|
| 1 | Immediate | CRM | Create record and assign owner |
| 2 | Immediate | Email | Confirm receipt and set expectation |
| 3 | Within 5 min | Call | Reach borrower while intent is high |
| 4 | Within 5 min | SMS | Make it easy to reply |
| 5 | 30–60 min | Call/SMS | Second touch |
| 6 | 2–4 hours | Email/SMS | Same-day follow-up |
| 7 | 24 hours | Email/SMS/Call | Day 1 follow-up |
| 8 | 48 hours | SMS/Call | Day 2 follow-up |
| 9 | 3–5 days | Email/SMS | Final soft follow-up |
| 10 | After final touch | CRM | Move to nurture/dead lead if no response |

---

## Step 1 — Create CRM Record

**Timing:** Immediately

**Owner:** Automation or admin

**CRM action:**

- Create borrower/contact record
- Create deal/opportunity
- Set stage: `New Lead`
- Set status: `Needs Contact`
- Set priority: `Hot`
- Assign owner
- Log lead source
- Create task: `Contact new lead`
- Due: now / within 5 minutes

**Automation logic:**

```text
Trigger: New lead submitted
Condition: New record does not already exist
Action: Create contact/deal
Action: Assign owner
Action: Set stage = New Lead
Action: Set status = Needs Contact
Action: Create task = Contact new lead
Action: Notify assigned owner
```

**Stop condition:** Duplicate detected, bad contact info, or lead opts out.

---

## Step 2 — Immediate Confirmation Email

**Timing:** Immediately

**Channel:** Email

**Goal:** Confirm the request and set expectation.

**Safe to automate:** Yes, if generic.

### Email Template: New Lead Confirmation

**Subject:** Got your funding request

Hi first_name,

Thanks for reaching out. We received your request and someone from our team will review the details and follow up with next steps.

If you want to move faster, reply with the best number and time to reach you.

Thanks,
broker_or_team_name

### Alternate Email: Application Next Step

**Subject:** Next step for your funding request

Hi first_name,

Thanks for submitting your request. The next step is to confirm a few details so the team can review the file properly.

Please reply with the best time to reach you today, or complete the next step here:

application_or_calendar_link

Thanks,
broker_or_team_name

---

## Step 3 — First Call Attempt

**Timing:** Within 5 minutes

**Channel:** Phone call

**Goal:** Connect while intent is highest.

**Owner:** Intake rep, broker, or solo operator.

### Call Opener

Hi first_name, this is name with company. I saw your request come through and wanted to quickly confirm what you’re looking for so we can point you in the right direction.

Do you have two minutes now?

### If They Have Time

Great. I just need to confirm a few basics:

1. What type of funding are you looking for?
2. About how much are you looking to explore?
3. How soon are you trying to move?
4. Is this for a business, property, or another use case?
5. What’s the best email and phone number for next steps?

### If They Are Busy

No problem. What’s a better time today for a quick call? I can also text you the next step if that’s easier.

### CRM Action After Call

- If connected: move to `Connected / Discovery Started`
- If booked call: move to `Discovery Scheduled`
- If application needed: move to `Application Started` or `Application Needed`
- If no answer: keep in `Contact Attempted`
- Log call result
- Create next task

---

## Step 4 — First SMS

**Timing:** Within 5 minutes, ideally after or near first call attempt.

**Channel:** SMS

**Goal:** Make reply easy.

**Safe to automate:** Usually yes, if compliant with consent and opt-out practices.

### SMS Template: Soft Intro

Hi first_name, this is name with company. We received your funding request and I just tried reaching you. What’s the best time for a quick call today?

### SMS Template: Direct Next Step

Hi first_name, thanks for reaching out to company. Quick question — are you looking to review funding options now, or just gathering information?

### SMS Template: Application Link

Hi first_name, this is name with company. We received your request. You can complete the next step here when ready: link

### SMS Template: Referral Lead

Hi first_name, this is name with company. referral_partner_name passed your info along so we could follow up. What’s the best time today for a quick call?

**Stop condition:** Borrower replies, opts out, books call, or asks a sensitive funding/approval question.

---

## Step 5 — Second Touch

**Timing:** 30–60 minutes after first attempt

**Channel:** Call or SMS

**Goal:** Reach lead before they go cold.

### SMS Template

Hi first_name, just checking back. I don’t want you to miss the next step if you’re still looking into funding. Should I call later today or send the details by email?

### Voicemail Script

Hi first_name, this is name with company. I’m following up on the funding request you submitted. I’ll also send a quick text so you can reply there if that’s easier. You can reach me at phone.

**CRM action:** Log touchpoint and update last touch date.

---

## Step 6 — Same-Day Follow-Up

**Timing:** 2–4 hours after lead submission if no reply.

**Channel:** Email and/or SMS

**Goal:** Give a simple choice.

### Email Template: Same-Day Follow-Up

**Subject:** Quick question about your request

Hi first_name,

I wanted to follow up on your request from earlier today.

What would be most helpful right now?

1. A quick call to review next steps
2. A link to complete the application
3. A simple checklist of what we need to review

Reply with 1, 2, or 3 and I’ll point you in the right direction.

Thanks,
name

### SMS Template: Same-Day Choice

Hi first_name, quick follow-up — do you want a call, an application link, or a simple checklist of next steps? Reply 1, 2, or 3.

---

## Step 7 — Day 1 Follow-Up

**Timing:** 24 hours after lead submission

**Channel:** Email, SMS, and/or call

**Goal:** Re-open conversation without pressure.

### Email Template: Day 1

**Subject:** Still want us to review this?

Hi first_name,

Just checking in — do you still want the team to review your funding request?

If yes, the next step is simple: reply with the best time to reach you or use this link to continue:

link

If now is not the right time, no problem. Just let me know and I’ll update your file.

Thanks,
name

### SMS Template: Day 1

Hi first_name, should we still keep your funding request open? Reply YES and I’ll help with the next step, or NOT NOW and I’ll update the file.

---

## Step 8 — Day 2 Follow-Up

**Timing:** 48 hours after lead submission

**Channel:** SMS or call

**Goal:** Identify if lead is still active.

### SMS Template: Day 2

Hi first_name, I don’t want to keep chasing you if timing changed. Are you still looking into funding, or should I close this out for now?

### Email Template: Day 2

**Subject:** Should I close this out?

Hi first_name,

I haven’t been able to reach you, so I wanted to check before closing the loop.

Are you still interested in reviewing next steps, or should I mark this as not the right time?

Either answer is fine — I just want to keep your file accurate.

Thanks,
name

---

## Step 9 — Final Soft Touch

**Timing:** Day 3–5

**Channel:** Email and/or SMS

**Goal:** Close the active loop and move to nurture if no response.

### Email Template: Final Touch

**Subject:** Closing the loop for now

Hi first_name,

I haven’t been able to connect, so I’m going to close the active follow-up for now.

If you still want to review your funding request, just reply to this email and we can pick it back up.

Thanks,
name

### SMS Template: Final Touch

Hi first_name, I’m going to close the active follow-up for now. If you still want to review next steps, just reply here and I’ll reopen it.

**CRM action:**

- Move to `Nurture` or `Dead Lead Revival`
- Set status: `No Response`
- Add closed/lost reason if applicable
- Stop active sequence

---

# High-Priority Referral Lead Sequence

Referral partner leads should usually receive faster and more careful handling.

## Recommended Tags

- Referral Lead
- Partner Lead
- High Priority
- Needs Contact
- New Lead Sequence

## SLA

- Contact borrower within 5 minutes if possible.
- Acknowledge referral partner within 15 minutes.
- Do not share sensitive borrower details with partner without permission.

## Partner Acknowledgment Template

Hi partner_name, thanks for sending borrower_first_name over. We received the referral and will follow up with them shortly. I’ll keep you posted as appropriate.

## Borrower SMS Template

Hi borrower_first_name, this is name with company. partner_name suggested we connect. What’s the best time today for a quick call?

## Human Review Note

Partner updates should stay generic unless the borrower has authorized sharing details.

---

# Missed Call New Lead Sequence

Use when a borrower called but did not connect.

## Trigger

Missed inbound call.

## Immediate SMS

Hi first_name, sorry we missed your call. This is name with company. Are you looking for help with a funding request? I can call you back shortly.

## Voicemail Callback Script

Hi first_name, this is name returning your call from company. I’ll also send a quick text so you can reply there if that’s easier. My number is phone.

## CRM Action

- Create or update contact
- Stage: New Lead or Contact Attempted
- Status: Needs Contact
- Task: Return missed call
- Due: Immediately

---

# Paid Ad New Lead Sequence

Paid ad leads often require clarification because intent may be lower.

## SMS Template

Hi first_name, this is name with company. You recently requested information about funding options. Are you actively looking now, or just comparing options?

## Email Template

**Subject:** Your funding request

Hi first_name,

Thanks for requesting more information.

To point you in the right direction, can you reply with:

1. What type of funding you’re looking for
2. About how much you want to explore
3. How soon you’re trying to move

Once we have that, the team can suggest the next step for review.

Thanks,
name

## Automation Note

Do not over-qualify automatically. The goal is to start the conversation and route the lead.

---

# Website Form New Lead Sequence

Website leads usually expect fast follow-up.

## Immediate Email

**Subject:** We received your request

Hi first_name,

We received your request and will follow up soon.

If you want to move faster, you can reply with the best time to reach you today.

Thanks,
company

## Immediate SMS

Hi first_name, this is name with company. We received your request and I wanted to quickly confirm the best next step. Do you have a few minutes today?

## CRM Action

- Assign owner immediately
- Create first call task
- Add Website Lead tag
- Start new lead sequence

---

# New Lead Automation Map

Use this minimum viable automation map.

```text
Trigger: New lead submitted

Actions:
1. Create/update contact
2. Create/update deal/opportunity
3. Set stage = New Lead
4. Set status = Needs Contact
5. Add tag = New Lead Sequence
6. Add lead source tag
7. Assign owner
8. Create task = Contact new lead
9. Send confirmation email
10. Send internal notification
11. Wait 5 minutes
12. If no owner activity logged, alert owner/manager
13. Wait 24 hours
14. If no reply, send Day 1 follow-up
15. Wait 48 hours
16. If no reply, send Day 2 follow-up
17. Wait 3–5 days
18. If no reply, move to Nurture or Dead Lead Revival
```

---

# Conditional Logic

## If Borrower Replies

Stop new lead automation.

Then:

- Assign owner if not already assigned
- Create next task
- Move to `Connected / Discovery Started`
- Log response

## If Borrower Books Call

Stop outreach sequence.

Then:

- Move to `Discovery Scheduled`
- Send confirmation
- Create call prep task
- Add calendar event if connected

## If Borrower Completes Application

Stop new lead sequence.

Then:

- Move to `Application Completed`
- Create review task
- Assign processor or broker

## If Borrower Asks About Approval, Terms, or Lender Fit

Pause automation.

Then:

- Add `Human Review Required`
- Add `Broker Review Required`
- Create broker task
- Do not send automated answer

Safe response:

“Good question. A broker should review the details before we comment on options or next steps. I’ll flag this for review.”

## If Borrower Opts Out

Stop sequence immediately.

Then:

- Add `Do Not Contact`
- Log opt-out
- Notify owner if needed

## If Contact Info Is Bad

Then:

- Set status: `Bad Contact Info`
- Create cleanup task if alternate info exists
- Otherwise move to closed/nurture based on CRM policy

---

# CRM Stage and Status Recommendations

## Stage Options

- New Lead
- Contact Attempted
- Connected / Discovery Started
- Discovery Scheduled
- Application Started
- Application Completed
- Documents Requested
- Nurture
- Closed Lost

## Status Options

- Needs Contact
- Contact Attempted
- Awaiting Borrower
- Call Booked
- Application Needed
- Application Incomplete
- Broker Review Needed
- No Response
- Do Not Contact

## Priority Options

- Hot
- Warm
- Cold
- High Priority
- Urgent Review

## Recommended New Lead Fields

- First Name
- Last Name
- Phone
- Email
- Lead Source
- Referral Partner
- Funding Need
- Requested Amount
- Business Name
- State/Location
- Stage
- Status
- Owner
- Last Touch Date
- Next Action
- Next Action Due
- Consent/Opt-in Status if available

---

# Human Review Points

Human review is required if the lead asks about:

- Approval
- Eligibility
- Qualification
- Funding terms
- Rates
- Fees
- Repayment amounts
- Lender fit
- Decline reasons
- Underwriting
- Credit or financial interpretation
- Sensitive documents

Do not automate answers to these questions.

Use this language:

“This should be reviewed by a broker before sending.”

---

# New Lead Metrics to Track

Track these metrics to improve the workflow:

- Speed to first contact
- First call attempt rate
- First 5-minute contact rate
- Reply rate
- Booked call rate
- Application start rate
- Application completion rate
- No-response rate
- Lead source conversion rate
- Referral partner lead conversion rate
- Owner response time
- Overdue task count
- Funded deal rate by lead source

---

# Pipeline Audit Checklist

When auditing a new lead process, check:

- Are new leads assigned immediately?
- Is there a 5-minute contact task?
- Does every lead have a source?
- Does every lead have an owner?
- Does every lead have a next action and due date?
- Is there a stop condition when a borrower replies?
- Is there a no-response sequence?
- Are opt-outs respected?
- Are sensitive questions routed to broker review?
- Are referral partner leads prioritized?
- Are stale leads moved to nurture or dead lead revival?
- Are team members held accountable for overdue tasks?

---

# GPT Output Template for New Lead Workflows

When the GPT creates a new lead workflow, use this format:

```markdown
# New Lead Follow-Up Workflow

## 1. Goal
[Business outcome]

## 2. Trigger
[What creates the lead]

## 3. Audience
[Borrower/lead type]

## 4. Owner
[Role responsible]

## 5. CRM Setup
Stage:
Status:
Priority:
Tags:
Task:
Due:

## 6. Follow-Up Sequence
| Step | Timing | Channel | Message/Action | Owner | Stop Condition |
|---|---:|---|---|---|---|

## 7. Call Script
[Script]

## 8. SMS Templates
[Templates]

## 9. Email Templates
[Templates]

## 10. Automation Rules
[Trigger, condition, action, wait, stop condition]

## 11. Human Review Points
[Where automation pauses]

## 12. Metrics
[KPIs]

## 13. Next Best Action
[One implementation step]
```

---

# Complete Example Workflow

## Scenario

A funding agency receives a new website lead from a business owner requesting working capital.

## CRM Setup

- Stage: New Lead
- Status: Needs Contact
- Priority: Hot
- Tags: Website Lead, New Lead Sequence
- Owner: Intake Rep
- Task: Contact new lead
- Due: Immediately

## Follow-Up Sequence

| Step | Timing | Channel | Action | Owner | Stop Condition |
|---|---:|---|---|---|---|
| 1 | Immediate | CRM | Create record and assign owner | Automation | Duplicate/invalid lead |
| 2 | Immediate | Email | Send confirmation email | Automation | Reply |
| 3 | 5 min | Call | First call attempt | Intake | Connected |
| 4 | 5 min | SMS | Send quick intro text | Automation/Intake | Reply/opt-out |
| 5 | 60 min | Call | Second call attempt | Intake | Connected |
| 6 | 2–4 hrs | SMS | Offer call/application/checklist choice | Automation | Reply |
| 7 | 24 hrs | Email/SMS | Ask if still interested | Automation | Reply |
| 8 | 48 hrs | SMS | Ask whether to close out | Automation | Reply |
| 9 | Day 3–5 | Email | Final soft touch | Automation | Reply |
| 10 | After final touch | CRM | Move to nurture/no response | Automation/Admin | Manual reopen |

## First SMS

Hi first_name, this is name with company. We received your funding request and I just tried reaching you. What’s the best time for a quick call today?

## First Email

**Subject:** Got your funding request

Hi first_name,

Thanks for reaching out. We received your request and someone from our team will review the details and follow up with next steps.

If you want to move faster, reply with the best number and time to reach you.

Thanks,
name

## Call Script

Hi first_name, this is name with company. I saw your request come through and wanted to quickly confirm what you’re looking for so we can point you in the right direction. Do you have two minutes now?

## Human Review Points

Pause automation if borrower asks:

- “Am I approved?”
- “What rate can I get?”
- “How much do I qualify for?”
- “Which lender will approve me?”
- “Why was I declined before?”

## Next Best Action

Build the CRM trigger that creates the lead record, assigns an owner, sends the confirmation email, and creates the first call task due immediately.

---

# Summary Rule

New lead follow-up should be fast, clear, respectful, and operationally tight.

The GPT should help brokers build workflows that contact leads quickly, assign ownership, create next actions, stop when the borrower responds, and pause before any sensitive funding, underwriting, approval, terms, or lender-specific discussion.
