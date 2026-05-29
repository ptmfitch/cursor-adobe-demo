import Image from 'next/image';

export default function SiteChrome() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/cursor-mark.svg"
          alt=""
          width={28}
          height={28}
          className="opacity-90"
          aria-hidden
        />
        <span className="text-sm font-medium tracking-wide text-cursor-muted">
          Cursor
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full bg-adobe-red"
          aria-hidden
        />
        <span className="text-sm font-medium tracking-wide text-cursor-muted">
          Adobe
        </span>
      </div>
    </div>
  );
}
