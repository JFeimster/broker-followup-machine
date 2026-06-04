# workflow-missing-documents-playbook.md

## Purpose

This knowledge file gives **Broker Follow-Up Machine GPT** a detailed operating playbook for missing-document follow-up workflows inside loan broker, business funding broker, and funding agency pipelines.

Use this file when the GPT needs to build, audit, or improve workflows for borrowers who have not yet submitted required documents such as bank statements, IDs, tax returns, invoices, merchant statements, ownership documents, voided checks, or application signatures.

The goal is to help brokers collect documents faster without sounding desperate, pushy, careless, or compliance-risky.

---

## Core Principle

Missing documents are one of the highest-value workflow problems in a broker pipeline because they create hidden revenue leakage.

A borrower may be interested, responsive, and potentially valuable, but the deal stalls because nobody owns document collection, the borrower is unclear on what is missing, or reminders are too vague.

A strong missing-document workflow should answer five questions:

1. What exactly is missing?
2. Who owns the follow-up?
3. When is the next reminder due?
4. What channel should be used?
5. What stops, escalates, or pauses the sequence?

Default rule:

> Never ask for “documents” generically when the borrower needs a specific checklist.

Bad: “Please send your docs.”

Better: “We’re still waiting on your last 3 months of business bank statements and a copy of your ID.”

---

## What This Workflow Should Do

A missing-document workflow should:

- Create a clear document checklist
- Assign an owner
- Set a due date
- Remind the borrower respectfully
- Explain why the documents matter at a high level
- Give the borrower a simple upload path
- Track which documents are missing vs. received
- Escalate stalled high-value files
- Stop once documents are received
- Pause if the borrower asks sensitive, lender-specific, or approval-related questions

It should not:

- Pressure or shame the borrower
- Promise approval after docs are submitted
- Ask for sensitive documents through insecure channels
- Invent document requirements
- Interpret financial documents automatically
- Tell the borrower they qualify or do not qualify
- Continue automation after the borrower opts out or raises a sensitive issue

---

## Recommended CRM Setup

### Primary Stage

`Documents Requested`

### Common Statuses

- Needs Docs
- Awaiting Borrower
- Docs Uploaded
- Docs Incomplete
- Document Review Needed
- Broker Review Needed
- No Response
- Follow-Up Paused

### Recommended Tags

- Missing Docs Sequence
- Missing Bank Statements
- Missing ID
- Missing Tax Returns
- Missing Merchant Statements
- Missing Invoices
- Missing Application Signature
- Missing Voided Check
- Sensitive Docs
- Human Review Required
- High Priority
- Stalled Deal

### Required Fields

Every record in a missing-documents workflow should have:

- Borrower name
- Deal stage
- File owner
- Document owner
- Missing document checklist
- Last document request date
- Last borrower response date
- Next follow-up date
- Preferred channel
- Upload link or secure delivery method
- Priority
- Stop condition

---

## Role Ownership

### Processor / Document Owner

Owns:

- Document checklist
- Document status updates
- Reminder sequence
- Upload link confirmation
- File completeness review

### Broker

Owns:

- Sensitive borrower questions
- Deal-specific guidance
- Lender-specific requests
- Approval, offer, or term-related questions
- Escalations for high-value files

### VA / Admin

Can own:

- Generic reminders
- CRM task creation
- Status updates
- Upload confirmation
- Follow-up scheduling

Should not own:

- Underwriting comments
- Document interpretation
- Terms or offers
- Decline messaging

### Agency Owner / Manager

Owns:

- Overdue pipeline review
- SLA enforcement
- Escalation policy
- Team accountability
- High-value stalled file rescue

### Solo Broker Version

For a solo broker, treat the workflow as four modes:

- **Admin Mode:** send reminders, update CRM, log touchpoints
- **Processing Mode:** check what is missing and organize docs
- **Sales Mode:** keep borrower engaged and reduce friction
- **Review Mode:** pause before sensitive document interpretation, lender discussion, terms, offers, approval, or decline language

Even if one person handles all roles, the automation should still pause at review points.

---

## Recommended Timing

Use these default targets unless the user provides different standards.

| Event | Recommended Timing |
|---|---:|
| Initial document checklist sent | Same day as request or review |
| First reminder | 24 hours after request |
| Second reminder | 48 hours after request |
| Third reminder | Day 3 or Day 4 |
| Call attempt | Day 3–5 for important files |
| Escalation review | Day 5–7 if high priority |
| Soft final reminder | Day 7–10 |
| Move to stalled/nurture | After final reminder if no response |

Use shorter timing for high-intent or time-sensitive files. Use softer timing for low-priority or long-term nurture records.

---

# Standard Missing Documents Workflow

## Trigger

The workflow starts when a borrower is missing one or more required items after application, intake, discovery, or file review.

Common triggers:

- Application submitted but documents missing
- Broker review identifies missing items
- Processor marks file incomplete
- Lender/funding partner requests additional information
- Borrower uploads partial documents
- Expired or incorrect document received

## Goal

Collect the required documents quickly and clearly so the file can move to review without confusion or repeated manual chasing.

## Primary Stage

`Documents Requested`

## Default Status

`Needs Docs` or `Awaiting Borrower`

## Default Owner

Processor, document collection owner, VA, or solo operator.

## Stop Conditions

Stop or pause the sequence when:

- All documents are received
- Borrower replies with a question
- Borrower uploads partial documents
- Borrower asks about approval, qualification, terms, or lender fit
- Borrower says they cannot provide a document
- Borrower opts out
- File moves to broker review
- Human owner manually pauses the workflow

---

# Step-by-Step Sequence

## Step 1 — Create the Missing Document Checklist

**Timing:** Immediately after review identifies missing items

**Owner:** Processor or broker

**CRM action:**

- Move stage to `Documents Requested`
- Set status to `Needs Docs`
- Add specific missing document tags
- Create task: `Send missing document checklist`
- Assign document owner
- Set due date

**Checklist format:**

```text
Still needed:
- [Document 1]
- [Document 2]
- [Document 3]

Already received:
- [Document A]
- [Document B]

Upload link:
[Secure upload link]
```

**Important:** The GPT should recommend a secure upload link rather than asking borrowers to text or email sensitive documents unless that is the broker’s approved process.

---

## Step 2 — Send Initial Document Request

**Timing:** Same day

**Channel:** Email, SMS, or both

**Goal:** Make the request clear, specific, and easy to complete.

### Initial Email Template

**Subject:** Documents needed to keep your file moving

Hi [First Name],

Thanks for getting the application started. To keep your file moving, we’re still waiting on the items below:

- [Missing Document 1]
- [Missing Document 2]
- [Missing Document 3]

You can upload them here:

[Secure Upload Link]

Once those are in, the team can continue reviewing your file and confirm the next step.

Thanks,
[Sender Name]

### Initial SMS Template

Hi [First Name], quick update — we’re still waiting on [short document list] to keep your file moving. You can upload them here: [Secure Upload Link]

### Message Notes

Use “keep your file moving” instead of “get you approved.”

Do not say:

- “Send these and you’ll qualify.”
- “Once we get these, you’re approved.”
- “This guarantees the next step.”

---

## Step 3 — First Reminder

**Timing:** 24 hours after initial request

**Channel:** SMS or email

**Goal:** Friendly reminder with low friction.

### SMS Template

Hi [First Name], friendly reminder — we’re still waiting on [missing items] for your file. Here’s the upload link again: [Secure Upload Link]

### Email Template

**Subject:** Quick reminder: missing items for your file

Hi [First Name],

Just a quick reminder that we’re still waiting on:

- [Missing Document 1]
- [Missing Document 2]

Upload link:
[Secure Upload Link]

If you already sent these, reply and let me know so we can check the file.

Thanks,
[Sender Name]

### CRM Action

- Log reminder sent
- Update last touch date
- Keep status as `Awaiting Borrower`
- Set next task due in 24–48 hours

---

## Step 4 — Second Reminder

**Timing:** 48 hours after initial request

**Channel:** SMS + email

**Goal:** Add clarity and choice.

### SMS Template

Hi [First Name], checking back on the missing items for your file. Are you able to upload them today, or do you need help with the checklist?

### Email Template

**Subject:** Do you need help with the document checklist?

Hi [First Name],

I wanted to check whether you need help with the items we requested.

Still needed:

- [Missing Document 1]
- [Missing Document 2]
- [Missing Document 3]

Upload link:
[Secure Upload Link]

If something on the list is confusing or hard to access, reply here and we’ll help clarify the next step.

Thanks,
[Sender Name]

### Insight

At this point, the borrower may not be ignoring the broker. They may be confused, embarrassed, busy, unsure where to find the document, or worried about sharing sensitive information. The message should reduce friction, not add pressure.

---

## Step 5 — Call Attempt

**Timing:** Day 3–5, especially for high-value or referral leads

**Channel:** Phone call + voicemail if needed

**Goal:** Remove blockers and prevent the file from silently stalling.

### Call Opener

Hi [First Name], this is [Sender Name] with [Company]. I’m calling about the documents still needed for your file. I wanted to see if you had any questions about what to upload or where to send it.

### If Borrower Says They Are Busy

No problem. I can send the upload link again by text. Is there one item on the checklist that’s holding things up?

### If Borrower Is Confused

That’s completely fine. Let’s go through it quickly. The main items still needed are [Document 1] and [Document 2]. Once those are uploaded, the team can continue reviewing the file.

### Voicemail Script

Hi [First Name], this is [Sender Name] with [Company]. I’m following up on the documents still needed for your file. I’ll send the upload link again by text or email. If you have questions about the checklist, just reply and we’ll help clarify.

### CRM Action

- Log call result
- Update last touch date
- Add blocker note if identified
- Create next task
- Escalate if borrower asks sensitive questions

---

## Step 6 — Blocker-Based Follow-Up

**Timing:** After borrower replies with a reason or blocker

**Goal:** Match the response to the blocker.

### Common Blocker: “I’m busy”

No problem. If it helps, start with just [most important document]. Once that’s uploaded, we can confirm what else is still needed.

### Common Blocker: “I don’t know where to find that”

That’s okay. For [document type], most borrowers can usually download it from [general source, e.g., online banking/account portal]. If you’re unsure, send what you have through the upload link and the team can review whether it’s the right item.

### Common Blocker: “I already sent it”

Thanks for letting me know. We’ll check the file and confirm what we have. If anything is still missing, we’ll send a clear updated checklist.

### Common Blocker: “Why do you need this?”

Good question. The team uses these documents to review the file and determine the appropriate next step. A broker should review anything specific before we comment further.

### Common Blocker: “Can I text it to you?”

For security, it’s better to use the upload link here: [Secure Upload Link]. That keeps everything organized with your file.

### Common Blocker: “Does this mean I’m approved?”

Not yet. Submitting documents helps the team continue reviewing the file, but a broker needs to review everything before discussing options or next steps.

---

## Step 7 — Escalation Review

**Timing:** Day 5–7 or sooner for high-priority files

**Owner:** Broker, manager, or agency owner

**Use when:**

- Borrower is high value
- Referral partner lead is stalled
- Borrower has uploaded partial docs but file is still incomplete
- Borrower asks sensitive questions
- Document owner has followed up multiple times with no response
- Deal is close to submission but missing one item

### Escalation CRM Task

Task: `Review stalled missing-docs file`

Due: Same day

Owner: Broker or manager

Priority: High

Notes:

- Missing items: [list]
- Last touch date: [date]
- Last borrower response: [date]
- Recommended next step: [call / broker text / pause / close / nurture]

### Broker Escalation SMS

Hi [First Name], this is [Broker Name]. I wanted to personally check in because your file is still waiting on [missing item]. Is that something you can upload today, or is there a question I can help clear up?

---

## Step 8 — Final Soft Follow-Up

**Timing:** Day 7–10

**Channel:** Email and/or SMS

**Goal:** Close active document chasing without burning the relationship.

### Email Template

**Subject:** Closing the loop for now

Hi [First Name],

We haven’t received the remaining items needed to keep your file moving, so we’re going to pause active follow-up for now.

Still needed:

- [Missing Document 1]
- [Missing Document 2]

If you still want to continue, you can upload the items here:

[Secure Upload Link]

Once they’re in, reply to this email and we can reopen the file for review.

Thanks,
[Sender Name]

### SMS Template

Hi [First Name], we’re going to pause active follow-up for now since the remaining documents haven’t come in. If you still want to continue, upload them here: [Secure Upload Link]

### CRM Action

- Move status to `No Response` or `Follow-Up Paused`
- Add tag: `Stalled Deal` or `Missing Docs - Dormant`
- Stop missing-doc sequence
- Add future reactivation date if appropriate

---

# Document-Specific Guidance

## Bank Statements

### Common Request

Last 3–6 months of business bank statements.

### Email Snippet

We’re still waiting on your business bank statements for [months needed]. Please upload the full monthly statements, not screenshots, so the team can review the file properly.

### SMS Snippet

Hi [First Name], we’re still waiting on the business bank statements for [months needed]. Full monthly PDFs are best. Upload here: [Secure Upload Link]

### Common Mistakes

- Borrower sends screenshots
- Borrower sends personal instead of business statements
- Borrower sends only one month
- Borrower sends transaction export instead of full statement

### Safe Clarification

It looks like we may still need the full monthly statement PDFs instead of screenshots. Please upload the full statements here: [Secure Upload Link]

---

## ID / Identification

### Email Snippet

We’re still waiting on a clear copy of your ID. Please use the secure upload link below rather than sending sensitive information by text.

[Secure Upload Link]

### SMS Snippet

Hi [First Name], we still need a clear copy of your ID. For security, please use the upload link here: [Secure Upload Link]

### Human Review Note

Do not ask for sensitive identity details directly in SMS or email body.

---

## Tax Returns

### Email Snippet

We’re still waiting on the tax return documents listed in your checklist. If you’re unsure which file is needed, reply here and we’ll help clarify the checklist.

### Human Review Note

Do not interpret tax returns or make funding conclusions from them automatically. Route review to the broker or authorized reviewer.

---

## Merchant Statements

### SMS Snippet

Hi [First Name], we’re still waiting on your merchant statements for [period]. If you have them available, please upload them here: [Secure Upload Link]

### Common Mistakes

- Borrower sends processing dashboard screenshot
- Borrower sends partial period
- Borrower sends settlement email instead of statement

---

## Invoices / Receivables

### Email Snippet

We’re still waiting on the invoice documents listed in your checklist. Please upload the requested invoices through the secure link below so the team can keep your file organized.

[Secure Upload Link]

### Human Review Note

Do not make claims about invoice eligibility, collectability, or financing fit without broker review.

---

## Application Signature

### SMS Snippet

Hi [First Name], your file is almost there — we’re still missing the application signature. You can complete that step here: [Link]

### Email Snippet

**Subject:** Signature needed to continue

Hi [First Name],

Your application is still missing a signature. Please complete that step here:

[Link]

Once complete, the team can continue reviewing the file.

Thanks,
[Sender Name]

---

# Workflow Variations

## High-Value Borrower Variation

Use more human touch and faster escalation.

Recommended sequence:

- Day 0: Specific checklist email + SMS
- Day 1: Reminder SMS
- Day 2: Call attempt
- Day 3: Broker personal follow-up
- Day 5: Manager review
- Day 7: Pause or custom rescue plan

Avoid over-automating high-value borrowers. Add personal broker touch earlier.

---

## Referral Partner Lead Variation

Referral partner leads need careful handling because the relationship matters.

### Borrower Message

Hi [First Name], quick reminder — we’re still waiting on [missing items] to keep your file moving. You can upload them here: [Secure Upload Link]

### Partner Update

Hi [Partner Name], quick update — we’re still waiting on a few items from [Borrower First Name] before the file can continue moving. We’ve followed up and will keep the process organized.

### Privacy Rule

Do not share sensitive borrower details, financial documents, decline reasons, or offer information with a referral partner unless the user confirms it is appropriate and reviewed.

---

## Partial Upload Variation

Use when borrower uploaded some but not all items.

### Email Template

**Subject:** We received part of your file

Hi [First Name],

Thanks — we received part of the file.

Still needed:

- [Missing Document 1]
- [Missing Document 2]

You can upload the remaining items here:

[Secure Upload Link]

Once those are in, the team can continue reviewing the file.

Thanks,
[Sender Name]

---

## Wrong Document Uploaded Variation

Use when the borrower uploaded an incorrect or unusable document.

### Email Template

**Subject:** One document needs to be updated

Hi [First Name],

Thanks for sending that over. One item may need to be updated before the file can continue moving.

Needed instead:

- [Correct Document Needed]

Please upload it here:

[Secure Upload Link]

If you’re unsure which file to use, reply and we’ll help clarify.

Thanks,
[Sender Name]

### Tone Rule

Do not say “wrong document” harshly. Use “may need to be updated” or “we still need the full version.”

---

## Borrower Ghosted After Docs Requested

Use when borrower has not responded after repeated reminders.

### SMS Template

Hi [First Name], I don’t want to keep chasing you if timing changed. Should we keep your file open, or pause this for now?

### Email Template

**Subject:** Should we pause your file for now?

Hi [First Name],

We’re still waiting on the remaining documents and haven’t been able to connect.

Should we keep the file open, or pause this for now until you’re ready?

Either way is fine — we just want to keep the file accurate.

Thanks,
[Sender Name]

---

# Automation Map

Use this minimum viable missing-documents automation.

```text
Trigger: File marked Documents Requested

Actions:
1. Confirm missing document checklist exists
2. Assign document owner
3. Set stage = Documents Requested
4. Set status = Needs Docs
5. Add tag = Missing Docs Sequence
6. Add specific missing document tags
7. Create task = Send missing document checklist
8. Send initial checklist email/SMS
9. Wait 24 hours
10. If docs not received, send reminder 1
11. Wait 24–48 hours
12. If docs not received, send reminder 2
13. Wait 1–2 days
14. If docs not received, create call task
15. If high priority, escalate to broker/manager
16. If still no response after final touch, pause sequence and move to Stalled/Nurture
```

---

# If/Then Rules

## If all documents are received

- Stop missing-doc sequence
- Set status: Docs Uploaded or Document Review Needed
- Create task: Review documents
- Assign processor/broker
- Update last document received date

## If partial documents are received

- Stop generic reminders
- Send updated checklist
- Keep stage: Documents Requested
- Set status: Docs Incomplete
- Create task: Review partial upload

## If borrower asks what the documents are for

- Answer generally
- Avoid underwriting or approval language
- Offer human review if needed

Safe response:

“These help the team continue reviewing the file and confirm the appropriate next step. A broker should review anything specific before we comment on options.”

## If borrower asks whether they are approved

- Pause automation
- Add Human Review Required
- Create broker task

Safe response:

“Not yet. Submitting documents helps the team continue reviewing the file, but a broker needs to review everything before discussing options or next steps.”

## If borrower cannot provide a document

- Pause sequence
- Create broker/processor review task
- Ask if they have an alternative only if the broker’s process allows it

Safe response:

“Thanks for letting us know. I’ll flag this for review so the team can confirm the best next step.”

## If borrower opts out

- Stop all outreach
- Apply Do Not Contact
- Notify owner if needed
- Do not continue sales follow-up

---

# Human Review Points

Human review is required before:

- Interpreting financial documents
- Commenting on bank statement quality
- Saying docs are enough for approval
- Making lender-specific document requests
- Asking for unusual or highly sensitive documents
- Explaining decline reasons
- Discussing terms, rates, offers, or eligibility
- Telling a borrower they do or do not qualify
- Sharing borrower document status with referral partners

Use this phrase:

> “This should be reviewed by a broker before sending.”

---

# Metrics to Track

Track these KPIs:

- Document request-to-upload time
- First reminder response rate
- Document completion rate
- Partial upload rate
- Wrong document rate
- Average touches to complete file
- Files stalled in Documents Requested
- Files with no owner
- Files with no next action
- High-priority files overdue
- Conversion from Docs Requested to Broker Review
- Conversion from Docs Requested to Submitted
- Closed lost due to Missing Docs

---

# Pipeline Audit Checklist

When auditing a missing-documents process, check:

- Does every file have a specific checklist?
- Are missing items tracked individually?
- Is there a secure upload process?
- Is the document owner assigned?
- Is there a next task and due date?
- Are reminders specific instead of generic?
- Are high-priority files escalated?
- Are referral partner leads handled carefully?
- Are partial uploads acknowledged?
- Are wrong documents corrected respectfully?
- Are human review points clearly defined?
- Does automation stop when borrower replies?
- Are opt-outs respected?
- Are stalled files moved to a clear next stage?

---

# GPT Output Template

When creating a missing-document workflow, use this structure:

```markdown
# Missing Document Follow-Up Workflow

## 1. Goal
[Business outcome]

## 2. Trigger
[What starts the workflow]

## 3. Missing Document Checklist
Still needed:
- [Document 1]
- [Document 2]

Already received:
- [Document A]

## 4. Roles & Ownership
Owner:
Broker review owner:
Escalation owner:

## 5. CRM Setup
Stage:
Status:
Priority:
Tags:
Task:
Due:

## 6. Follow-Up Sequence
| Step | Timing | Channel | Message Goal | Owner | Stop Condition |
|---|---:|---|---|---|---|

## 7. Email Templates
[Templates]

## 8. SMS Templates
[Templates]

## 9. Call Script
[Script]

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

A borrower completed an application but has not uploaded the last 3 months of business bank statements or a copy of ID.

## CRM Setup

- Stage: Documents Requested
- Status: Needs Docs
- Priority: Hot
- Tags: Missing Docs Sequence, Missing Bank Statements, Missing ID
- Owner: Processor
- Broker review owner: Broker
- Task: Collect missing documents
- Due: 24 hours

## Sequence

| Step | Timing | Channel | Action | Owner | Stop Condition |
|---|---:|---|---|---|---|
| 1 | Day 0 | Email/SMS | Send specific checklist | Processor | Docs uploaded/reply |
| 2 | Day 1 | SMS | Friendly reminder | Automation/Processor | Docs uploaded/reply |
| 3 | Day 2 | Email | Ask if they need help | Processor | Docs uploaded/reply |
| 4 | Day 3 | Call | Remove blocker | Processor/Broker | Connected/docs uploaded |
| 5 | Day 5 | SMS | Check if still moving forward | Processor | Reply/opt-out |
| 6 | Day 7 | CRM | Escalate high-priority file | Manager/Broker | Review completed |
| 7 | Day 10 | Email/SMS | Final soft touch | Automation | Reply/docs uploaded |
| 8 | After final touch | CRM | Pause/move to stalled | Admin | Manual reopen |

## Day 0 Email

**Subject:** Documents needed to keep your file moving

Hi [First Name],

Thanks for getting the application started. To keep your file moving, we’re still waiting on:

- Last 3 months of business bank statements
- Clear copy of your ID

Please upload them here:

[Secure Upload Link]

Once those are in, the team can continue reviewing your file and confirm the next step.

Thanks,
[Sender Name]

## Day 1 SMS

Hi [First Name], quick reminder — we’re still waiting on your last 3 months of business bank statements and ID. You can upload them here: [Secure Upload Link]

## Day 3 Call Opener

Hi [First Name], this is [Sender Name] with [Company]. I’m calling about the documents still needed for your file. I wanted to see if you had any questions about what to upload or where to send it.

## Human Review Rule

If the borrower asks whether the documents are enough to qualify, pause automation and assign broker review.

Safe response:

“Submitting the documents helps the team continue reviewing the file, but a broker should review everything before discussing options or next steps.”

## Next Best Action

Build the CRM automation that sends the Day 0 checklist, creates the document collection task, waits 24 hours, and sends the Day 1 reminder only if documents are still missing.

---

# Summary Rule

A missing-document workflow should be specific, respectful, secure, and accountable.

The GPT should help brokers collect documents faster by removing confusion, assigning ownership, tracking each missing item, escalating stalled files, and pausing before sensitive funding, underwriting, lender-specific, or compliance-related communication.
