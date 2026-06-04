import '@/app/ui/global.css';
import { inter,electrolize,lusitana } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${electrolize.className} antialiased`}>{children}</body>
    </html>
  );
}
