import { z } from 'zod';
import { validationError } from './errors';

export async function parseJsonBody<T extends z.ZodType>(
  request: Request,
  schema: T
): Promise<z.infer<T>> {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    throw validationError('Request body must be valid JSON');
  }

  const result = schema.safeParse(raw);

  if (!result.success) {
    throw validationError('Invalid request body', result.error.flatten());
  }

  return result.data;
}

export function parseQueryParams<T extends z.ZodType>(
  searchParams: URLSearchParams,
  schema: T
): z.infer<T> {
  const params = Object.fromEntries(searchParams.entries());
  const result = schema.safeParse(params);

  if (!result.success) {
    throw validationError('Invalid query parameters', result.error.flatten());
  }

  return result.data;
}
