# Quickstart Example

This demo shows how all five `@sovereign/*` packages work together.

## Run it

```bash
# From the repo root
npm install
cd examples/quickstart
npx ts-node src/index.ts
```

## What it does

1. Creates a **KnowledgeGraph** with three mathematical concepts.
2. Resolves the **learning path** to reach "calculus" (prerequisites first).
3. Seals each concept title in a **tamper-evident envelope** and verifies it.
4. Stores the sealed envelopes in a **MemoryAdapter** via a decoupled **Pipeline**.
5. Appends each write to a **SyncLog** and prints pending operations.
