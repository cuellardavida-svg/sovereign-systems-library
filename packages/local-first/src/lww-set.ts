/**
 * Last-Write-Wins Element Set (LWW-Set) — a foundational CRDT.
 *
 * Each key maps to its most-recently-written value. Merges are
 * deterministic: higher timestamps always win.
 */
export class LWWSet<K extends string, V> {
  private readonly entries = new Map<K, { value: V; ts: number }>();

  /**
   * Write a value with a monotonic timestamp.
   * If the key already exists with a higher timestamp, the write is ignored.
   */
  write(key: K, value: V, ts: number = Date.now()): void {
    const existing = this.entries.get(key);
    if (existing === undefined || ts >= existing.ts) {
      this.entries.set(key, { value, ts });
    }
  }

  /** Read the current value for a key, or undefined if absent. */
  read(key: K): V | undefined {
    return this.entries.get(key)?.value;
  }

  /** Return all current key-value pairs. */
  snapshot(): ReadonlyMap<K, V> {
    const result = new Map<K, V>();
    for (const [k, { value }] of this.entries) {
      result.set(k, value);
    }
    return result;
  }

  /**
   * Merge another LWWSet into this one.
   * The higher-timestamp entry always wins per key.
   */
  merge(other: LWWSet<K, V>): void {
    for (const [key, { value, ts }] of other.entries) {
      this.write(key, value, ts);
    }
  }
}
