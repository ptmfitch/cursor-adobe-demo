import { internalError } from '@/lib/api/errors';

export function getPexelsApiKey(): string {
  const key = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

  if (!key) {
    throw internalError(
      'NEXT_PUBLIC_PEXELS_API_KEY is not configured — add it to .env.local'
    );
  }

  return key;
}

export function hasPexelsApiKey(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_PEXELS_API_KEY);
}
