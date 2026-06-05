# Static Build Recommendation — ✅ Code-First Static Site

Build **Broker Follow-Up Machine GPT** as a **static HTML/CSS/JS landing page** first.

## Why Static Wins Right Now

This site does not need routing, auth, a database, a CMS, server actions, dynamic rendering, or an app shell. It needs a nasty-good landing page that loads fast, looks premium, and drives clicks.

Static gives you:

- Faster launch
- Fewer dependencies
- Easier editing
- Easier deployment anywhere
- Better portability
- Less technical friction
- Enough interactivity for sticky CTA, FAQ accordion, smooth scroll, and small motion

The SiteForge architecture already frames this as a one-page launch page, with optional expansion pages later for workflows, templates, safety, FAQ, and thank-you pages.

Build the skateboard first. Make sure it rolls. Then add the jet engine.

---

# Static Site File Structure

Use this:

```text
broker-follow-up-machine/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

Optional later:

```text
/templates.html
/safety.html
/thank-you.html
/workflows.html
```

But for V1, keep it brutally simple:

```text
index.html
styles.css
script.js
README.md
```

---

# Static Site Spec

## Site Type

One-page marketing landing page.

## Primary Goal

Drive users to the custom GPT.

## Secondary Goal

Capture email leads through the **Broker Follow-Up Sequence Pack**.

## Brand

**Broker Follow-Up Machine GPT**

## Tagline

**Every Deal Gets a Next Action.**

## Core Headline

**Your Pipeline Is Not Broken. Your Follow-Up System Is.**

## Core Promise

Turn a messy broker pipeline into an automated follow-up machine that never forgets a borrower, referral partner, or funding opportunity.

## Primary CTA

**Use Broker Follow-Up Machine**

## Primary CTA URL

```text
https://chatgpt.com/g/g-6a2152c07e488191862b272d5e3a4b44-broker-follow-up-machine
```

## Secondary CTA

**Download Sequence Pack**

---

# Static Homepage Section Order

## 1. Sticky Navigation

Static implementation:

- `position: sticky`
- no framework
- smooth anchor links
- CTA button always visible

Nav:

```text
Problem
Workflows
Pipeline
Safety
FAQ
Use GPT
```

Desktop extras:

- sticky top nav
- sticky right CTA rail

Mobile extras:

- sticky bottom CTA bar

---

## 2. Hero Section

### Headline

**Your Pipeline Is Not Broken. Your Follow-Up System Is.**

### Subheadline

Broker Follow-Up Machine GPT helps loan brokers and funding teams build CRM-ready workflows for leads, documents, stalled deals, referral partners, renewals, and reactivation — with timing, owners, tasks, stop conditions, and human review points built in.

### Buttons

Primary:

**Use Broker Follow-Up Machine**

Secondary:

**Download Sequence Pack**

### Microcopy

No funding promises. No approval claims. Just cleaner follow-up infrastructure.

### Static Hero Visual

Build this directly in HTML/CSS — no images needed.

Use dashboard cards:

```text
NEW LEAD
SLA: 5 MIN
OWNER: INTAKE
TASK: CALL NOW
```

```text
DOCS REQUESTED
STATUS: NEEDS DOCS
OWNER: PROCESSOR
NEXT TOUCH: 24 HR
```

```text
STALLED DEAL
REASON: NO RESPONSE
ESCALATE: DAY 7
```

```text
BROKER REVIEW
FLAG: HUMAN REVIEW
STOP: TERMS QUESTION
```

This is perfect for static because it is just styled HTML cards. No fake screenshot needed. Cleaner. Faster. Easier to edit.

---

## 3. Problem Section

### Headline

**Broker Deals Do Not Disappear. They Leak.**

### Cards

- New Leads Go Cold
- Missing Docs Stall Revenue
- Stalled Deals Rot in the CRM
- Referral Partners Go Dark
- Renewals Get Forgotten

Visual:

- Off-white section
- Black brutalist cards
- Orange “LEAK” tags
- Hard shadows

---

## 4. Solution Section

### Headline

**Install a Broker Follow-Up Operating System.**

### Copy

Broker Follow-Up Machine GPT creates full workflow systems: triggers, timing, owners, CRM stages, automation logic, handoffs, stop conditions, escalation rules, and broker review points.

### Output Grid

Use CSS grid for:

```text
Trigger
Owner
CRM Stage
Status / Tag
Next Action
Task Name
Due Date
Channel
Sequence Timing
Stop Condition
Escalation Rule
Human Review Point
```

The Brand OS makes this the core product truth: every active deal needs a stage, owner, next action, due date, last touch, stop condition, and escalation rule.

---

## 5. Workflow Cards

### Headline

**Build the Follow-Up Systems Brokers Actually Need.**

Cards:

1. **New Lead Speed-to-Contact**
2. **Missing Document Follow-Up**
3. **Stalled Deal Revival**
4. **Dead Lead Reactivation**
5. **Declined Borrower Re-Review**
6. **Funded Client Renewals**
7. **Referral Partner Nurture**
8. **CRM Cleanup & Automation**

Static implementation:

- CSS bento grid
- hover lift
- neon chips
- no framework needed

---

## 6. Pipeline Visualization

### Headline

**Every Deal Gets a Stage, Owner, Task, and Deadline.**

Use a horizontal scroll board on desktop and mobile.

Pipeline cards:

```text
NEW LEAD
SLA: 5 MIN
Owner: Intake
Task: Contact New Lead
```

```text
CONTACT ATTEMPTED
SLA: 24 HR
Owner: Intake
Task: Follow Up — No Response
```

```text
APPLICATION STARTED
SLA: 1 HR
Owner: VA
Task: Application Incomplete
```

```text
DOCUMENTS REQUESTED
SLA: 24 HR
Owner: Processor
Task: Missing Docs Checklist
```

```text
BROKER REVIEW NEEDED
Flag: Human Review
Owner: Broker
Task: Review File
```

```text
RENEWAL WATCH
Timing: 30–60 Days
Owner: Broker
Task: Fresh Review Invite
```

Static approach:

- `display: flex`
- `overflow-x: auto`
- scroll-snap
- no JavaScript needed

---

## 7. Automation Builder

### Headline

**From Prompt to Pipeline Logic.**

Static flow:

```text
TRIGGER
New lead submitted

↓

CONDITION
No duplicate record

↓

ACTION
Assign owner

↓

TASK
Call due in 5 minutes

↓

FOLLOW-UP
SMS + email sequence

↓

STOP
Reply / booking / opt-out

↓

REVIEW
Pause if terms, approval, lender fit, or sensitive docs appear
```

Use CSS lines, nodes, arrows, and hover states.

No heavy animation. This is a tool, not a lava lamp.

---

## 8. Before / After

### Headline

**From Manual Chasing to Follow-Up Control.**

Before:

- Leads sit unassigned
- Borrowers get vague reminders
- Missing docs are chased manually
- Stalled deals have no reason code
- Referral partners get random check-ins
- Renewals rely on memory

After:

- Every lead gets an owner
- Every workflow has a trigger
- Every task has a due date
- Every sequence has a stop condition
- Every handoff is logged
- Every sensitive moment gets review

---

## 9. Sample GPT Output

### Headline

**What the GPT Actually Builds.**

Use a terminal-style block:

```text
WORKFLOW:
Missing Document Follow-Up

TRIGGER:
Application submitted, required documents missing.

STAGE:
Documents Requested

STATUS:
Needs Docs

OWNER:
Processor or Document Collection Owner

TASK:
Send missing document checklist

TIMING:
Initial request same day
First reminder after 24 hours
Second reminder after 48 hours
Third touch Day 3–4
Escalation Day 5–7 for high-priority files

STOP CONDITIONS:
Documents received
Borrower replies
Borrower opts out
Borrower asks about approval, qualification, terms, or lender fit
File moves to broker review

HUMAN REVIEW:
Required before discussing terms, lender fit, approval, decline, or sensitive document interpretation.
```

---

## 10. Safety / Human Review

### Headline

**Automation Does the Chasing. Brokers Keep the Judgment.**

Two columns:

### Safe to Automate

- New lead confirmation
- Appointment reminders
- Missing document reminders
- General check-ins
- Referral partner nurture
- Renewal review prompts
- CRM task creation
- Owner assignment
- SLA alerts
- Internal notifications

### Human Review Required

- Funding terms
- Offers
- Declines
- Eligibility language
- Approval language
- Lender-specific claims
- Sensitive financial document interpretation
- Complaints
- Opt-out or consent issues

Use this line prominently:

**No approval claims. No guaranteed funding. No lender-specific promises. No automated underwriting language.**

The Brand OS specifically says to avoid phrases like “guaranteed approval,” “you qualify,” “you are approved,” and “this lender will approve you.”

---

## 11. Lead Magnet

### Headline

**Download the Broker Follow-Up Sequence Pack.**

### Form Fields

- First name
- Email
- Business type
- CRM/tool used
- Biggest follow-up leak

Static implementation options:

Use an embedded form provider:

- Tally
- Typeform
- ConvertKit / Kit
- Beehiiv
- Google Forms
- Airtable form

Best friction-free pick: **Tally embed**.

For V1, do **not** build a backend. Backend goblin can wait in the basement.

---

## 12. FAQ

Static implementation:

- HTML buttons
- small JS accordion
- accessible `aria-expanded`
- no library

FAQs:

1. Who is this for?
2. Does it only write follow-up messages?
3. Can solo brokers use it?
4. What workflow should I build first?
5. Can it work with my CRM?
6. Does it make funding decisions?

---

## 13. Final CTA

### Headline

**Give Every Borrower, Partner, and Opportunity a Next Action.**

### Copy

Start with one workflow. Pick your biggest follow-up leak — new leads, missing docs, stalled deals, renewals, or referral partners — and let Broker Follow-Up Machine GPT turn it into a CRM-ready system.

### CTA

**Use Broker Follow-Up Machine**

---

# Static Interaction Plan

Use **script.js** only for:

- Mobile nav toggle if needed
- FAQ accordion
- Smooth scroll enhancement
- Reveal-on-scroll class toggles
- Sticky CTA visibility after hero
- Optional copy-to-clipboard for sample prompt

Keep it lean.

No React. No build step. No dependency soup.

---

# Static Motion Plan

Use CSS first:

- Button hover lift
- Card hover glow
- Chip pulse
- Section reveal with CSS classes
- Reduced motion support

Use JavaScript only to add `.is-visible` on scroll.

Timing:

```text
150–300ms
```

Motion rule:

If the animation does not improve attention, hierarchy, or clarity, cut it.

---

# Static Build Prompt for Vercel Launch Smith / SiteForge / Any Code GPT

Use this next instead of the Next.js prompt:

```text
Create a complete static HTML/CSS/JS landing page for Broker Follow-Up Machine GPT.

Build type:
Static site only. No Next.js. No React. No build tools. No external frameworks.

Create these files:
- index.html
- styles.css
- script.js
- README.md

Brand:
Broker Follow-Up Machine GPT

Tagline:
Every Deal Gets a Next Action.

Primary headline:
Your Pipeline Is Not Broken. Your Follow-Up System Is.

Core promise:
Turn a messy broker pipeline into an automated follow-up machine that never forgets a borrower, referral partner, or funding opportunity.

Audience:
Loan brokers, business funding brokers, funding agency owners, independent funding agents, broker teams, processors, VAs, and referral partner managers.

Primary CTA:
Use Broker Follow-Up Machine

Primary CTA URL:
https://chatgpt.com/g/g-6a2152c07e488191862b272d5e3a4b44-broker-follow-up-machine

Secondary CTA:
Download Sequence Pack

Style:
Broker Ops Brutal Futurism — neo-brutalist fintech automation meets cyberpunk broker revenue ops dashboard.

Visual system:
- matte black / charcoal foundation
- off-white brutalist contrast sections
- electric cyan, signal lime, hot magenta, alert orange, cyber yellow accents
- hard borders
- sharp cards
- dashboard panels
- glowing status chips
- sticky navigation
- sticky CTA rail on desktop
- sticky bottom CTA on mobile
- brutalist headline typography
- monospace workflow labels
- high-contrast conversion blocks

Color palette:
- Void Black: #050505
- Carbon: #111318
- Asphalt: #1A1D24
- Paper White: #FAF7ED
- Concrete: #E8E5DC
- Electric Cyan: #00E5FF
- Signal Lime: #B6FF00
- Hot Magenta: #FF2BD6
- Alert Orange: #FF6A00
- Cyber Yellow: #FFE600
- Risk Red: #FF2A2A

Homepage sections:
1. Sticky Navigation
2. Hero with cyberpunk CRM dashboard visual
3. Problem section: Broker Deals Do Not Disappear. They Leak.
4. Solution section: Install a Broker Follow-Up Operating System.
5. Workflow cards:
   - New Lead Speed-to-Contact
   - Missing Document Follow-Up
   - Stalled Deal Revival
   - Dead Lead Reactivation
   - Declined Borrower Re-Review
   - Funded Client Renewals
   - Referral Partner Nurture
   - CRM Cleanup & Automation
6. Pipeline visualization
7. Automation builder section
8. Before / After section
9. Sample GPT output terminal card
10. Broker-safe automation / human review section
11. How it works section
12. Lead magnet section
13. FAQ accordion
14. Final CTA
15. Footer

Required static UI behavior:
- sticky top nav
- sticky right CTA rail on desktop
- sticky bottom CTA bar on mobile
- smooth anchor scrolling
- FAQ accordion
- subtle reveal-on-scroll animation
- hover lift on cards
- CTA button press compression
- reduced motion support
- accessible focus states

Hero dashboard cards:
- New Lead / SLA: 5 MIN / Owner: Intake / Task: Call Now
- Docs Requested / Status: Needs Docs / Owner: Processor / Next Touch: 24 HR
- Stalled Deal / Reason: No Response / Escalate: Day 7
- Broker Review / Flag: Human Review / Stop: Terms Question

Pipeline cards:
- New Lead / SLA: 5 MIN / Owner: Intake / Task: Contact New Lead
- Contact Attempted / SLA: 24 HR / Owner: Intake / Task: Follow Up — No Response
- Application Started / SLA: 1 HR / Owner: VA / Task: Application Incomplete
- Documents Requested / SLA: 24 HR / Owner: Processor / Task: Missing Docs Checklist
- Broker Review Needed / Flag: Human Review / Owner: Broker / Task: Review File
- Renewal Watch / Timing: 30–60 Days / Owner: Broker / Task: Fresh Review Invite

Sample GPT output card:
Show a Missing Document Follow-Up workflow with:
- Trigger
- Stage
- Status
- Owner
- Task
- Timing
- Stop Conditions
- Human Review

Safety rules:
Do not use funding guarantees, approval claims, eligibility claims, pre-approval claims, lender-specific promises, underwriting claims, or aggressive borrower pressure language.

Use safe language:
- A broker should review this.
- This may be worth reviewing.
- We can take a closer look.
- The next step is to complete your file.
- Human review required before sending.
- No funding promises. No approval claims. Just cleaner follow-up infrastructure.

Lead magnet:
Create a static form layout for:
- First name
- Email
- Business type
- CRM/tool used
- Biggest follow-up leak

The form can be non-functional placeholder HTML with a note in README explaining how to connect Tally, Typeform, ConvertKit, Beehiiv, Google Forms, or another form provider.

SEO:
Title:
Broker Follow-Up Machine GPT | CRM Follow-Up Systems for Loan Brokers

Meta description:
Build broker-safe follow-up workflows for new leads, missing documents, stalled deals, referral partners, renewals, and CRM cleanup with Broker Follow-Up Machine GPT.

Accessibility:
- semantic HTML
- skip link
- proper heading structure
- visible focus states
- buttons/links accessible by keyboard
- aria-expanded for FAQ accordion
- reduced motion CSS

README:
Include:
- project overview
- file structure
- how to run locally
- how to deploy to Vercel
- how to deploy to Netlify
- how to connect the lead magnet form
- how to edit CTA links
- safety language reminder

Final quality bar:
The site should feel like Ramp x Linear x Vercel x neo-brutalist poster design x cyberpunk revenue ops dashboard.

Make it feel like a serious broker follow-up command center, not a generic AI landing page.
```

---

# Final Decision

Use **static HTML/CSS/JS now**.

Then upgrade to Next.js when you are ready to add:

- Workflow SEO pages
- Template download flows
- Thank-you page
- Blog/content hub
- Local JSON content
- Reusable components
- Stronger metadata per page

For this launch: **static wins. Ship the beast.**
