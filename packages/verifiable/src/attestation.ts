import type { EntityId, ISOTimestamp } from '@sovereign/core';
import { computeCid } from '@sovereign/core';
import type { ContentId } from '@sovereign/core';

export interface Attestation {
  id: string;
  /** The entity being attested to. */
  subjectId: EntityId;
  /** Free-form claim about the subject. */
  claim: string;
  /** CID of the evidence payload. */
  evidenceCid: ContentId;
  /** ISO-8601 timestamp of when the attestation was made. */
  issuedAt: ISOTimestamp;
  /** Optional identifier of the attesting party. */
  issuer?: string;
}

/**
 * Create a new attestation for a subject with a given claim and evidence.
 */
export function attest(
  subjectId: EntityId,
  claim: string,
  evidence: unknown,
  issuer?: string,
): Attestation {
  const issuedAt = new Date().toISOString();
  const evidenceCid = computeCid(evidence);
  const id = computeCid({ subjectId, claim, evidenceCid, issuedAt });

  return { id, subjectId, claim, evidenceCid, issuedAt, issuer };
}
