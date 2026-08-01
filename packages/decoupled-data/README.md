# @sovereign/decoupled-data

Schema-agnostic data pipeline and storage adapters.

## Exports

- **`StorageAdapter<T>`** — interface for pluggable storage backends
- **`MemoryAdapter<T>`** — in-memory implementation (testing / demos)
- **`Pipeline<In, Out>`** — chains source → transform → sink
