'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

const entities = [
  {
    name: "TeleConnect Solutions",
    logo: "TC",
    sector: "Telecommunications",
    description: "Next-generation network infrastructure and connectivity solutions",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "InnovateTech Labs", 
    logo: "IT",
    sector: "Technology",
    description: "AI-driven software development and digital transformation",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "ServiceFirst Co",
    logo: "SF", 
    sector: "Services",
    description: "Comprehensive business process optimization and consulting",
    color: "from-green-500 to-green-600"
  },
  {
    name: "DataCore Analytics",
    logo: "DC",
    sector: "Technology", 
    description: "Advanced data analytics and business intelligence platforms",
    color: "from-red-500 to-red-600"
  },
  {
    name: "CloudBridge Networks",
    logo: "CB",
    sector: "Telecommunications",
    description: "Cloud infrastructure and hybrid network solutions", 
    color: "from-indigo-500 to-indigo-600"
  },
  {
    name: "ConsultPro Services",
    logo: "CP",
    sector: "Services",
    description: "Strategic consulting and operational excellence frameworks",
    color: "from-orange-500 to-orange-600"
  }
]

export default function EntityHighlights() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Business Entities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse portfolio of companies that form our integrated ecosystem, 
            each contributing unique expertise and capabilities.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {entities.map((entity, index) => (
            <motion.div
              key={entity.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${entity.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                    {entity.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {entity.name}
                    </h3>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      {entity.sector}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {entity.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12">
          <div className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {entities.map((entity, index) => (
              <motion.div
                key={entity.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-80 snap-center"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${entity.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {entity.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {entity.name}
                      </h3>
                      <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                        {entity.sector}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {entity.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/entities">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              View All Entities & Subsidiaries
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
