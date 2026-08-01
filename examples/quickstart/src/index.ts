/**
 * Sovereign Systems Library — Quickstart Demo
 *
 * Demonstrates all five packages working together:
 *   1. @sovereign/pedagogy  — KnowledgeGraph + learningPath
 *   2. @sovereign/verifiable — seal + verify envelopes
 *   3. @sovereign/decoupled-data — MemoryAdapter + Pipeline
 *   4. @sovereign/local-first — SyncLog
 *   5. @sovereign/core — computeCid (used internally)
 */

import { KnowledgeGraph } from '@sovereign/pedagogy';
import { seal, verify } from '@sovereign/verifiable';
import { MemoryAdapter, Pipeline } from '@sovereign/decoupled-data';
import { SyncLog } from '@sovereign/local-first';

async function main(): Promise<void> {
  // ── 1. Build a small knowledge graph ──────────────────────────────────────
  const graph = new KnowledgeGraph();

  graph.addConcept({
    id: 'arithmetic',
    title: 'Arithmetic',
    discipline: 'mathematics',
    summary: 'Basic operations: addition, subtraction, multiplication, division.',
    prerequisites: [],
  });

  graph.addConcept({
    id: 'algebra',
    title: 'Algebra',
    discipline: 'mathematics',
    summary: 'Symbolic representation and manipulation of mathematical relationships.',
    prerequisites: ['arithmetic'],
  });

  graph.addConcept({
    id: 'calculus',
    title: 'Calculus',
    discipline: 'mathematics',
    summary: 'Study of continuous change through derivatives and integrals.',
    prerequisites: ['algebra'],
  });

  // ── 2. Resolve the learning path to "calculus" ────────────────────────────
  const path = graph.learningPath('calculus');
  console.log('\n📚 Learning path to Calculus:');
  path.forEach((c, i) => console.log(`  ${i + 1}. ${c.title}`));

  // ── 3. Seal each concept title in a tamper-evident envelope ───────────────
  console.log('\n🔒 Sealing concept titles:');
  const source = new MemoryAdapter<{ title: string }>();

  for (const concept of path) {
    await source.put(concept.id, { title: concept.title });
  }

  // ── 4. Pipeline: read from source, seal titles, write to sink ─────────────
  const sink = new MemoryAdapter<ReturnType<typeof seal>>();

  const pipeline = new Pipeline(source, sink, (item) => seal(item));
  const result = await pipeline.run();

  if (!result.ok) {
    console.error('Pipeline failed:', result.error);
    process.exit(1);
  }

  console.log(`  Processed: [${result.value.processed.join(', ')}]`);
  console.log(`  Failed:    [${result.value.failed.join(', ')}]`);

  // ── 5. Verify the sealed envelopes ────────────────────────────────────────
  console.log('\n✅ Verifying envelopes:');
  for (const id of result.value.processed) {
    const getResult = await sink.get(id);
    if (getResult.ok && getResult.value) {
      const valid = verify(getResult.value);
      console.log(`  ${id}: ${valid ? '✓ valid' : '✗ TAMPERED'}`);
    }
  }

  // ── 6. Append writes to a SyncLog ─────────────────────────────────────────
  const syncLog = new SyncLog();

  for (const concept of path) {
    syncLog.append({
      operationId: `op-${concept.id}`,
      entityId: concept.id,
      operation: 'create',
      payload: { title: concept.title },
      timestamp: new Date().toISOString(),
    });
  }

  console.log(`\n📋 SyncLog — pending operations: ${syncLog.pending().length}`);
  syncLog.pending().forEach((e) =>
    console.log(`  [${e.operation.toUpperCase()}] ${e.entityId}`),
  );

  // Mark one as synced
  syncLog.markSynced('op-arithmetic');
  console.log(`\n  After sync: ${syncLog.pending().length} still pending`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
