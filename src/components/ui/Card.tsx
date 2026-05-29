import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`glass-card rounded-2xl p-5 transition hover:border-white/15 ${className}`}
    >
      {children}
    </article>
  );
}
