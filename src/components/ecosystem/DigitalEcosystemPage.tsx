'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  MapIcon,
  ListBulletIcon,
  ArrowPathIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import InteractiveEcosystemMap from '@/components/ecosystem/InteractiveEcosystemMap'
import EcosystemInfoPanel from '@/components/ecosystem/EcosystemInfoPanel'
import EcosystemListView from '@/components/ecosystem/EcosystemListView'

interface EcosystemNode {
  id: string
  name: string
  category: 'core' | 'partner' | 'subsidiary' | 'service'
  description: string
  website: string
  x: number
  y: number
  connections: string[]
  color: string
}

const ecosystemStats = [
  {
    label: "Total Entities",
    value: "14",
    description: "Integrated business entities",
    icon: ChartBarIcon
  },
  {
    label: "Strategic Partners",
    value: "7",
    description: "Technology & service partners",
    icon: MapIcon
  },
  {
    label: "Core Subsidiaries", 
    value: "6",
    description: "Owned business entities",
    icon: ListBulletIcon
  },
  {
    label: "Active Connections",
    value: "25+",
    description: "Inter-entity collaborations",
    icon: ArrowPathIcon
  }
]

export default function DigitalEcosystemPage() {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [hoveredNode, setHoveredNode] = useState<EcosystemNode | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const handleNodeHover = (node: EcosystemNode | null) => {
    setHoveredNode(node)
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-accent text-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Our <span className="text-primary-foreground/80">Digital Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
              Explore the interconnected network of subsidiaries, partners, and services 
              that form Naraya.One&apos;s integrated business ecosystem. Discover how our entities 
              collaborate to deliver comprehensive solutions across telecommunications, technology, and services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
                onClick={() => setViewMode('map')}
              >
                <MapIcon className="w-5 h-5 mr-2" />
                Interactive Map
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
                onClick={() => setViewMode('list')}
              >
                <ListBulletIcon className="w-5 h-5 mr-2" />
                Directory View
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {ecosystemStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* View Mode Toggle */}
      <section className="pb-8">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex justify-center">
            <div className="bg-background rounded-lg p-2 shadow-md border border-border">
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  viewMode === 'map'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <MapIcon className="w-5 h-5 mr-2" />
                Interactive Map
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                <ListBulletIcon className="w-5 h-5 mr-2" />
                Directory View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          {viewMode === 'map' ? (
            <motion.div
              key="map-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              ref={mapContainerRef}
            >
              <InteractiveEcosystemMap 
                onNodeHover={handleNodeHover}
                hoveredNode={hoveredNode}
              />
              
              {/* Accessibility Note */}
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Having trouble with the interactive map? Switch to the directory view for a more accessible experience.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setViewMode('list')}
                >
                  Switch to Directory View
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EcosystemListView />
            </motion.div>
          )}
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Power of Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our integrated ecosystem creates synergies that traditional siloed companies cannot match. 
              Discover how our interconnected approach delivers superior value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#FF9A00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowPathIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our entities work together seamlessly, sharing resources, expertise, and capabilities 
                  to deliver comprehensive solutions that exceed client expectations.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-8 h-8 text-[#4F200D]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated operations eliminate redundancies and optimize resource utilization, 
                  resulting in faster delivery times and more cost-effective solutions.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#4F200D] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cross-entity collaboration drives innovation, enabling us to develop breakthrough solutions 
                  that combine telecommunications, technology, and services expertise.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary/80 to-primary text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Ecosystem?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re looking for strategic partnerships, investment opportunities, 
              or want to learn more about our integrated approach, we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                Explore Partnerships
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Node Info Panel */}
      <EcosystemInfoPanel 
        node={hoveredNode && viewMode === 'map' ? hoveredNode : null} 
        onClose={() => setHoveredNode(null)}
      />
    </div>
  )
}
