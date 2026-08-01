# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- `@sovereign/core` v1 public API stabilization
- `@sovereign/decoupled-data` storage adapter for SQLite
- `@sovereign/local-first` CRDT-based sync primitives
- `@sovereign/pedagogy` knowledge-graph ingestion pipeline
- `@sovereign/verifiable` SHA-256 / CID attestation helpers

---

## [1.0.0] - 2026-08-01

### Added
- Initial v1 monorepo scaffold with npm workspaces
- Five packages: `core`, `decoupled-data`, `local-first`, `pedagogy`, `verifiable`
- Root-level `package.json`, `tsconfig.base.json`, `.gitignore`
- Architecture documentation in `docs/architecture.md`
- Quickstart example in `examples/quickstart/`
- AGPL-3.0 license
