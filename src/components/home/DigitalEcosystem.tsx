'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'

const ecosystemPartners = [
  { name: "Microsoft", logo: "MS" },
  { name: "AWS", logo: "AWS" },
  { name: "Google Cloud", logo: "GCP" },
  { name: "Salesforce", logo: "SF" },
  { name: "Oracle", logo: "OR" },
  { name: "IBM", logo: "IBM" },
  { name: "SAP", logo: "SAP" },
  { name: "Cisco", logo: "CS" },
  { name: "VMware", logo: "VM" },
  { name: "Adobe", logo: "AD" },
]

export default function DigitalEcosystem() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Digital Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with industry leaders to deliver comprehensive technology solutions
            that drive digital transformation across all sectors.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative">
          <div 
            className="flex space-x-8"
            style={{
              animation: 'scroll 30s linear infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running'
            }}
          >
            {[...ecosystemPartners, ...ecosystemPartners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: (index % ecosystemPartners.length) * 0.1 }}
                viewport={{ once: true }}
                className="flex-none"
              >
                <div className="w-32 h-20 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-linear-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/ecosystem">
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              Explore Our Digital Ecosystem
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
