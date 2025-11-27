'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CareerHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Bergabung Dengan Ekosistem{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Naraya.One
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Bangun masa depan telekomunikasi dan digital ecosystem Indonesia.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button size="lg" className="text-lg font-semibold">
                Lihat Lowongan
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-semibold">
                Tentang Kami
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
}
