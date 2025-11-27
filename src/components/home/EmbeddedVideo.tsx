'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/24/solid'

export default function EmbeddedVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story in Motion
            </h2>
            <p className="text-xl text-gray-600">
              Discover how Naraya.One is transforming industries through strategic innovation and integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            {!isPlaying ? (
              // Video Thumbnail
              <div className="relative w-full h-full bg-gradient-to-br from-[#4F200D] via-[#FF9A00] to-[#FFD93D] flex items-center justify-center cursor-pointer group"
                   onClick={() => setIsPlaying(true)}>
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 group-hover:bg-white/30 transition-all duration-300"
                >
                  <PlayIcon className="w-8 h-8 text-white ml-1" />
                </motion.button>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    The Naraya.One Vision
                  </h3>
                  <p className="text-white/90 text-sm">
                    A glimpse into our integrated ecosystem and future ambitions
                  </p>
                  <div className="flex items-center mt-3 text-white/80 text-sm">
                    <span>3:42</span>
                    <span className="mx-2">•</span>
                    <span>Company Overview</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-white/60">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
              </div>
            ) : (
              // Video Player (placeholder)
              <div className="w-full h-full bg-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                  <p>Loading video...</p>
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    Back to thumbnail
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-[#FF9A00]">50+</div>
              <div className="text-gray-600">Business Units</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF9A00]">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF9A00]">1000+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF9A00]">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
