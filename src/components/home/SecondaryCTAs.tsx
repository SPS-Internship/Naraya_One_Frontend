'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function SecondaryCTAs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
          {/* View Ecosystem CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FF9A00] to-[#FFD93D] rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Explore Our Ecosystem
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Dive deep into our interconnected network of businesses and discover 
                how our integrated approach creates value across all touchpoints.
              </p>
              <Link href="/ecosystem">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#FF9A00] px-6 py-3 font-semibold group"
                >
                  View Digital Ecosystem
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
              <div className="w-full h-full bg-white rounded-full transform translate-x-16 -translate-y-16" />
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
              <div className="w-full h-full bg-white rounded-full transform -translate-x-12 translate-y-12" />
            </div>
          </motion.div>

          {/* Contact Us CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#4F200D] rounded-2xl p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Ready to explore partnerships, investment opportunities, or learn more 
                about joining our dynamic ecosystem? We&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full border-white text-white hover:bg-white hover:text-[#4F200D] px-6 py-3 font-semibold"
                  >
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/careers" className="flex-1">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full border-[#FFD93D] text-[#FFD93D] hover:bg-[#FFD93D] hover:text-[#4F200D] px-6 py-3 font-semibold"
                  >
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
              <PhoneIcon className="w-full h-full transform rotate-12" />
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Our commitment to excellence and innovation has earned us the trust of Fortune 500 companies, 
            government agencies, and emerging startups across multiple continents. 
            Join the growing network of organizations that rely on Naraya.One for strategic growth and digital transformation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
