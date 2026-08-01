import type { Result } from '@sovereign/core';

/**
 * A generic storage adapter contract.
 * Implementations can target any backend (memory, SQLite, S3, etc.).
 */
export interface StorageAdapter<T> {
  /** Persist a record by its key. */
  put(key: string, value: T): Promise<Result<void>>;
  /** Retrieve a record by its key. */
  get(key: string): Promise<Result<T | undefined>>;
  /** Delete a record by its key. */
  del(key: string): Promise<Result<void>>;
  /** List all stored keys. */
  keys(): Promise<Result<string[]>>;
}
