# Architecture Overview

## Guiding Principles

The **Sovereign Systems Library** is built on four foundational principles, each realised by a dedicated package:

| Principle | Package |
|---|---|
| Decoupled Data | `@sovereign/decoupled-data` |
| Local-First Privacy | `@sovereign/local-first` |
| Cross-Disciplinary Pedagogy | `@sovereign/pedagogy` |
| Verifiable Truth | `@sovereign/verifiable` |

A fifth package, `@sovereign/core`, provides shared types and utilities consumed by all others.

---

## Dependency Graph

```
@sovereign/core
     ↑
     ├─── @sovereign/decoupled-data
     ├─── @sovereign/local-first
     ├─── @sovereign/pedagogy
     └─── @sovereign/verifiable
```

All four domain packages depend only on `@sovereign/core`. There are no circular dependencies and no cross-domain package dependencies at v1.

---

## Package Details

### `@sovereign/core`

- **ContentId** (`string`) — hex-encoded SHA-256 digest used as a universal content identifier.
- **Result\<T, E\>** — Ok/Err discriminated union for explicit error handling.
- **computeCid(value)** — deterministic serialisation + SHA-256.
- **VersionedRecord\<T\>** — wraps any payload with metadata and a version counter.

### `@sovereign/decoupled-data`

Implements an **adapter pattern** for storage backends:

```
StorageAdapter<T>  (interface)
       ↑
MemoryAdapter<T>   (in-memory, for tests / demos)
```

A `Pipeline<In, Out>` chains a source adapter → a transform function → a sink adapter. This decouples schema evolution from persistence concerns.

### `@sovereign/local-first`

- **LWWSet\<K, V\>** — Last-Write-Wins element set CRDT for deterministic conflict resolution when merging concurrent writes.
- **SyncLog** — append-only log of local mutations; entries are marked as synced when a network round-trip succeeds.

### `@sovereign/pedagogy`

- **Concept** — a node in the knowledge graph (id, title, discipline, prerequisites).
- **KnowledgeGraph** — directed graph with a topological `learningPath(targetId)` resolver. Detects cycles and missing prerequisites.

### `@sovereign/verifiable`

- **Envelope\<T\>** — wraps any payload with a CID and a seal timestamp.
- **seal(payload)** / **verify(envelope)** — create and validate tamper-evident wrappers.
- **Attestation** — a formal claim about a subject, backed by an evidence CID and an issuer identity.

---

## Design Decisions

### Why AGPL-3.0?

Any derivative work — including SaaS usage — must release source. This ensures the library remains a public good.

### Why npm workspaces over a build tool (Turborepo / Nx)?

v1 keeps orchestration minimal. A single `npm run build --workspaces` is sufficient. Build-tool integration can be layered in v2.

### Why SHA-256 for CIDs rather than a full CID spec (multihash)?

SHA-256 hex strings are dependency-free, universally understood, and sufficient for v1 integrity checks. Migration to a proper CID library (e.g. `multiformats`) is tracked in the roadmap.
