# sovereign-systems-library

> A monorepo of tools that apply the principles of **decoupled data**, **local-first privacy**, **cross-disciplinary pedagogy**, and **verifiable truth** to entirely new domains.

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Monorepo](https://img.shields.io/badge/monorepo-npm%20workspaces-orange)](https://docs.npmjs.com/cli/using-npm/workspaces)

---

## Overview

The **Sovereign Systems Library** is a quintet monorepo — five composable packages designed to be used independently or together. Each package embodies a foundational principle for building systems that respect human agency, epistemic integrity, and open knowledge.

| Package | Principle | Description |
|---|---|---|
| [`@sovereign/core`](./packages/core) | Foundation | Shared utilities, types, and base abstractions |
| [`@sovereign/decoupled-data`](./packages/decoupled-data) | Decoupled Data | Schema-agnostic data pipeline and storage adapters |
| [`@sovereign/local-first`](./packages/local-first) | Local-First Privacy | Offline-capable, privacy-preserving sync primitives |
| [`@sovereign/pedagogy`](./packages/pedagogy) | Cross-Disciplinary Pedagogy | Knowledge graph and learning-path tooling |
| [`@sovereign/verifiable`](./packages/verifiable) | Verifiable Truth | Content-addressable proofs and attestation helpers |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9 (workspaces support)

### Install all packages

```bash
npm install
```

### Build all packages

```bash
npm run build --workspaces
```

### Run all tests

```bash
npm test --workspaces
```

---

## Repository Structure

```
sovereign-systems-library/
├── packages/
│   ├── core/                  # @sovereign/core
│   ├── decoupled-data/        # @sovereign/decoupled-data
│   ├── local-first/           # @sovereign/local-first
│   ├── pedagogy/              # @sovereign/pedagogy
│   └── verifiable/            # @sovereign/verifiable
├── docs/
│   └── architecture.md        # High-level design doc
├── examples/
│   └── quickstart/            # Runnable quickstart demo
├── CHANGELOG.md
├── LICENSE                    # AGPL-3.0
└── README.md
```

---

## Philosophy

Each package is designed to be:

- **Decoupled** — no hard circular dependencies; packages compose upward from `core`.
- **Local-first** — assumes intermittent connectivity; all state is owned by the user.
- **Open** — licensed under AGPL-3.0 to ensure derivative works remain free.
- **Verifiable** — every data structure exposes a deterministic hash for integrity checks.

---

## Contributing

1. Fork the repository and create a feature branch.
2. Install dependencies: `npm install`
3. Make your changes in the relevant `packages/*` directory.
4. Add or update tests, then run: `npm test --workspaces`
5. Open a pull request with a clear description.

Please read [CHANGELOG.md](CHANGELOG.md) to understand how we track changes.

---

## License

This project is licensed under the [GNU Affero General Public License v3.0](LICENSE).
