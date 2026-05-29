'use client';

import { FormEvent, useState } from 'react';

type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = 'Search creative assets…',
}: SearchBarProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // DEMO: wire to /results/[query] during live build.
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <label htmlFor="gallery-search" className="sr-only">
        Search gallery
      </label>
      <input
        id="gallery-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/12 bg-black/30 px-5 py-3 text-base text-cursor-text placeholder:text-cursor-muted focus:border-adobe-amber/50 focus:outline-none"
      />
    </form>
  );
}
