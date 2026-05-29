import { getPlaiceholder } from 'plaiceholder';
import type { ImagesResults, Photo } from '@/models/Images';

async function getBase64(imageUrl: string): Promise<string | undefined> {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch {
    return undefined;
  }
}

export async function addBlurredDataUrls(
  images: ImagesResults
): Promise<Photo[]> {
  const base64Results = await Promise.all(
    images.photos.map((photo) => getBase64(photo.src.large))
  );

  return images.photos.map((photo, index) => ({
    ...photo,
    blurredDataUrl: base64Results[index],
  }));
}
