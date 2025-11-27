import { Metadata } from 'next';
import { ContactHero, ContactForm, ContactInfo } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Hubungi Kami - Narayaone',
  description: 'Hubungi tim Naraya.One untuk pertanyaan, kerjasama, atau informasi lebih lanjut tentang layanan kami.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
