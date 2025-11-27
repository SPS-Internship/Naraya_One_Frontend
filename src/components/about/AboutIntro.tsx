'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const timelineEvents = [
  {
    year: "2008",
    title: "Foundation",
    description: "Naraya.One established with a vision to create integrated business ecosystems"
  },
  {
    year: "2011",
    title: "First Expansion",
    description: "Acquired telecommunications infrastructure company, establishing our connectivity foundation"
  },
  {
    year: "2014",
    title: "Technology Integration",
    description: "Launched our technology division, focusing on digital transformation solutions"
  },
  {
    year: "2017",
    title: "Services Portfolio",
    description: "Expanded into comprehensive business services, completing our integrated approach"
  },
  {
    year: "2020",
    title: "Digital Acceleration",
    description: "Accelerated digital initiatives in response to global transformation needs"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Established presence in 25+ countries with integrated ecosystem partnerships"
  },
  {
    year: "2024",
    title: "Innovation Leadership",
    description: "Leading industry transformation through AI and sustainable business practices"
  }
]

export default function AboutIntro() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              About <span className="bg-gradient-to-r from-[#FF9A00] to-[#FFD93D] bg-clip-text text-transparent">Naraya.One</span>
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="w-96 h-64 bg-gradient-to-br from-[#FF9A00] to-[#FFD93D] rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold">N1</div>
                  </div>
                  <p className="text-sm opacity-90">Integrated Business Ecosystem</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              We are more than a holding company. Naraya.One represents a new paradigm in business integration, 
              where telecommunications, technology, and services converge to create unprecedented value. 
              Our mission is to build bridges between industries, foster innovation, and drive sustainable growth 
              through strategic synergies and operational excellence.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Our Journey
          </h2>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#FF9A00] to-[#FFD93D]" />
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="w-1/2 px-8">
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#FF9A00] to-[#FFD93D] rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {event.year.slice(-2)}
                      </div>
                      <div>
                        <div className="text-sm text-[#FF9A00] font-semibold">{event.year}</div>
                        <h3 className="font-semibold text-lg text-foreground">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </Card>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF9A00] rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF9A00] to-[#FFD93D] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {event.year.slice(-2)}
                    </div>
                    <div>
                      <div className="text-sm text-[#FF9A00] font-semibold">{event.year}</div>
                      <h3 className="font-semibold text-lg text-foreground">{event.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
