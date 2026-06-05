# Webhook Proxy

## Purpose

Describe a proxy-style API key path for sending or receiving structured events.

## When to use

- The workflow needs a single hop to a controlled service.
- The operator wants a narrow API key path instead of OAuth.

## Inputs

- Event type
- Payload shape
- Review requirement

## Outputs

- Proxy planning note
- Event outline
- Safety checkpoint

## Safety boundary

- No live network code.
- No secret handling in this file.

## Next implementation step

Document the event contract before any implementation discussion.
