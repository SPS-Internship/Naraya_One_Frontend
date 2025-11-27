'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { 
  EyeIcon, 
  RocketLaunchIcon, 
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description: "We continuously push boundaries and embrace emerging technologies to stay ahead of industry trends."
  },
  {
    icon: ShieldCheckIcon,
    title: "Integrity",
    description: "Transparency, accountability, and ethical practices form the foundation of all our business relationships."
  },
  {
    icon: HeartIcon,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from service delivery to client satisfaction."
  },
  {
    icon: GlobeAltIcon,
    title: "Sustainability", 
    description: "Building businesses that create long-term value while being mindful of our environmental and social impact."
  },
  {
    icon: RocketLaunchIcon,
    title: "Growth",
    description: "We believe in empowering our partners, employees, and communities to achieve their full potential."
  },
  {
    icon: EyeIcon,
    title: "Vision",
    description: "Maintaining a forward-thinking perspective that anticipates market needs and future opportunities."
  }
]

export default function VisionMissionValues() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 bg-gradient-to-br from-[#FF9A00] to-[#FFD93D] text-white">
              <div className="flex items-center mb-6">
                <EyeIcon className="w-8 h-8 mr-4" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-white/95">
                To be the world&apos;s leading integrated business ecosystem, where telecommunications, 
                technology, and services seamlessly converge to create unprecedented value for businesses, 
                communities, and stakeholders across the globe.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 bg-[#4F200D] text-white">
              <div className="flex items-center mb-6">
                <RocketLaunchIcon className="w-8 h-8 mr-4" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-white/95">
                We empower organizations and communities through strategic integration of telecommunications 
                infrastructure, innovative technology solutions, and comprehensive services. Our mission is to 
                drive sustainable growth, foster innovation, and create lasting partnerships that transform industries.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These principles guide every decision we make and every relationship we build, 
            ensuring that our growth aligns with our commitment to ethical business practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF9A00] to-[#FFD93D] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-6">
            &ldquo;Success is not just about what we achieve, but how we achieve it. 
            Our integrated approach creates value that extends far beyond traditional business boundaries.&rdquo;
          </blockquote>
          <div className="text-lg text-muted-foreground">
            <strong>Leadership Philosophy</strong> - Naraya.One
          </div>
        </motion.div>
      </div>
    </section>
  )
}
