# Contributing to Sovereign Systems Library

Thank you for contributing. This project prioritizes local-first privacy, decoupled data, and verifiable truth.

## Ground Rules

1. Keep data models independent from interface code.
2. Keep default behavior local-first and offline-safe.
3. Include provenance for factual or historical claims.
4. Do not introduce telemetry without explicit opt-in and documented rationale.

## Branch and PR Workflow

1. Fork/branch from `main`.
2. Make focused changes.
3. Validate with:
   - `npm run validate`
   - `npm run cli -- help`
4. Open a PR and complete the PR template.

## Provenance Requirements

For content-bearing changes (history/journalism/economic assumptions), include:

- source references
- method notes
- uncertainty notes where relevant

## AI Collaboration Disclosure

If machine intelligence influenced the work, include:

- tool/model used
- what was generated vs. human-authored
- verification steps taken
