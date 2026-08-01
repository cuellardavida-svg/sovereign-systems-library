import type { ISOTimestamp, EntityId } from '@sovereign/core';

export type SyncOperation = 'create' | 'update' | 'delete';

export interface SyncEntry {
  operationId: string;
  entityId: EntityId;
  operation: SyncOperation;
  payload: unknown;
  timestamp: ISOTimestamp;
  synced: boolean;
}

/**
 * An append-only log of local mutations, used to replay or sync
 * changes with a remote when connectivity is restored.
 */
export class SyncLog {
  private readonly log: SyncEntry[] = [];

  /** Append a new entry to the log. */
  append(entry: Omit<SyncEntry, 'synced'>): void {
    this.log.push({ ...entry, synced: false });
  }

  /** Mark an entry as successfully synced. */
  markSynced(operationId: string): void {
    const entry = this.log.find((e) => e.operationId === operationId);
    if (entry) entry.synced = true;
  }

  /** Return all entries that have not yet been synced. */
  pending(): ReadonlyArray<SyncEntry> {
    return this.log.filter((e) => !e.synced);
  }

  /** Return the full log (synced + pending). */
  all(): ReadonlyArray<SyncEntry> {
    return [...this.log];
  }
}
