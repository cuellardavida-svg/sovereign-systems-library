function createLedgerEntry(record, previousHash) {
  return {
    ...record,
    parent_hash: previousHash || null
  };
}

module.exports = {
  createLedgerEntry
};
