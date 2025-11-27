'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-br from-primary/5 via-transparent to-accent/5">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami siap membantu Anda. Hubungi tim kami untuk pertanyaan, kerjasama, atau informasi lebih lanjut.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
