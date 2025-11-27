import { Metadata } from 'next';
import {
  CareerHero,
  WhyWorkWithUs,
  CareerBenefits,
  InternshipProgram,
  JobOpenings,
} from '@/components/career';

export const metadata: Metadata = {
  title: 'Karir - Narayaone',
  description: 'Bergabunglah dengan tim Naraya.One dan bangun masa depan teknologi bersama kami. Temukan peluang karir terbaik di bidang teknologi dan inovasi.',
};

export default function CareersPage() {
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
