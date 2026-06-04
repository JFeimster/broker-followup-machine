# Broker Follow-Up Machine — SLA Timing Standards

## Purpose

This knowledge file gives Broker Follow-Up Machine a default set of follow-up timing standards for loan broker, business funding, and funding agency workflows.

Use these SLA targets as practical operating guidelines when building follow-up sequences, CRM tasks, automation rules, handoffs, and accountability systems.

These are **recommended operating targets**, not legal, compliance, underwriting, or lending rules. If the user provides their own SLA timing, use the user's timing instead.

---

## Core SLA Philosophy

Fast follow-up protects revenue.

Broker pipelines usually leak because leads are contacted too slowly, missing documents are not chased consistently, referral partners are not acknowledged, and funded clients are not re-engaged at the right time.

When building workflows, default to timing that is:

- Fast enough to protect conversion
- Simple enough for a small team to manage
- Easy to assign to a clear owner
- Trackable inside a CRM
- Safe enough to avoid pressure tactics or funding promises
- Flexible enough to adjust based on the broker's business hours and team capacity

When possible, include:

- SLA target
- Role owner
- CRM task
- Escalation rule
- Stop condition
- Human review point

---

## Default SLA Timing Table

| Workflow Event | Recommended SLA | Notes |
|---|---:|---|
| New inbound lead | Contact within 5 minutes | Best for web forms, ads, referral forms, and inbound funding requests. Speed-to-lead matters. |
| Missed call / voicemail | Return within 15 minutes during business hours | If outside business hours, create next-business-day callback task. |
| Referral partner lead received | Acknowledge partner within 15 minutes | Confirm receipt and set expectation that the borrower will be contacted. |
| New referral borrower | Contact within 5–15 minutes | Treat partner-referred leads as high-trust/high-priority. |
| Incomplete application | Follow up within 1 hour | Use email + SMS if consent and tools allow. |
| Missing document request sent | First reminder within 24 hours | Keep tone helpful and clear, not pushy. |
| Missing docs still not received | Follow up every 24–48 hours for 3–5 touches | Stop or downgrade urgency after the sequence ends. |
| Stalled active deal | Review within 24 hours | Create owner task and identify next action. |
| Borrower no-response after contact attempt | Follow up within 24 hours | Continue based on sequence rules and stop conditions. |
| Lender/submission status unchanged | Review within 24–48 hours | Broker or authorized team member should check before updating borrower. |
| Funded client check-in | Follow up within 7 days after funding | Ask about experience, next steps, review, referral, or future need. |
| Renewal opportunity | Start outreach 30–60 days before expected renewal window | Adjust based on product type and broker relationship. |
| Referral partner inactivity | Check in after 30 days of no referrals | Use nurture, not pressure. |
| Dead lead reactivation | Recycle after 30–90 days | Timing depends on decline reason, nonresponse, or incomplete file status. |

---

## Recommended SLA Rules by Workflow

### 1. New Lead Speed-to-Contact

**Default SLA:** Contact within 5 minutes.

Use when a new borrower or business funding lead enters from:

- Website form
- Paid ad
- Referral partner
- Landing page
- Chat widget
- Manual import
- Spreadsheet upload
- CRM form

Recommended workflow:

1. Create or update CRM record immediately.
2. Assign owner: broker, sales rep, or intake VA.
3. Send first email immediately.
4. Send SMS immediately if appropriate and consent exists.
5. Create call task due within 5 minutes.
6. If no contact after first attempt, schedule follow-up within 24 hours.
7. Stop sequence once borrower replies, books a call, completes intake, opts out, or is manually closed.

Suggested CRM status:

- New Lead
- Contact Attempted
- Connected
- Intake Started
- Application Incomplete
- Docs Requested
- Ready for Review

---

### 2. Incomplete Application Follow-Up

**Default SLA:** Follow up within 1 hour.

Use when the borrower starts but does not complete an application or intake form.

Recommended workflow:

1. Trigger: application started but not completed.
2. Wait 1 hour.
3. Send helpful reminder.
4. Create CRM task for owner.
5. If no response after 24 hours, send second reminder.
6. If still incomplete after 48–72 hours, send final helpful nudge.
7. Move to Incomplete / Nurture if no response after final touch.

Message tone:

- Helpful
- Clear
- Low-pressure
- Focused on completing the file

Avoid:

- Approval language
- Guaranteed funding claims
- Urgent pressure tactics

---

### 3. Missing Document Follow-Up

**Default SLA:** First reminder within 24 hours.

Use when borrower has not uploaded required documents.

Common missing docs:

- Bank statements
- ID
- Voided check
- Tax returns
- Profit and loss statement
- Invoices
- Merchant statements
- Application signature

Recommended workflow:

1. Trigger: docs requested.
2. Create checklist of missing items.
3. Assign owner.
4. Send reminder after 24 hours.
5. Follow up every 24–48 hours for 3–5 touches.
6. Escalate to broker review if borrower is high-priority or deal is time-sensitive.
7. Stop when documents are received, borrower replies, borrower opts out, or file is moved to dormant.

Suggested task names:

- Missing Docs — Touch 1
- Missing Docs — Touch 2
- Missing Docs — Final Nudge
- Broker Review — Stalled Docs

---

### 4. Stalled Deal Review

**Default SLA:** Review within 24 hours.

Use when a deal is active but has no next step, no recent communication, or no owner action.

Stall signals:

- No borrower response
- Missing docs
- Lender status unclear
- No assigned owner
- No task due date
- File stuck in same stage
- Broker has not reviewed file

Recommended workflow:

1. Trigger: no activity for 24 hours on active deal.
2. Create review task for owner.
3. Identify blocker.
4. Assign next action.
5. Log next step in CRM.
6. Escalate if overdue by another 24 hours.

---

### 5. Referral Partner Lead Handling

**Default SLA:** Acknowledge partner within 15 minutes.

Use when a partner submits or introduces a lead.

Recommended workflow:

1. Confirm receipt to partner within 15 minutes.
2. Contact borrower within 5–15 minutes.
3. Create CRM record and tag referral source.
4. Assign broker or intake owner.
5. Notify partner when borrower is contacted, using safe and general language.
6. Avoid sharing sensitive borrower details without permission.

Safe partner update language:

“Thanks for the intro — we received it and are reaching out to review the file.”

Avoid:

- Approval claims
- Funding promises
- Sensitive financial details
- Lender-specific outcomes

---

### 6. Funded Client Follow-Up

**Default SLA:** Check in within 7 days after funding.

Use after a borrower receives funding or completes a transaction.

Recommended workflow:

1. Trigger: deal marked Funded.
2. Wait 3–7 days.
3. Send check-in message.
4. Ask about experience.
5. Request review or referral if appropriate.
6. Create renewal reminder based on expected renewal window.
7. Add client to nurture list.

Possible outputs:

- Review request
- Referral request
- Renewal reminder
- Testimonial request
- Future funding check-in

---

### 7. Renewal Opportunity Follow-Up

**Default SLA:** Start outreach 30–60 days before expected renewal window.

Use when a funded client may need more capital later.

Recommended workflow:

1. Trigger: funded date reaches renewal window.
2. Create renewal review task.
3. Check client status before sending.
4. Send soft check-in.
5. Avoid saying the client is eligible or pre-approved.
6. Invite review of current needs.

Safe language:

“Based on timing, it may be worth reviewing whether another funding option makes sense. A broker can take a closer look if you want to revisit your options.”

---

### 8. Dead Lead Reactivation

**Default SLA:** Recycle after 30–90 days.

Use for old, dormant, declined, or nonresponsive leads.

Timing guidance:

- 30 days: nonresponsive leads
- 45–60 days: incomplete files
- 60–90 days: declined or not-ready borrowers
- 90+ days: long-term nurture

Recommended workflow:

1. Segment by reason: no response, incomplete docs, not ready, declined, funded elsewhere.
2. Use soft reactivation copy.
3. Avoid aggressive urgency.
4. Ask if the situation changed.
5. Create task if they reply.
6. Stop if they opt out or remain inactive after final touch.

---

## SLA-Based Output Requirements for the GPT

When building follow-up systems, the GPT should include SLA timing whenever relevant.

Default output should include:

- SLA target
- Workflow owner
- First touch timing
- Follow-up cadence
- Stop condition
- Escalation rule
- CRM task timing
- Human review checkpoint

Example output format:

```markdown
### SLA Timing
- First touch: within 5 minutes of new lead creation
- Second touch: after 24 hours if no response
- Third touch: after 48 hours if no response
- Escalation: broker review if no response after 3 touches
- Stop condition: borrower replies, books a call, completes application, opts out, or is manually closed
```

---

## SLA Guardrails

Do not frame SLA timing as legal, regulatory, or compliance advice.

Do not use SLA timing to create pressure tactics.

Do not imply that faster contact increases approval odds or guarantees funding.

Do not recommend sending sensitive financial data through insecure channels.

Do not automate sensitive judgment calls just because an SLA is overdue.

Always recommend human review before:

- Sending funding terms
- Declining a borrower
- Suggesting a lender match
- Discussing sensitive financial documents
- Making lender-specific claims
- Making credit or underwriting decisions

---

## Preferred Language

Use language like:

- “Recommended operating target”
- “Default SLA”
- “Suggested follow-up window”
- “Create a CRM task due in...”
- “Escalate to broker review if overdue”
- “Stop the sequence when...”
- “This should be reviewed before sending”

Avoid language like:

- “Required by compliance”
- “Guaranteed to improve approval odds”
- “Must be sent or the borrower will lose funding”
- “Automatically decline if overdue”
- “Automatically submit to lender if complete”

---

## Default SLA Summary

Use these defaults unless the user provides their own timing:

- New inbound lead: contact within 5 minutes
- Missed call: return within 15 minutes during business hours
- Referral partner lead: acknowledge within 15 minutes
- Incomplete application: follow up within 1 hour
- Missing docs: first reminder within 24 hours
- Missing docs follow-up: every 24–48 hours for 3–5 touches
- Stalled active deal: review within 24 hours
- Funded client check-in: within 7 days
- Renewal outreach: 30–60 days before expected renewal window
- Dead lead reactivation: after 30–90 days
