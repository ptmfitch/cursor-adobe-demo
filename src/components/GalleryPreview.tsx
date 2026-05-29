import GalleryImage from '@/components/GalleryImage';
import SearchBar from '@/components/SearchBar';
import SectionHeader from '@/components/ui/SectionHeader';
import { GALLERY_PREVIEW_COUNT } from '@/app/constants/galleryLayout.js';
import { hasPexelsApiKey } from '@/lib/env';
import buildPexelsUrl from '@/lib/gallery/buildPexelsUrl';
import { fetchImages } from '@/lib/gallery/fetchImages';
import { addBlurredDataUrls } from '@/lib/gallery/getBase64';
import type { Photo } from '@/models/Images';

function PlaceholderTile({ index }: { index: number }) {
  return (
    <div
      className="aspect-[4/5] rounded-xl ring-1 ring-white/10"
      style={{
        background:
          index % 2 === 0
            ? 'linear-gradient(145deg, rgb(237 28 36 / 0.15), rgb(20 20 25))'
            : 'linear-gradient(145deg, rgb(255 154 0 / 0.12), rgb(20 20 25))',
      }}
    />
  );
}

function PlaceholderGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {Array.from({ length: GALLERY_PREVIEW_COUNT }).map((_, index) => (
        <PlaceholderTile key={index} index={index} />
      ))}
    </div>
  );
}

async function loadPreviewPhotos(): Promise<Photo[]> {
  if (!hasPexelsApiKey()) return [];

  try {
    const images = await fetchImages(buildPexelsUrl('curated'));
    const photos = await addBlurredDataUrls(images);
    return photos.slice(0, GALLERY_PREVIEW_COUNT);
  } catch {
    return [];
  }
}

export default async function GalleryPreview() {
  const photos = await loadPreviewPhotos();

  return (
    <section aria-label="Gallery preview" className="space-y-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Creative gallery"
          title="Curated assets, ready to explore."
          description="Inspired by the Pexels gallery pattern — search, infinite scroll, and lightbox are yours to build live."
        />
        <SearchBar />
      </div>

      {photos.length > 0 ? (
        <div className="grid grid-cols-gallery auto-rows-gallery gap-1">
          {photos.map((photo) => (
            <GalleryImage key={photo.id} photo={photo} />
          ))}
        </div>
      ) : (
        <PlaceholderGrid />
      )}

      {photos.length === 0 ? (
        <p className="text-sm text-cursor-muted">
          Add <code className="text-adobe-amber">NEXT_PUBLIC_PEXELS_API_KEY</code>{' '}
          to <code className="text-adobe-amber">.env.local</code> to load live
          curated photos — or build the gallery flow first, then connect Pexels.
        </p>
      ) : null}
    </section>
  );
}
