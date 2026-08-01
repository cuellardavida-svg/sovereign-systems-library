# sovereign-systems-library

> A local-first monorepo of tools that apply the principles of **decoupled data**, **local-first privacy**, **cross-disciplinary pedagogy**, and **verifiable truth** to entirely new domains.

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Monorepo](https://img.shields.io/badge/monorepo-npm%20workspaces-orange)](https://docs.npmjs.com/cli/using-npm/workspaces)

---

## Domains

- **Sovereign Lineage Ledger** — genealogy / history
- **Decentralized Newsroom Engine** — journalism
- **Kinaesthetic Discipline Tracker** — movement / restoration
- **Regenerative Economics Simulator** — micro-economics
- **Autonomous Story-Weaving Matrix** — creative writing

## Architectural Pillars

- Decoupled logic and data
- Local-first storage with optional Git workflows
- Verifiable provenance and source lineage
- Transparent collaboration patterns

---

## TypeScript Package Layer (`packages/`)

Five composable TypeScript packages, each embodying a foundational principle:

| Package | Principle | Description |
|---|---|---|
| [`@sovereign/core`](./packages/core) | Foundation | Shared utilities, types, and base abstractions |
| [`@sovereign/decoupled-data`](./packages/decoupled-data) | Decoupled Data | Schema-agnostic data pipeline and storage adapters |
| [`@sovereign/local-first`](./packages/local-first) | Local-First Privacy | Offline-capable, privacy-preserving sync primitives |
| [`@sovereign/pedagogy`](./packages/pedagogy) | Cross-Disciplinary Pedagogy | Knowledge graph and learning-path tooling |
| [`@sovereign/verifiable`](./packages/verifiable) | Verifiable Truth | Content-addressable proofs and attestation helpers |

---

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build all TypeScript packages:

   ```bash
   npm run build --workspaces
   ```

3. Show CLI help:

   ```bash
   npm run cli -- help
   ```

4. Validate all schema files:

   ```bash
   npm run validate
   ```

---

## Current State (v1.0.0)

Implemented now:

- Monorepo structure for `packages/*`, `apps/*`, shared `core/`, and `schemas/`
- Shared CLI scaffolding in `tools/cli.js`
- Domain and base JSON schema contracts
- Architecture docs, examples, and contribution templates

Planned next:

- SQLite adapter for `@sovereign/decoupled-data`
- Expanded CRDT sync behavior for `@sovereign/local-first`
- Knowledge graph ingestion features for `@sovereign/pedagogy`
- Stronger attestation and content-proof helpers for `@sovereign/verifiable`

---

## Monorepo Layout

```text
.
├── packages/               # TypeScript library packages (@sovereign/*)
│   ├── core/
│   ├── decoupled-data/
│   ├── local-first/
│   ├── pedagogy/
│   └── verifiable/
├── core/                   # Shared JS runtime utilities
├── apps/                   # Domain application stubs
│   ├── lineage-ledger/
│   ├── newsroom-engine/
│   ├── discipline-tracker/
│   ├── regenerative-sim/
│   └── story-weaving/
├── schemas/                # JSON Schema contracts
├── tools/                  # CLI tooling
├── docs/                   # Architecture documentation
├── examples/               # Runnable demos
└── .github/                # Issue & PR templates
```

---

## Shared Record Contract (v1)

All domain records map to the shared [schemas/record.schema.json](schemas/record.schema.json):

- `id`
- `type`
- `payload`
- `created_at`
- `updated_at`
- `source_refs[]`
- `agent_refs[]`
- `hash`
- `parent_hash`

---

## Philosophy

Each package is designed to be:

- **Decoupled** — no hard circular dependencies; packages compose upward from `core`.
- **Local-first** — assumes intermittent connectivity; all state is owned by the user.
- **Open** — licensed under AGPL-3.0 to ensure derivative works remain free.
- **Verifiable** — every data structure exposes a deterministic hash for integrity checks.

---

## Contributing

1. Fork the repository and create one focused feature branch from `main`.
2. Install dependencies: `npm install`
3. Make your changes in the relevant `packages/*` or `apps/*` directory.
4. Add or update tests, then run: `npm test --workspaces`
5. Open a pull request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md).

Workflow discipline:

- Prefer one feature branch per scoped change.
- Keep branches current with `git fetch` + `git rebase origin/main`.
- Avoid merge-only PRs that only reconcile branch history.
- Use descriptive Conventional Commit-style PR titles (`feat:`, `fix:`, `docs:`, `chore:`).

See [CONTRIBUTING.md](CONTRIBUTING.md) for provenance requirements and [CHANGELOG.md](CHANGELOG.md) for release history.

---

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).
