import { SustainabilitySection } from '@/components/sustainability/SustainabilitySection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSR & Keberlanjutan | Naraya.One',
  description: 'Komitmen Naraya.One terhadap tanggung jawab sosial perusahaan dan pembangunan berkelanjutan. Pelajari inisiatif hijau, program komunitas, dan dampak positif kami.',
  keywords: 'Naraya.One, CSR, keberlanjutan, tanggung jawab sosial, lingkungan, komunitas, pembangunan berkelanjutan',
  openGraph: {
    title: 'CSR & Keberlanjutan | Naraya.One',
    description: 'Komitmen Naraya.One terhadap tanggung jawab sosial perusahaan dan pembangunan berkelanjutan.',
    url: '/sustainability',
  },
  twitter: {
    title: 'CSR & Keberlanjutan | Naraya.One',
    description: 'Komitmen Naraya.One terhadap tanggung jawab sosial perusahaan dan pembangunan berkelanjutan.',
  },
};

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      <SustainabilitySection />
    </main>
  );
}
