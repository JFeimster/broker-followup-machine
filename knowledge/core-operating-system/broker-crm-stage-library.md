# Broker CRM Stage Library

## Purpose

This knowledge file gives **Broker Follow-Up Machine** a standardized CRM stage library for loan brokers, business funding brokers, funding agencies, referral partner programs, and broker teams.

Use this file when creating:

- CRM pipelines
- Follow-up workflows
- Automation rules
- CRM cleanup plans
- Pipeline audits
- Stage definitions
- Task ownership rules
- Handoff plans
- Solo-broker operating systems
- Team-based agency workflows

The goal is to help brokers keep every lead, borrower, referral partner, and renewal opportunity in a clear stage with a defined owner, next action, due date, stop condition, and human review point when needed.

---

## Core CRM Stage Philosophy

A CRM stage is not just a label. It should tell the team:

1. What happened?
2. Who owns the next action?
3. What needs to happen next?
4. When is it due?
5. What moves the record forward?
6. What stops or escalates the workflow?

A stage is weak if it does not create operational clarity.

Every active record should have:

- Stage
- Owner
- Next action
- Due date
- Last touch date
- Follow-up status
- Stop condition
- Human review flag if needed

---

## Recommended CRM Pipelines

Broker Follow-Up Machine should recognize four common pipeline types:

1. **Borrower Pipeline** — lead-to-funded workflow
2. **Referral Partner Pipeline** — partner recruiting and partner management
3. **Renewal Pipeline** — funded client reactivation and repeat business
4. **Dead Lead / Nurture Pipeline** — reactivation and long-term follow-up

If the user only has one CRM pipeline, combine these into tags or statuses instead of separate pipelines.

---

# 1. Borrower Pipeline

Use this pipeline for borrowers, business owners, funding applicants, or loan/funding prospects.

## Stage 1: New Lead

**Definition:** A new borrower or business funding lead has entered the CRM.

**Common triggers:**

- Website form submitted
- Paid ad lead received
- Referral partner submitted a lead
- Manual lead entry
- Imported spreadsheet lead
- Chat/widget inquiry
- Phone inquiry

**Default owner:** Intake rep, broker, VA, or solo operator.

**Default SLA:** Contact within 5 minutes.

**Required next action:** First contact attempt.

**Recommended CRM task:** `Contact new lead`

**Exit criteria:** Lead is contacted, attempted, duplicate-merged, marked bad contact info, or moved to nurture/closed.

**Automation ideas:**

- Create CRM record
- Assign owner
- Send instant confirmation email
- Send SMS if appropriate
- Create call task due within 5 minutes
- Notify broker/team

**Human review needed:** No, unless the lead asks for terms, approval, or lender-specific claims.

---

## Stage 2: Contact Attempted

**Definition:** The team has tried to reach the borrower but has not connected yet.

**Common triggers:**

- First call unanswered
- First SMS/email sent
- Voicemail left

**Default owner:** Intake rep, broker, VA, or solo operator.

**Default SLA:** Second touch within 24 hours.

**Required next action:** Continue speed-to-contact sequence.

**Recommended CRM task:** `Follow up — no response`

**Exit criteria:** Borrower replies, books call, completes application, opts out, or sequence ends.

**Automation ideas:**

- Follow-up SMS
- Email reminder
- Call task
- Move to stale lead review after defined attempts

**Stop condition:** Borrower replies, opts out, or is manually closed.

---

## Stage 3: Connected / Discovery Started

**Definition:** Borrower has responded or spoken with the team.

**Common triggers:**

- Borrower replies to SMS/email
- Call completed
- Discovery call booked
- Borrower shares funding need

**Default owner:** Broker or sales rep.

**Default SLA:** Complete discovery or schedule next step within 24 hours.

**Required next action:** Confirm funding need, use of funds, urgency, business basics, and application path.

**Recommended CRM task:** `Complete discovery / send intake`

**Exit criteria:** Application started, borrower disqualified after review, or borrower moved to nurture.

**Human review needed:** Yes if discussing fit, lender options, or sensitive financial details.

---

## Stage 4: Discovery Scheduled

**Definition:** A discovery call or funding review call is scheduled but not completed.

**Default owner:** Broker or sales rep.

**Default SLA:** Send reminder 24 hours before and 1–2 hours before call.

**Required next action:** Confirm attendance and complete call.

**Recommended CRM task:** `Complete discovery call`

**Exit criteria:** Call completed, no-show sequence started, or call rescheduled.

**Automation ideas:**

- Calendar reminders
- Confirmation email
- SMS reminder
- No-show follow-up

---

## Stage 5: Application Started

**Definition:** Borrower has started but not completed an application or intake form.

**Default owner:** Intake rep, VA, automation, or solo operator.

**Default SLA:** Follow up within 1 hour.

**Required next action:** Help borrower complete application.

**Recommended CRM task:** `Application incomplete — follow up`

**Exit criteria:** Application completed, borrower opts out, or moved to incomplete/nurture.

**Automation ideas:**

- 1-hour reminder
- 24-hour reminder
- 48-hour final nudge
- Task for owner if still incomplete

---

## Stage 6: Application Completed

**Definition:** Borrower has submitted application/intake form.

**Default owner:** Processor, broker, or solo operator.

**Default SLA:** Review within 24 hours.

**Required next action:** Check file completeness and request missing docs.

**Recommended CRM task:** `Review application completeness`

**Exit criteria:** Docs requested, file moved to broker review, or closed after review.

**Human review needed:** Yes before sensitive borrower evaluation or lender discussion.

---

## Stage 7: Documents Requested

**Definition:** Borrower needs to provide required documents.

**Default owner:** Processor, VA, document collection owner, or solo operator.

**Default SLA:** First reminder within 24 hours.

**Required next action:** Send clear missing document checklist.

**Recommended CRM task:** `Collect missing documents`

**Exit criteria:** Docs received, borrower replies, file becomes dormant, or broker review is needed.

**Automation ideas:**

- Send checklist
- Create upload folder/link
- Reminder after 24 hours
- Reminder every 24–48 hours for 3–5 touches
- Escalate if high-priority file stalls

**Stop condition:** Documents received, borrower opts out, file closed, or broker review begins.

---

## Stage 8: Documents Received

**Definition:** Borrower has uploaded or submitted requested documents.

**Default owner:** Processor or broker.

**Default SLA:** Review within 24 hours.

**Required next action:** Verify completeness and identify missing/unclear items.

**Recommended CRM task:** `Review documents`

**Exit criteria:** Ready for broker review, more docs requested, or closed.

**Human review needed:** Yes if reviewing sensitive financial details.

---

## Stage 9: Ready for Broker Review

**Definition:** File appears complete enough for broker review.

**Default owner:** Broker.

**Default SLA:** Review within 24 hours.

**Required next action:** Broker reviews file before any submission or borrower-facing funding discussion.

**Recommended CRM task:** `Broker review required`

**Exit criteria:** Submission prep, more info requested, nurture, or closed lost.

**Human review needed:** Always.

**Automation warning:** Do not automate approvals, declines, terms, or lender submission decisions.

---

## Stage 10: Submission Prep

**Definition:** File is being prepared for lender/funding partner submission.

**Default owner:** Broker or processor.

**Default SLA:** Prepare within 24–48 hours after broker review.

**Required next action:** Confirm package, docs, notes, and safe communication.

**Recommended CRM task:** `Prepare submission package`

**Exit criteria:** Submitted to lender/funding partner, more info requested, or closed.

**Human review needed:** Always before submission.

---

## Stage 11: Submitted to Lender

**Definition:** File has been submitted to lender or funding partner.

**Default owner:** Broker.

**Default SLA:** Status review within 24–48 hours unless lender timeline differs.

**Required next action:** Track response and avoid borrower-facing claims until verified.

**Recommended CRM task:** `Check lender status`

**Exit criteria:** Lender review, more info needed, offer presented, decline, withdrawal, or closed.

**Human review needed:** Yes for lender-specific updates.

---

## Stage 12: Lender Review / More Info Needed

**Definition:** Lender/funding partner is reviewing or has requested more information.

**Default owner:** Broker, processor, or document owner.

**Default SLA:** Respond to info request within 24 hours when possible.

**Required next action:** Gather requested info and update borrower safely.

**Recommended CRM task:** `Collect lender-requested info`

**Exit criteria:** Info submitted, offer presented, declined, or closed.

**Human review needed:** Yes for lender-specific communication.

---

## Stage 13: Offer Presented

**Definition:** A funding offer or option is ready to discuss with borrower.

**Default owner:** Broker.

**Default SLA:** Broker follow-up within 24 hours.

**Required next action:** Review offer with borrower and answer questions safely.

**Recommended CRM task:** `Review offer with borrower`

**Exit criteria:** Accepted, declined, more info requested, funded, or inactive.

**Human review needed:** Always.

**Compliance note:** Avoid guaranteeing terms, outcomes, future approvals, or eligibility.

---

## Stage 14: Accepted / Closing

**Definition:** Borrower has accepted offer or is moving toward funding/closing.

**Default owner:** Broker or processor.

**Default SLA:** Same day task review.

**Required next action:** Coordinate remaining steps.

**Recommended CRM task:** `Coordinate closing/funding steps`

**Exit criteria:** Funded, withdrawn, or closed lost.

**Human review needed:** Yes.

---

## Stage 15: Funded

**Definition:** Deal has funded or transaction is complete.

**Default owner:** Broker, retention owner, or referral manager.

**Default SLA:** Check in within 3–7 days after funding.

**Required next action:** Check in, request review/referral if appropriate, and set renewal reminder.

**Recommended CRM task:** `Post-funding check-in`

**Exit criteria:** Added to retention/renewal workflow.

**Automation ideas:**

- 7-day check-in
- Review request
- Referral ask
- Renewal reminder
- Partner update with safe language

---

## Stage 16: Renewal Candidate

**Definition:** Funded client may be ready for future review or additional funding conversation later.

**Default owner:** Broker or retention owner.

**Default SLA:** Start outreach 30–60 days before expected renewal window.

**Required next action:** Soft check-in and review of current needs.

**Recommended CRM task:** `Renewal review`

**Compliance note:** Do not say the client is eligible, pre-approved, or guaranteed.

**Safe language:** “It may be worth reviewing your current options.”

---

## Stage 17: Nurture

**Definition:** Lead is not ready, not responsive, or not currently active but may be useful later.

**Default owner:** Automation, VA, marketing owner, or solo operator.

**Default SLA:** Monthly or quarterly nurture depending on source and quality.

**Required next action:** Add to appropriate nurture or reactivation workflow.

**Recommended CRM task:** `Add to nurture sequence`

**Exit criteria:** Reactivated, opted out, or closed permanently.

---

## Stage 18: Closed Lost

**Definition:** Deal is no longer active.

**Default owner:** Broker or admin.

**Required next action:** Log reason and decide whether reactivation is appropriate.

**Recommended CRM task:** `Log closed lost reason`

**Closed lost reasons:**

- No response
- Missing documents
- Not ready
- Funded elsewhere
- Withdrew request
- Not a fit after review
- Duplicate record
- Bad contact info
- Opted out

---

# 2. Referral Partner Pipeline

Use this pipeline for accountants, consultants, realtors, ISOs, agencies, affiliates, brokers, and other referral sources.

## Stage 1: Partner Prospect

**Definition:** Potential referral partner identified.

**Owner:** Referral manager, broker, agency owner, or solo operator.

**Next action:** Send outreach or schedule intro.

**Exit criteria:** Contacted, disqualified, or moved to nurture.

---

## Stage 2: Contacted

**Definition:** Initial outreach sent.

**Default SLA:** Follow up within 2–3 business days if no response.

**Next action:** Continue partner outreach.

**Exit criteria:** Reply received, meeting scheduled, no response sequence completed.

---

## Stage 3: Conversation Started

**Definition:** Partner replied or engaged.

**Next action:** Qualify fit and propose call.

**Exit criteria:** Meeting scheduled, partner nurture, or closed.

---

## Stage 4: Meeting Scheduled

**Definition:** Intro call or partner discussion scheduled.

**Next action:** Complete meeting and define referral process.

**Automation ideas:**

- Meeting reminder
- Partner prep email
- Post-call follow-up task

---

## Stage 5: Partner Active

**Definition:** Partner is open to sending referrals or has agreed to collaborate.

**Next action:** Provide referral instructions, link, or partner process.

**Exit criteria:** Lead sent, partner inactive, or partner nurture.

---

## Stage 6: Lead Sent

**Definition:** Partner has submitted at least one borrower lead.

**Default SLA:** Acknowledge partner within 15 minutes.

**Next action:** Contact borrower and update partner safely.

**Compliance note:** Do not share sensitive borrower details without permission.

---

## Stage 7: Partner Nurture

**Definition:** Partner is not active right now but should receive periodic value and check-ins.

**Next action:** Send monthly or quarterly partner touch.

**Exit criteria:** Partner sends lead, books call, opts out, or becomes inactive.

---

## Stage 8: Inactive / Reactivation

**Definition:** Partner has not engaged or sent leads for a defined period.

**Suggested trigger:** 30–90 days of inactivity.

**Next action:** Send reactivation message.

**Exit criteria:** Partner replies, sends lead, stays inactive, or is archived.

---

# 3. Renewal Pipeline

Use this pipeline for funded clients who may become repeat clients.

## Stage 1: Funded Client Added

Client is added after funding.

**Next action:** Set renewal tracking fields.

---

## Stage 2: Post-Funding Check-In

**Default SLA:** 3–7 days after funding.

**Next action:** Check experience, request review/referral if appropriate.

---

## Stage 3: Renewal Watch

Client is not ready for outreach yet but should be monitored.

**Next action:** Wait until renewal window.

---

## Stage 4: Renewal Review Due

**Default timing:** 30–60 days before expected renewal window.

**Next action:** Broker reviews before outreach.

**Human review needed:** Yes.

---

## Stage 5: Renewal Outreach Sent

Client has received a soft check-in.

**Next action:** Follow up if no response.

---

## Stage 6: Renewal Conversation Started

Client replied or booked call.

**Next action:** Broker reviews current situation.

---

## Stage 7: Renewal Closed / Not Now

Client is either funded again, not interested, not ready, or moved back to watch.

---

# 4. Dead Lead / Nurture Pipeline

Use for leads that are not active but may be reactivated later.

## Stage 1: Dormant Lead

No current activity.

**Next action:** Identify reason and segment.

---

## Stage 2: Reactivation Candidate

Lead is ready for a new outreach attempt.

**Suggested timing:** 30–90 days after inactivity or decline.

---

## Stage 3: Reactivation Sent

Outreach has been sent.

**Next action:** Wait and follow up based on sequence.

---

## Stage 4: Re-Engaged

Lead replied or showed interest.

**Next action:** Move to borrower pipeline at correct stage.

---

## Stage 5: Long-Term Nurture

Lead remains inactive but may receive periodic value-based content.

---

## Stage 6: Archived / Do Not Contact

Lead should no longer receive outreach.

**Triggers:** Opt-out, invalid contact, duplicate, or manual archive.

---

# CRM Stage Mapping by Tool

## GoHighLevel

Use:

- Opportunities for borrower pipeline
- Pipelines for borrower, partner, renewal, and nurture workflows
- Tags for statuses like Missing Docs, No Response, Hot Lead
- Tasks for owner accountability
- Workflows for automation

Recommended mapping:

- CRM stage = Opportunity stage
- Status = Opportunity status or tag
- Owner = Assigned user
- Follow-up due = Task due date

---

## HubSpot

Use:

- Deals for borrower/funding pipeline
- Contacts for borrower and partner records
- Deal stages for borrower progress
- Lifecycle stages for broader relationship status
- Tasks for follow-up ownership
- Lists/workflows for nurture

Recommended mapping:

- CRM stage = Deal stage
- Owner = Contact owner or deal owner
- Tags/status = Lists, properties, or labels
- Follow-up due = Task due date

---

## Pipedrive

Use:

- Deals for borrower pipeline
- Pipelines for borrower, partner, and renewal flows
- Activities for follow-up tasks
- Labels for tags/statuses

Recommended mapping:

- CRM stage = Pipeline stage
- Owner = Deal owner
- Follow-up due = Activity due date
- Tags/status = Labels/custom fields

---

## Airtable

Use:

- Tables for borrowers, partners, tasks, documents, and interactions
- Single select fields for stage
- Linked records for owner, partner, documents, and tasks
- Views for stale deals, missing docs, and overdue tasks

Recommended mapping:

- CRM stage = Single select field
- Owner = Collaborator field
- Follow-up due = Date field
- Tags/status = Multi-select fields

---

## Notion

Use:

- Database rows for borrower, partner, and renewal records
- Status/select properties for stages
- Person property for owner
- Date property for next action due
- Relation properties for tasks, documents, and partners
- Views for missing docs, new leads, stale deals, and renewal candidates

Recommended mapping:

- CRM stage = Status property
- Owner = Person property
- Follow-up due = Date property
- Tags/status = Multi-select property

---

# Stage Hygiene Rules

The GPT should flag these problems:

- Stage does not match next action
- Stage has no owner
- Stage has no due task
- Deal is in active stage but has no last touch date
- Deal is in document stage but has no document checklist
- Deal is in submitted stage but has no lender status
- Deal is funded but has no renewal reminder
- Deal is closed lost but has no reason
- Partner is active but has no partner follow-up cadence

Suggested language:

“CRM hygiene issue: this record is in an active stage but has no next action or due date. Assign an owner and create a task before automating follow-up.”

---

# Default Stage Output Format

When recommending stages, use this format:

```markdown
## Stage: [Stage Name]

Definition:
Owner:
Trigger:
Next Action:
Default SLA:
CRM Task:
Exit Criteria:
Automation Ideas:
Human Review Needed:
Stop Condition:
```

---

# Human Review Stages

Always recommend human review for these stages:

- Ready for Broker Review
- Submission Prep
- Submitted to Lender
- Lender Review / More Info Needed
- Offer Presented
- Accepted / Closing
- Renewal Review Due

Human review is required before:

- Sending funding terms
- Discussing offers
- Declining a borrower
- Suggesting lender fit
- Making lender-specific claims
- Discussing sensitive financial documents
- Making credit or underwriting decisions

---

# Summary Rule

A good broker CRM stage tells the team what happened, who owns the next action, when it is due, what moves the record forward, and where human review is required.

Broker Follow-Up Machine should use this stage library to create clear, safe, revenue-focused CRM workflows for solo brokers and team-based funding agencies.
