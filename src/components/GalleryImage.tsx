import type { Photo } from '@/models/Images';
import {
  GALLERY_GRID_ROW_UNIT_PX,
  GALLERY_THUMB_WIDTH_PX,
} from '@/app/constants/galleryLayout.js';
import Image from 'next/image';

type GalleryImageProps = {
  photo: Photo;
};

export default function GalleryImage({ photo }: GalleryImageProps) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(GALLERY_THUMB_WIDTH_PX * widthHeightRatio);
  const photoSpans =
    Math.ceil(galleryHeight / GALLERY_GRID_ROW_UNIT_PX) + 1;

  return (
    <div
      className="w-gallery-thumb justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <div className="overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-adobe-red/40">
        <Image
          src={photo.src.large}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={`${GALLERY_THUMB_WIDTH_PX}px`}
          placeholder={photo.blurredDataUrl ? 'blur' : 'empty'}
          blurDataURL={photo.blurredDataUrl}
          className="transition duration-300 hover:scale-[1.02] hover:opacity-90"
        />
      </div>
    </div>
  );
}
