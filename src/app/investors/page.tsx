import { Metadata } from 'next';
import {
  InvestorHero,
  InvestorOverview,
  FinancialHighlights,
  InvestmentOpportunity,
  InvestorContact,
} from '@/components/investor';

export const metadata: Metadata = {
  title: 'Investors - Narayaone',
  description: 'Explore investment opportunities with Narayaone. Learn about our financial performance and growth potential.',
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen">
      <InvestorHero />
      <InvestorOverview />
      <FinancialHighlights />
      <InvestmentOpportunity />
      <InvestorContact />
    </main>
  );
}
