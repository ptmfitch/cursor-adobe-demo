import Image from 'next/image';

export default function SiteChrome() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/cursor-logo.png"
          alt=""
          width={28}
          height={28}
          className="opacity-90"
          aria-hidden
        />
        <div>
          <p className="text-sm font-medium text-cursor-text">Creative Gallery</p>
          <p className="text-xs text-cursor-muted">Adobe × Cursor trial</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-adobe-red" aria-hidden />
        <span className="text-sm font-medium tracking-wide text-cursor-muted">
          Adobe
        </span>
      </div>
    </div>
  );
}
