# Codex / Jules Prompt — Expand Static Documentation Site

## Purpose

Use this prompt with **Codex**, **Jules**, or another coding agent to quickly expand the existing static documentation site under `/site` for **Broker Follow-Up Machine GPT**.

## Recommended Public Page Layout

Use this shared page structure for public documentation pages:

```text
Header
├── Logo / project name
├── Navigation

Main
├── Hero section
├── Page-specific sections
├── CTA block

Footer
├── Repo link
├── GPT link
├── Last updated note
```

## Public Pages

Create or maintain these public pages:

- `site/agents.html`
- `site/knowledge.html`
- `site/actions.html`
- `site/workflows.html`
- `site/templates.html`
- `site/safety.html`
- `site/assets.html`

## Shared Navigation

Every page should link to:

- Home
- Agent
- Knowledge
- Actions
- Workflows
- Templates
- Safety
- Assets
- Static Variants, if present

### Example Navigation

```html
<nav class="site-nav">
  <a href="index.html">Home</a>
  <a href="agents.html">Agent</a>
  <a href="knowledge.html">Knowledge</a>
  <a href="actions.html">Actions</a>
  <a href="workflows.html">Workflows</a>
  <a href="templates.html">Templates</a>
  <a href="safety.html">Safety</a>
  <a href="assets.html">Assets</a>
</nav>
```

## Coding Agent Prompt

You are working in the GitHub repo `broker-followup-machine`.

## Goal

Quickly expand the existing static documentation site under `/site`.

## Current Structure

- `site/README.md`
- `site/index.html`
- `site/styles.css`
- `site/script.js`
- `site/static/`

## Create These New Pages

- `site/agents.html`
- `site/knowledge.html`
- `site/actions.html`
- `site/workflows.html`
- `site/templates.html`
- `site/safety.html`
- `site/assets.html`

## Requirements

1. Keep the site plain static HTML/CSS/JS. Do not introduce React, Next.js, npm, or a build step.
2. Reuse the existing visual style from `site/index.html`, `site/styles.css`, and `site/script.js`.
3. Add consistent navigation across all pages: Home, Agent, Knowledge, Actions, Workflows, Templates, Safety, Assets.
4. Update `site/index.html` navigation to link to the new pages.
5. Update `site/README.md` with the final page list and purpose.
6. Keep file names lowercase and hyphenated where applicable.
7. Use practical copy for Broker Follow-Up Machine GPT:
   - Helps loan brokers build borrower, referral partner, and pipeline follow-up systems.
   - Focuses on CRM follow-up, missing documents, stalled deals, renewals, referral partners, templates, and automation.
8. Include compliance-conscious language:
   - Avoid funding guarantees, approval claims, qualification claims, or lender-specific promises.
   - Mention human review before terms, declines, underwriting-related messages, sensitive documents, and borrower-facing claims.
9. Do not move or rename `site/static/` right now.
10. After editing, summarize created files and any important changes.

## Suggested Site Data File

Add a lightweight page map at:

`site/data/site-map.json`

The file should list the static public pages, titles, and descriptions so future scripts or site components can reuse the page metadata.

## Final Output

After implementation, summarize:

- Created files
- Updated files
- Navigation changes
- Safety/compliance language added
- Any assumptions made
