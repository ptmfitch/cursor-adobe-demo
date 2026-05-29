import type { ImagesResults } from '@/models/Images';

function getPageNumber(url: string): string | null {
  const { searchParams } = new URL(url);
  return searchParams.get('page');
}

export function getNextPage(images: ImagesResults): string | null {
  if (!images.next_page) return null;
  return getPageNumber(images.next_page);
}
