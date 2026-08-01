import { createHash } from 'crypto';
import type { ContentId } from './types';

/**
 * Compute a deterministic SHA-256 content identifier for any serialisable value.
 *
 * @param value - Any JSON-serialisable value.
 * @returns Hex-encoded SHA-256 digest.
 */
export function computeCid(value: unknown): ContentId {
  const serialised = JSON.stringify(value, Object.keys(value as object).sort());
  return createHash('sha256').update(serialised, 'utf8').digest('hex');
}
