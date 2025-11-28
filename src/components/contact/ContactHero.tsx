'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-linear-to-br from-primary/10 via-transparent to-accent/10">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Hubungi{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Tim Kami
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Siap membantu Anda dengan solusi digital terbaik. Mari berdiskusi tentang kebutuhan bisnis Anda.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center pt-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Respon Cepat 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Konsultasi Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Tim Expert</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}