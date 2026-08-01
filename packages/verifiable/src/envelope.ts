import { computeCid } from '@sovereign/core';
import type { ContentId, ISOTimestamp } from '@sovereign/core';

/**
 * A sealed envelope that wraps any payload with a tamper-evident CID.
 */
export interface Envelope<T> {
  payload: T;
  cid: ContentId;
  sealedAt: ISOTimestamp;
}

/**
 * Seal a payload inside a tamper-evident envelope.
 */
export function seal<T>(payload: T): Envelope<T> {
  return {
    payload,
    cid: computeCid(payload),
    sealedAt: new Date().toISOString(),
  };
}

/**
 * Verify that an envelope's payload matches its stored CID.
 * Returns true if the payload has not been tampered with.
 */
export function verify<T>(envelope: Envelope<T>): boolean {
  return computeCid(envelope.payload) === envelope.cid;
}
