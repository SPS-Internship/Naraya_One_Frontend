import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Narayaone',
  description: 'Get in touch with Narayaone. We would love to hear from you.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </div>
      </section>
    </main>
  );
}
