import { Metadata } from 'next';
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  ContactMap
} from '@/components/contact';

export const metadata: Metadata = {
  title: 'Hubungi Kami - Naraya.One',
  description: 'Hubungi tim Naraya.One untuk informasi lebih lanjut tentang layanan digital ecosystem kami.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  );
}