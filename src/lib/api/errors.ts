export type ApiErrorCode =
  | 'BAD_REQUEST'
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'INTERNAL_ERROR';

export class ApiError extends Error {
  readonly code: ApiErrorCode;

  readonly status: number;

  readonly details?: unknown;

  constructor(
    code: ApiErrorCode,
    message: string,
    status: number,
    details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export function badRequest(message: string, details?: unknown): ApiError {
  return new ApiError('BAD_REQUEST', message, 400, details);
}

export function validationError(message: string, details?: unknown): ApiError {
  return new ApiError('VALIDATION_ERROR', message, 422, details);
}

export function notFound(message: string): ApiError {
  return new ApiError('NOT_FOUND', message, 404);
}

export function internalError(message = 'Internal server error'): ApiError {
  return new ApiError('INTERNAL_ERROR', message, 500);
}
