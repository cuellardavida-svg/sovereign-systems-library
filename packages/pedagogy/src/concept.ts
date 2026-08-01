import type { EntityId } from '@sovereign/core';

export type Discipline =
  | 'mathematics'
  | 'science'
  | 'philosophy'
  | 'engineering'
  | 'arts'
  | 'social-sciences'
  | string;

/**
 * A discrete unit of knowledge within a discipline.
 */
export interface Concept {
  id: EntityId;
  title: string;
  discipline: Discipline;
  /** Short plain-text description (max 500 chars). */
  summary: string;
  /** IDs of concepts that must be understood before this one. */
  prerequisites: EntityId[];
}
