import type { ImagesResults } from '@/models/Images';
import { ImagesSchemaWithPhotos } from '@/models/Images';
import { ApiError, internalError } from '@/lib/api/errors';
import { getPexelsApiKey } from '@/lib/env';

export async function fetchImages(url: string): Promise<ImagesResults> {
  let response: Response;

  try {
    response = await fetch(url, {
      headers: {
        Authorization: getPexelsApiKey(),
      },
      next: { revalidate: 3600 },
    });
  } catch {
    throw internalError('Unable to reach Pexels');
  }

  if (response.status === 401) {
    throw new ApiError('UNAUTHORIZED', 'Invalid Pexels API key', 401);
  }

  if (!response.ok) {
    throw new ApiError(
      'BAD_REQUEST',
      `Pexels request failed with status ${response.status}`,
      response.status
    );
  }

  const payload: unknown = await response.json();
  const parsed = ImagesSchemaWithPhotos.safeParse(payload);

  if (!parsed.success) {
    throw internalError('Pexels response did not match expected schema');
  }

  if (parsed.data.total_results === 0) {
    throw new ApiError('NOT_FOUND', 'No images found for this query', 404);
  }

  return parsed.data;
}
