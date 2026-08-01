/**
 * Core shared type definitions for the Sovereign Systems Library.
 */

/** A deterministic, content-addressable identifier (e.g. SHA-256 hex). */
export type ContentId = string;

/** ISO-8601 timestamp string. */
export type ISOTimestamp = string;

/** Opaque identifier for any entity in the system. */
export type EntityId = string;

/**
 * Metadata that every sovereign record carries.
 */
export interface SovereignMeta {
  id: EntityId;
  createdAt: ISOTimestamp;
  updatedAt: ISOTimestamp;
  /** Content-addressable hash of the record payload. */
  cid: ContentId;
}

/**
 * A generic versioned record wrapping any payload.
 */
export interface VersionedRecord<T> {
  meta: SovereignMeta;
  version: number;
  payload: T;
}
