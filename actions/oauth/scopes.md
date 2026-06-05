# OAuth Scopes

## Purpose

Record the minimum access needed for an OAuth-connected Action.

## When to use

- You need to list the smallest viable permission set.
- You want to avoid overbroad access.

## Inputs

- Connected app name
- User workflow
- Needed action type

## Outputs

- Scope list
- Access note
- Review rule

## Safety boundary

- Keep scopes minimal.
- Human review required before any borrower-facing send.

## Next implementation step

Map each scope to one workflow before considering implementation.
