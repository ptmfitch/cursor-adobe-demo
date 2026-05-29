import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adobe × Cursor Trial',
  description: '30-day Cursor trial demo for Adobe teams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
