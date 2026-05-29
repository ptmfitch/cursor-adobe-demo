import { NextRequest } from 'next/server';
import { z } from 'zod';
import { withApiHandler } from '@/lib/api/handler';
import { jsonOk } from '@/lib/api/responses';
import { parseQueryParams } from '@/lib/api/validation';
import { addBlurredDataUrls } from '@/lib/gallery/getBase64';
import buildPexelsUrl from '@/lib/gallery/buildPexelsUrl';
import { fetchImages } from '@/lib/gallery/fetchImages';
import { getNextPage } from '@/lib/gallery/getNextPage';

const galleryQuerySchema = z.object({
  topic: z.string().min(1).default('curated'),
  page: z.string().min(1, 'page query parameter is required'),
});

// DEMO: copy this pattern when building /api/gallery for infinite scroll.
export const GET = withApiHandler(async (request: NextRequest) => {
  const query = parseQueryParams(request.nextUrl.searchParams, galleryQuerySchema);
  const url = buildPexelsUrl(query.topic, query.page);
  const images = await fetchImages(url);
  const photos = await addBlurredDataUrls(images);
  const nextPage = getNextPage(images);

  return jsonOk({
    photos,
    nextPage,
    topic: query.topic,
    page: query.page,
  });
});
