/**
 * @sovereign/decoupled-data
 *
 * Schema-agnostic data pipeline and storage adapters.
 * Implements a simple adapter pattern so the same pipeline logic
 * can run against in-memory, file-system, or remote storage backends.
 */

export * from './adapter';
export * from './pipeline';
export * from './memory-adapter';
