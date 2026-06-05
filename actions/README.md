# Actions Planning

This folder holds the planning layer for Broker Follow-Up Machine GPT Actions.

Use it to define:

- what the GPT should be able to request or generate
- which workflows stay no-auth, API key, or OAuth
- where webhooks fit in the architecture
- what human review must block before any send or sync

The planning scope is documentation only. Do not add live integrations, secrets, or executable network code here.

## Folder map

| Path | Purpose |
| --- | --- |
| `catalog.md` | High-level index of the Actions layer. |
| `selection-rules.md` | Rules for choosing the right integration path. |
| `safety.md` | Safety boundaries for all Action planning. |
| `none/` | No-auth Action planning. |
| `api-key/` | API key Action planning. |
| `oauth/` | OAuth Action planning. |
| `webhooks/` | Inbound and event-driven Action planning. |
| `schemas/` | OpenAPI and payload planning assets. |
| `review/` | Human review and restricted language guidance. |

## Next implementation step

Review the catalog first, then fill in the narrowest viable Action path for each workflow before considering any live integration.
