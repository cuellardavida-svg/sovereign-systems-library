import type { StorageAdapter } from './adapter';
import type { Result } from '@sovereign/core';
import { ok, err } from '@sovereign/core';

export type Transform<In, Out> = (input: In) => Out | Promise<Out>;

/**
 * A simple single-stage pipeline that reads from an adapter,
 * applies a transform, and writes results to another adapter.
 */
export class Pipeline<In, Out> {
  constructor(
    private readonly source: StorageAdapter<In>,
    private readonly sink: StorageAdapter<Out>,
    private readonly transform: Transform<In, Out>,
  ) {}

  /**
   * Process all records currently in the source adapter.
   * Returns a summary of processed keys.
   */
  async run(): Promise<Result<{ processed: string[]; failed: string[] }>> {
    const keysResult = await this.source.keys();
    if (!keysResult.ok) return keysResult as Result<never>;

    const processed: string[] = [];
    const failed: string[] = [];

    for (const key of keysResult.value) {
      const getResult = await this.source.get(key);
      if (!getResult.ok || getResult.value === undefined) {
        failed.push(key);
        continue;
      }

      try {
        const transformed = await this.transform(getResult.value);
        const putResult = await this.sink.put(key, transformed);
        if (putResult.ok) {
          processed.push(key);
        } else {
          failed.push(key);
        }
      } catch {
        failed.push(key);
      }
    }

    return ok({ processed, failed });
  }
}
