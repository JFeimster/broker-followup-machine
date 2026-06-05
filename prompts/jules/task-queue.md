# Jules Task Queue: Broker Follow-Up Machine

This document outlines a queue of tasks for Jules (AI agent) to perform on the Broker Follow-Up Machine repository. Tasks are categorized by their safety level for unattended execution.

---

## Safe Unattended Tasks

These tasks are safe to run without immediate human supervision. They focus on cleanup, documentation, and non-functional improvements.

### 1. Link-check Site Pages
- **Task title**: Link-check /site/ pages and report broken relative paths.
- **Scope**: Audit all HTML files in the `/site/` directory for broken internal links and missing assets.
- **Files allowed to edit**: `docs/link-check-report.md` (Create or update).
- **Files not allowed to edit**: All other files.
- **Safety notes**: Do not attempt to fix links automatically; only identify and list them in the report.
- **Expected output**: A detailed report of broken relative paths, missing images, or 404 links within the `/site/` directory.
- **Stop condition**: When all HTML files in `/site/` have been crawled.
- **PR branch name**: `jules/link-check-report`

### 2. UI Consistency Audit
- **Task title**: Review /site/tools/ pages for consistent nav/footer/layout.
- **Scope**: Ensure all pages in `/site/tools/` match the main site's navigation, footer, and CSS styling.
- **Files allowed to edit**: `site/tools/*.html`
- **Files not allowed to edit**: `site/styles.css`, `site/index.html`
- **Safety notes**: Maintain existing functionality of tools while updating layout.
- **Expected output**: Updated tool pages with unified header/footer/styles.
- **Stop condition**: When all tool pages are visually consistent with the root site pages.
- **PR branch name**: `jules/tools-ui-cleanup`

### 3. Cross-link Improvement
- **Task title**: Improve cross-links between tools, schemas, examples, and actions.
- **Scope**: Add relevant links in READMEs and documentation pages to connect related assets (e.g., link a schema to its corresponding example).
- **Files allowed to edit**: `README.md`, `**/README.md`, `site/*.html`
- **Files not allowed to edit**: `schemas/*.json`, `actions/schemas/openapi/*.yaml`
- **Safety notes**: Ensure links use relative paths.
- **Expected output**: Increased connectivity between documentation and technical assets.
- **Stop condition**: When all major schemas have links to examples and vice versa.
- **PR branch name**: `jules/improve-cross-links`

### 4. Asset Hub Expansion
- **Task title**: Expand site/downloads.html into a stronger asset hub.
- **Scope**: Improve the layout and descriptions on `site/downloads.html` to better categorize the available (and planned) assets.
- **Files allowed to edit**: `site/downloads.html`
- **Files not allowed to edit**: All other files.
- **Safety notes**: Do not add actual downloadable files (zip, pdf, etc.) yet; focus on the UI and placeholders.
- **Expected output**: A professional-looking asset hub page with clear categories for "Workflows", "Schemas", and "Templates".
- **Stop condition**: When the downloads page layout is complete and matches the brand aesthetic.
- **PR branch name**: `jules/expand-asset-hub`

### 5. Schema Summaries
- **Task title**: Draft summaries for every schema under /schemas/.
- **Scope**: Generate concise Markdown descriptions for each JSON schema file to be included in the folder's README.
- **Files allowed to edit**: `schemas/README.md`
- **Files not allowed to edit**: `schemas/*.json`
- **Safety notes**: Summaries must accurately reflect the schema's purpose without changing the schema itself.
- **Expected output**: An updated `schemas/README.md` with detailed descriptions for every schema file.
- **Stop condition**: When all schemas have a corresponding summary.
- **PR branch name**: `jules/schema-summaries`

### 6. OpenAPI Summaries
- **Task title**: Draft summaries for OpenAPI placeholders under /actions/schemas/openapi/.
- **Scope**: Generate concise Markdown descriptions for each OpenAPI YAML file.
- **Files allowed to edit**: `actions/schemas/openapi/README.md`
- **Files not allowed to edit**: `actions/schemas/openapi/*.yaml`
- **Safety notes**: Focus on the *intent* of the Action, not implementation details.
- **Expected output**: A summary document indexing all planned Actions.
- **Stop condition**: When all OpenAPI files are indexed and described.
- **PR branch name**: `jules/openapi-summaries`

### 7. Repo Status Summary
- **Task title**: Create a repo status summary.
- **Scope**: Analyze the README and recent project state to create a "State of the Repo" document.
- **Files allowed to edit**: `docs/repo-status.md` (Create or update).
- **Files not allowed to edit**: All other files.
- **Safety notes**: Informational only.
- **Expected output**: A markdown file summarizing current progress, completed folders, and next logical steps.
- **Stop condition**: When the summary is complete.
- **PR branch name**: `jules/repo-status-update`

### 8. Knowledge Audit
- **Task title**: Review knowledge/ for duplicate or overly generic files.
- **Scope**: Identify and report any overlapping content or files that lack product-specific depth.
- **Files allowed to edit**: `docs/knowledge-audit.md` (Create or update).
- **Files not allowed to edit**: All other files.
- **Safety notes**: Do not delete files; only flag them for review.
- **Expected output**: A report identifying redundant knowledge files.
- **Stop condition**: When all subdirectories in `knowledge/` have been reviewed.
- **PR branch name**: `jules/knowledge-audit`

### 9. Action Catalog Audit
- **Task title**: Review actions/ for duplicate or overly generic files.
- **Scope**: Identify and report any overlapping content or generic planning files in the `actions/` folder.
- **Files allowed to edit**: `docs/actions-audit.md` (Create or update).
- **Files not allowed to edit**: All other files.
- **Safety notes**: Informational only.
- **Expected output**: A report highlighting potential consolidation points in action documentation.
- **Stop condition**: When all files in `actions/` have been audited.
- **PR branch name**: `jules/actions-audit`

### 10. Utility Tool Issue Drafts
- **Task title**: Create issue drafts for future utility tools.
- **Scope**: Based on the project roadmap and gaps in `site/tools/`, draft potential new utility tools as issues.
- **Files allowed to edit**: `docs/future-tools-drafts.md` (Create or update).
- **Files not allowed to edit**: All other files.
- **Safety notes**: Do not open live GitHub issues; only draft the content in a markdown file.
- **Expected output**: A list of drafted issues with titles, descriptions, and feature requirements.
- **Stop condition**: When at least 3 tool drafts are completed.
- **PR branch name**: `jules/future-tool-ideas`

---

## Requires Human Review Before Merge

These tasks involve sensitive content, product behavior, or significant UI changes and must be reviewed by Jason.

### 11. Static Variant Promotion
- **Task title**: Promote a selected static variant into the primary /site/ UI.
- **Scope**: Replace the current `site/` files with a chosen theme from `site/static/`.
- **Files allowed to edit**: `site/*.html`, `site/styles.css`
- **Files not allowed to edit**: `site/tools/`, `site/data/`
- **Safety notes**: Backup current UI before replacement.
- **Expected output**: The main site reflects the new theme while preserving all links and content.
- **Stop condition**: When the theme is successfully applied.
- **PR branch name**: `jules/promote-ui-variant`

### 12. Borrower Copy Updates
- **Task title**: Add or modify borrower-facing copy.
- **Scope**: Improve the language used in scripts and templates that the borrower will eventually see.
- **Files allowed to edit**: `knowledge/messaging/`, `site/templates.html`
- **Files not allowed to edit**: `knowledge/safety/`
- **Safety notes**: Must strictly adhere to the safety rules in `AGENTS.md`. No guarantees or rate claims.
- **Expected output**: Refined, professional messaging scripts.
- **Stop condition**: When the requested copy changes are implemented.
- **PR branch name**: `jules/update-borrower-copy`

### 13. OpenAPI Detail Expansion
- **Task title**: Add OpenAPI operation details.
- **Scope**: Fill in operation IDs, descriptions, and parameter details for existing OpenAPI placeholders.
- **Files allowed to edit**: `actions/schemas/openapi/*.yaml`
- **Files not allowed to edit**: None.
- **Safety notes**: Do not add live server URLs or secrets. Keep behavior theoretical.
- **Expected output**: More detailed OpenAPI specs ready for future implementation.
- **Stop condition**: When the targeted endpoints are fully defined.
- **PR branch name**: `jules/expand-openapi-specs`

### 14. Webhook Examples
- **Task title**: Add webhook examples that look production-ready.
- **Scope**: Create realistic JSON payloads for webhook events.
- **Files allowed to edit**: `examples/webhooks/*.json`
- **Files not allowed to edit**: None.
- **Safety notes**: Use placeholder data only. Do not imply real integration logic.
- **Expected output**: A library of sample webhook events.
- **Stop condition**: When the requested event types are documented.
- **PR branch name**: `jules/add-webhook-examples`

### 15. Lender-Specific Behavior Definitions
- **Task title**: Add files that imply actual lender-specific behavior.
- **Scope**: Document specific logic or rules that would be applied by a lender during follow-up.
- **Files allowed to edit**: `knowledge/automation/`, `knowledge/workflows/`
- **Files not allowed to edit**: `knowledge/safety/`
- **Safety notes**: Ensure no confidential or non-public lender information is included. Focus on general patterns.
- **Expected output**: Detailed automation rules that reflect industry-standard lender behaviors.
- **Stop condition**: When the requested behaviors are documented.
- **PR branch name**: `jules/lender-specific-logic`
