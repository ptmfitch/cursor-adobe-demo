import { NextResponse } from 'next/server';
import type { ApiErrorCode } from './errors';

type ErrorBody = {
  error: {
    code: ApiErrorCode;
    message: string;
    details?: unknown;
  };
};

export function jsonOk<T>(
  data: T,
  init?: ResponseInit
): NextResponse<{ data: T }> {
  return NextResponse.json({ data }, init);
}

export function jsonError(
  code: ApiErrorCode,
  message: string,
  status: number,
  details?: unknown
): NextResponse<ErrorBody> {
  return NextResponse.json(
    {
      error: {
        code,
        message,
        ...(details === undefined ? {} : { details }),
      },
    },
    { status }
  );
}
