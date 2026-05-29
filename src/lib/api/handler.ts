import { NextRequest, NextResponse } from 'next/server';
import { ApiError } from './errors';
import { jsonError } from './responses';

type RouteHandler = (
  request: NextRequest,
  context?: unknown
) => Promise<NextResponse> | NextResponse;

export function withApiHandler(handler: RouteHandler): RouteHandler {
  return async (request, context) => {
    try {
      return await handler(request, context);
    } catch (error) {
      if (error instanceof ApiError) {
        return jsonError(
          error.code,
          error.message,
          error.status,
          error.details
        );
      }

      console.error('[api] unexpected error', error);
      return jsonError('INTERNAL_ERROR', 'Internal server error', 500);
    }
  };
}
