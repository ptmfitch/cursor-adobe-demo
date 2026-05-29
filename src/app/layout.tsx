import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adobe × Cursor',
  description: 'Welcome to your Cursor trial.',
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
