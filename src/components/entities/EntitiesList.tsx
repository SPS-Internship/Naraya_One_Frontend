'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BuildingOfficeIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const entities = [
  {
    id: 'teleconnect-solutions',
    name: "TeleConnect Solutions",
    sector: "Telecommunications",
    logo: "TC",
    shortDescription: "Next-generation network infrastructure and connectivity solutions for enterprise and consumer markets.",
    description: "Leading telecommunications infrastructure provider specializing in fiber optic networks, 5G deployment, and hybrid cloud connectivity solutions. Serving enterprise clients and telecommunications operators across 15+ countries.",
    website: "https://teleconnect-solutions.com",
    founded: "2010",
    employees: "2,500+",
    locations: ["New York", "London", "Singapore", "São Paulo"],
    keyServices: ["Network Infrastructure", "5G Deployment", "Cloud Connectivity", "Managed Services"],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 'innovatetech-labs',
    name: "InnovateTech Labs", 
    sector: "Technology",
    logo: "IT",
    shortDescription: "AI-driven software development and digital transformation solutions for modern enterprises.",
    description: "Cutting-edge technology laboratory focused on artificial intelligence, machine learning, and digital transformation solutions. Developing proprietary platforms that help businesses optimize operations and enhance customer experiences.",
    website: "https://innovatetech-labs.com",
    founded: "2014",
    employees: "800+",
    locations: ["San Francisco", "Tel Aviv", "Bangalore", "Berlin"],
    keyServices: ["AI Development", "Digital Transformation", "Custom Software", "Data Analytics"],
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 'servicefirst-co',
    name: "ServiceFirst Co",
    sector: "Services", 
    logo: "SF",
    shortDescription: "Comprehensive business process optimization and strategic consulting services.",
    description: "Full-service consulting firm specializing in business process optimization, strategic planning, and operational excellence. Helping organizations streamline operations and achieve sustainable growth through proven methodologies.",
    website: "https://servicefirst.co",
    founded: "2012",
    employees: "1,200+",
    locations: ["Chicago", "Frankfurt", "Tokyo", "Sydney"],
    keyServices: ["Strategic Consulting", "Process Optimization", "Change Management", "Training"],
    color: "from-green-500 to-green-600"
  },
  {
    id: 'datacore-analytics',
    name: "DataCore Analytics",
    sector: "Technology",
    logo: "DC", 
    shortDescription: "Advanced data analytics and business intelligence platforms for data-driven decision making.",
    description: "Leading provider of advanced data analytics solutions and business intelligence platforms. Enabling organizations to harness the power of big data for strategic decision-making and operational optimization.",
    website: "https://datacore-analytics.com",
    founded: "2016",
    employees: "600+",
    locations: ["Seattle", "Amsterdam", "Mumbai", "Toronto"],
    keyServices: ["Data Analytics", "Business Intelligence", "Predictive Modeling", "Data Visualization"],
    color: "from-red-500 to-red-600"
  },
  {
    id: 'cloudbridge-networks',
    name: "CloudBridge Networks",
    sector: "Telecommunications",
    logo: "CB",
    shortDescription: "Secure cloud infrastructure and hybrid network solutions for enterprise connectivity.",
    description: "Specialized cloud infrastructure provider offering secure, scalable solutions for hybrid network environments. Bridging on-premise systems with cloud platforms through innovative networking technologies.",
    website: "https://cloudbridge-networks.com", 
    founded: "2018",
    employees: "400+",
    locations: ["Austin", "Dublin", "Hong Kong"],
    keyServices: ["Cloud Infrastructure", "Hybrid Networks", "Security Solutions", "Migration Services"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 'consultpro-services',
    name: "ConsultPro Services",
    sector: "Services",
    logo: "CP",
    shortDescription: "Strategic consulting and operational excellence frameworks for business transformation.",
    description: "Premier consulting firm focused on strategic business transformation and operational excellence. Delivering comprehensive solutions that help organizations adapt, innovate, and thrive in competitive markets.",
    website: "https://consultpro-services.com",
    founded: "2011",
    employees: "900+", 
    locations: ["Boston", "Zurich", "Melbourne", "Dubai"],
    keyServices: ["Business Strategy", "Digital Transformation", "Leadership Development", "Performance Optimization"],
    color: "from-orange-500 to-orange-600"
  }
]

const sectors = [
  { name: "All Sectors", value: "all", icon: GlobeAltIcon },
  { name: "Telecommunications", value: "telecommunications", icon: BuildingOfficeIcon },
  { name: "Technology", value: "technology", icon: CpuChipIcon },
  { name: "Services", value: "services", icon: WrenchScrewdriverIcon }
]

export default function EntitiesList() {
  const [selectedSector, setSelectedSector] = useState("all")

  const filteredEntities = selectedSector === "all" 
    ? entities 
    : entities.filter(entity => entity.sector.toLowerCase() === selectedSector)

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Our <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Business Entities</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our diverse portfolio of specialized companies, each contributing unique expertise 
            to our integrated ecosystem. From telecommunications infrastructure to cutting-edge technology 
            and comprehensive services, discover how our entities work together to drive innovation.
          </p>
        </motion.div>

        {/* Sector Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {sectors.map((sector) => (
            <button
              key={sector.value}
              onClick={() => setSelectedSector(sector.value)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedSector === sector.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-background text-muted-foreground hover:bg-muted shadow-md'
              }`}
            >
              <sector.icon className="w-5 h-5 mr-2" />
              {sector.name}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{filteredEntities.length}</div>
            <div className="text-muted-foreground">Active Entities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">6,500+</div>
            <div className="text-muted-foreground">Total Employees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Global Locations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </motion.div>

        {/* Entities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredEntities.map((entity, index) => (
            <motion.div
              key={entity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${entity.color} flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {entity.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {entity.name}
                    </h3>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                      {entity.sector}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {entity.shortDescription}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <div className="text-muted-foreground">Founded</div>
                    <div className="font-semibold text-foreground">{entity.founded}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Employees</div>
                    <div className="font-semibold text-foreground">{entity.employees}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <Link href={`/entities/${entity.id}`}>
                    <Button 
                      size="sm"
                      className="w-full"
                    >
                      View Details
                    </Button>
                  </Link>
                  <a 
                    href={entity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Visit Website
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-primary to-accent rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            Interested in Collaboration or Investment?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our integrated ecosystem creates unique opportunities for partnerships, joint ventures, 
            and strategic investments. Let&apos;s explore how we can work together to drive innovation 
            and create value across our business entities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                Explore Partnerships
              </Button>
            </Link>
            <Link href="/investors">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                Investment Opportunities
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
