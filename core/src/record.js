function normalizeRecord(input) {
  const now = new Date().toISOString();
  return {
    id: input.id,
    type: input.type,
    payload: input.payload || {},
    created_at: input.created_at || now,
    updated_at: now,
    source_refs: Array.isArray(input.source_refs) ? input.source_refs : [],
    agent_refs: Array.isArray(input.agent_refs) ? input.agent_refs : [],
    hash: input.hash || "",
    parent_hash: input.parent_hash || null
  };
}

module.exports = {
  normalizeRecord
};
