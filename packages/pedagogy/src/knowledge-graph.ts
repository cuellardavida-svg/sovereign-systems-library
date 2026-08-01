import type { EntityId } from '@sovereign/core';
import type { Concept } from './concept';

/**
 * A directed knowledge graph where nodes are Concepts and edges
 * are prerequisite relationships.
 */
export class KnowledgeGraph {
  private readonly nodes = new Map<EntityId, Concept>();

  /** Add or replace a concept in the graph. */
  addConcept(concept: Concept): void {
    this.nodes.set(concept.id, concept);
  }

  /** Retrieve a concept by ID. */
  getConcept(id: EntityId): Concept | undefined {
    return this.nodes.get(id);
  }

  /** Return all concepts across all disciplines. */
  allConcepts(): Concept[] {
    return Array.from(this.nodes.values());
  }

  /**
   * Compute a topologically-ordered learning path to reach a target concept.
   * Returns concepts in the order they should be studied (prerequisites first).
   * Throws if a cycle is detected or the concept is not found.
   */
  learningPath(targetId: EntityId): Concept[] {
    if (!this.nodes.has(targetId)) {
      throw new Error(`Concept not found: ${targetId}`);
    }

    const visited = new Set<EntityId>();
    const inStack = new Set<EntityId>();
    const ordered: Concept[] = [];

    const visit = (id: EntityId): void => {
      if (inStack.has(id)) {
        throw new Error(`Cycle detected at concept: ${id}`);
      }
      if (visited.has(id)) return;

      inStack.add(id);
      const concept = this.nodes.get(id);
      if (!concept) throw new Error(`Missing prerequisite concept: ${id}`);

      for (const prereqId of concept.prerequisites) {
        visit(prereqId);
      }

      inStack.delete(id);
      visited.add(id);
      ordered.push(concept);
    };

    visit(targetId);
    return ordered;
  }
}
