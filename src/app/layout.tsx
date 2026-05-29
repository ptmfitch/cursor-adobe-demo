import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adobe × Cursor — Creative Gallery',
  description: 'Adobe trial demo — build a Pexels-powered creative gallery with Cursor.',
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
