import { Metadata } from 'next';
import { CareerHero, JobOpenings, WhyWorkWithUs, CareerBenefits, InternshipProgram } from '@/components/career';

export const metadata: Metadata = {
  title: 'Karir - Narayaone',
  description: 'Bergabunglah dengan tim Narayaone dan bangun masa depan teknologi bersama kami. Temukan peluang karir terbaik di bidang teknologi dan inovasi.',
};

export default function CareerPage() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <WhyWorkWithUs />
      <CareerBenefits />
      <InternshipProgram />
      <JobOpenings />
    </main>
  );
}
