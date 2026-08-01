# Contributing to Sovereign Systems Library

Thank you for contributing. This project prioritizes local-first privacy, decoupled data, and verifiable truth.

## Ground Rules

1. Keep data models independent from interface code.
2. Keep default behavior local-first and offline-safe.
3. Include provenance for factual or historical claims.
4. Do not introduce telemetry without explicit opt-in and documented rationale.

## Branch and PR Workflow

1. Fork/branch from `main`.
2. Keep one branch per focused change set.
3. Sync before opening a PR:
   - `git fetch origin`
   - `git rebase origin/main`
4. Validate with:
   - `npm run build --workspaces`
   - `npm test --workspaces --if-present`
   - `npm run lint --workspaces --if-present`
   - `npm run validate`
   - `npm run cli -- help`
5. Open one focused PR and complete the PR template.

### Anti-noise policy

- Do not open merge-only PRs.
- Do not open PRs with generic titles like "merge branch" or "merging continued".
- Use clear scoped titles with a conventional prefix such as `feat:`, `fix:`, `docs:`, or `chore:`.

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
