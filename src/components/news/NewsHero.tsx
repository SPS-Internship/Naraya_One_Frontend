'use client';

import { motion } from 'framer-motion';

export function NewsHero() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          News & <span className="text-primary">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Stay informed with the latest developments from Naraya.One and our portfolio companies. 
          Discover industry insights, company announcements, and strategic updates that shape our digital ecosystem.
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">150+</div>
          <div className="text-muted-foreground">Published Articles</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">25K+</div>
          <div className="text-muted-foreground">Monthly Readers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">6</div>
          <div className="text-muted-foreground">Content Categories</div>
        </div>
      </motion.div>
    </div>
  );
}
