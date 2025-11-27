import { NewsSection } from '@/components/news/NewsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Insights | Naraya.One',
  description: 'Latest news, insights, and updates from Naraya.One and our portfolio companies. Stay informed about industry trends, company announcements, and strategic developments.',
  openGraph: {
    title: 'News & Insights | Naraya.One',
    description: 'Latest news, insights, and updates from Naraya.One and our portfolio companies.',
    url: '/news',
  },
  twitter: {
    title: 'News & Insights | Naraya.One',
    description: 'Latest news, insights, and updates from Naraya.One and our portfolio companies.',
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <NewsSection />
    </main>
  );
}
