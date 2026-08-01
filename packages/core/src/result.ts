/**
 * A lightweight Result type (Ok / Err) for explicit error handling
 * without exceptions propagating across package boundaries.
 */

export type Ok<T> = { readonly ok: true; readonly value: T };
export type Err<E> = { readonly ok: false; readonly error: E };
export type Result<T, E = Error> = Ok<T> | Err<E>;

export function ok<T>(value: T): Ok<T> {
  return { ok: true, value };
}

export function err<E>(error: E): Err<E> {
  return { ok: false, error };
}

export function isOk<T, E>(result: Result<T, E>): result is Ok<T> {
  return result.ok === true;
}

export function isErr<T, E>(result: Result<T, E>): result is Err<E> {
  return result.ok === false;
}

/**
 * Unwrap a Result or throw the error.
 */
export function unwrap<T, E extends Error>(result: Result<T, E>): T {
  if (isOk(result)) return result.value;
  throw result.error;
}
