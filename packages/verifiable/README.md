# @sovereign/verifiable

Content-addressable proofs and attestation helpers.

## Exports

- **`seal(payload)`** / **`verify(envelope)`** — tamper-evident envelope creation and verification
- **`Attestation`** — formal claim with evidence CID and issuer
- **`attest(subjectId, claim, evidence, issuer?)`** — create a new attestation
