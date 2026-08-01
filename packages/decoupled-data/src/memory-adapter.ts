import { ok, err } from '@sovereign/core';
import type { StorageAdapter } from './adapter';
import type { Result } from '@sovereign/core';

/**
 * In-memory implementation of StorageAdapter.
 * Useful for testing and development.
 */
export class MemoryAdapter<T> implements StorageAdapter<T> {
  private readonly store = new Map<string, T>();

  async put(key: string, value: T): Promise<Result<void>> {
    this.store.set(key, value);
    return ok(undefined);
  }

  async get(key: string): Promise<Result<T | undefined>> {
    return ok(this.store.get(key));
  }

  async del(key: string): Promise<Result<void>> {
    this.store.delete(key);
    return ok(undefined);
  }

  async keys(): Promise<Result<string[]>> {
    return ok(Array.from(this.store.keys()));
  }
}
