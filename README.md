# Sovereign Systems Library (v1 Scaffold)

A local-first monorepo for decoupled data tools built around privacy, verifiability, and cross-disciplinary pedagogy.

## Domains

- Sovereign Lineage Ledger (genealogy/history)
- Decentralized Newsroom Engine (journalism)
- Kinaesthetic Discipline Tracker (movement/restoration)
- Regenerative Economics Simulator (micro-economics)
- Autonomous Story-Weaving Matrix (creative writing)

## Architectural Pillars

- Decoupled logic and data
- Local-first storage with optional Git workflows
- Verifiable provenance and source lineage
- Transparent collaboration patterns

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Show CLI help:

   ```bash
   npm run cli -- help
   ```

3. Validate all schema files:

   ```bash
   npm run validate
   ```

## Monorepo Layout

```text
.
├── core/
├── apps/
│   ├── lineage-ledger/
│   ├── newsroom-engine/
│   ├── discipline-tracker/
│   ├── regenerative-sim/
│   └── story-weaving/
├── schemas/
├── tools/
└── .github/
```

## Shared Record Contract (v1)

All domain records should map to the shared [schemas/record.schema.json](schemas/record.schema.json):

- `id`
- `type`
- `payload`
- `created_at`
- `updated_at`
- `source_refs[]`
- `agent_refs[]`
- `hash`
- `parent_hash`

## Governance

- See [CONTRIBUTING.md](CONTRIBUTING.md) for collaboration and provenance requirements.
- See [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md) for required merge checks.
