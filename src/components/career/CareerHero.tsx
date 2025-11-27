'use client';

import { motion } from 'framer-motion';

export function CareerHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-br from-primary/5 via-transparent to-accent/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Bergabunglah dengan{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Tim Inovator
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bersama kami, Anda akan berperan dalam menciptakan solusi teknologi 
              yang mengubah cara bisnis beroperasi di era digital. Bergabunglah 
              dengan tim yang passionate dan berdedikasi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Lihat Lowongan Kerja
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-accent/10 transition-colors">
              Pelajari Budaya Kami
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
}
