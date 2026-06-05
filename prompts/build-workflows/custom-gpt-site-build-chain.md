# Custom GPT Site Build Chain

## Purpose

Use this prompt chain to build the **Broker Follow-Up Machine GPT** website by running four specialized custom GPTs in sequence.

This is not a single one-shot prompt. It is a structured build pipeline where each operator produces an output that becomes the input for the next operator.

## Product Context

**Product:** Broker Follow-Up Machine GPT

**Core promise:** Turn a messy broker pipeline into an automated follow-up machine that never forgets a borrower, referral partner, or funding opportunity.

**Audience:** Loan brokers, business funding brokers, funding agency owners, independent funding agents, referral partner managers, broker teams, processors, and VAs.

**Primary CTA:** Use Broker Follow-Up Machine GPT

**CTA URL:** https://chatgpt.com/g/g-6a2152c07e488191862b272d5e3a4b44-broker-follow-up-machine

**Secondary CTA:** Download Sequence Pack

## Operator Chain Overview

| Step | Operator GPT | Role | Output |
|---|---|---|---|
| 1 | Brand OS Operator | Brand system, positioning, voice, visual identity | Brand OS |
| 2 | SiteForge Operator | Sitemap, landing page architecture, conversion flow | Site blueprint |
| 3 | Sizzling Website & UI Generator | Bold UI direction, sticky layout, visual style | High-fidelity UI concept |
| 4 | Vercel Launch Smith | Deployable Next.js + Tailwind site files | Production-ready site files |

## Step 1 — Brand OS Operator

Run the Brand OS Operator first.

### Input

Use the product context above.

### Goal

Create the brand OS for Broker Follow-Up Machine GPT.

The brand should feel like a neo-brutalist fintech automation tool for loan brokers and business funding brokers.

### Required Output

- Positioning statement
- Homepage headline options
- Subheadline options
- Brand voice
- Color palette
- Typography direction
- CTA language
- Messaging pillars
- Safe language rules
- Phrases to avoid
- Visual identity notes

## Step 2 — SiteForge Operator

Run SiteForge Operator after Step 1 is complete.

### Input

Use:

- Product context
- Step 1 Brand OS output

### Goal

Create the website architecture for Broker Follow-Up Machine GPT.

The site should convert loan brokers, business funding brokers, funding agency owners, and broker teams into users of the custom GPT.

### Required Output

- Sitemap
- Homepage section order
- Conversion flow
- Primary CTA
- Secondary CTA
- Lead magnet section
- FAQ
- SEO title and meta description
- Trust/safety section
- Workflow use case sections
- Recommended page copy structure

### Positioning Requirement

The site should position the GPT as a broker follow-up operating system that creates sequences, CRM stages, task ownership, automation rules, handoffs, stop conditions, and human review points.

## Step 3 — Sizzling Website & UI Generator

Run Sizzling Website & UI Generator after Steps 1 and 2 are complete.

### Input

Use:

- Product context
- Step 1 Brand OS output
- Step 2 SiteForge output

### Goal

Design a sizzling homepage UI for Broker Follow-Up Machine GPT.

### Style

- Neo-brutalist fintech
- Cyberpunk automation dashboard
- Futuristic CRM control center
- Loud, sticky, premium, high-contrast
- Vivid colors that pop
- Matte black, electric cyan, neon lime, hot magenta, safety orange, cyber yellow
- Hard borders, sharp cards, glowing status chips, sticky CTA, dashboard panels

### Required Output

- Full landing page UI concept
- Hero section
- Sticky navigation
- Sticky CTA rail
- Workflow cards
- Pipeline visualization
- Automation builder section
- Before/after section
- Safety/human review section
- Lead magnet section
- FAQ styling
- Mobile responsive direction

### Aesthetic Target

Make the UI feel like:

**Ramp x Linear x Vercel x neo-brutalist poster design x cyberpunk revenue ops dashboard.**

The page should feel like a serious broker follow-up command center, not a generic AI landing page.

## Step 4 — Vercel Launch Smith

Run Vercel Launch Smith after Steps 1, 2, and 3 are complete.

### Input

Use:

- Product context
- Step 1 Brand OS output
- Step 2 SiteForge output
- Step 3 UI concept output

### Goal

Create a complete Vercel-ready **Next.js + Tailwind** website for Broker Follow-Up Machine GPT.

### Tech Requirements

- Next.js App Router
- TypeScript
- Tailwind CSS
- Responsive design
- Clean component structure
- SEO metadata
- Vercel deploy-ready

### Pages

- One-page landing page

### Required Files

- `package.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/Hero.tsx`
- `components/WorkflowCards.tsx`
- `components/PipelineBoard.tsx`
- `components/AutomationBuilder.tsx`
- `components/BeforeAfter.tsx`
- `components/SafetySection.tsx`
- `components/LeadMagnet.tsx`
- `components/FAQ.tsx`
- `components/CTA.tsx`
- `components/StickyNav.tsx`

## Compliance Guardrails

Do not use:

- Funding guarantees
- Approval claims
- Eligibility claims
- Lender-specific promises
- Underwriting language

Use safe language:

- This looks worth reviewing.
- A broker should review this.
- We can take a closer look.
- The next step is to complete your file.
- It may be worth revisiting if your situation has changed.

## Handoff Rules

Each operator should:

1. Preserve the core promise.
2. Avoid risky funding or underwriting claims.
3. Produce structured output that can be pasted into the next operator.
4. Label assumptions clearly.
5. Keep the final asset practical, broker-safe, and implementation-ready.

## Final Success Criteria

The finished site should be visually bold, sticky, high-contrast, mobile responsive, and deployment-ready. It should make the GPT feel like a practical revenue-protection system for brokers, not a generic AI toy.
