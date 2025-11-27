import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Narayaone',
  description: 'Explore career opportunities at Narayaone.',
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Careers</h1>
          <p className="text-lg text-gray-600">Join our team and make an impact</p>
        </div>
      </section>
    </main>
  );
}
