'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  GlobeAltIcon, 
  ArrowTopRightOnSquareIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  UsersIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

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

const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'naraya-one',
    name: 'Naraya.One',
    category: 'core',
    description: 'Central holding company coordinating the entire integrated business ecosystem across telecommunications, technology, and services sectors.',
    website: '#',
    x: 400,
    y: 300,
    connections: ['teleconnect', 'innovatetech', 'servicefirst', 'datacore', 'cloudbridge', 'consultpro'],
    color: '#FF9A00'
  },
  {
    id: 'teleconnect',
    name: 'TeleConnect Solutions',
    category: 'subsidiary',
    description: 'Leading telecommunications infrastructure provider specializing in fiber optic networks, 5G deployment, and hybrid cloud connectivity solutions.',
    website: '/entities/teleconnect-solutions',
    x: 200,
    y: 150,
    connections: ['naraya-one', 'cloudbridge', 'microsoft-azure'],
    color: '#3B82F6'
  },
  {
    id: 'innovatetech',
    name: 'InnovateTech Labs',
    category: 'subsidiary',
    description: 'AI-driven software development and digital transformation solutions, developing proprietary platforms for business optimization.',
    website: '/entities/innovatetech-labs',
    x: 600,
    y: 150,
    connections: ['naraya-one', 'datacore', 'aws-cloud', 'google-cloud'],
    color: '#8B5CF6'
  },
  {
    id: 'servicefirst',
    name: 'ServiceFirst Co',
    category: 'subsidiary',
    description: 'Comprehensive business process optimization and strategic consulting services for organizational excellence.',
    website: '/entities/servicefirst-co',
    x: 150,
    y: 450,
    connections: ['naraya-one', 'consultpro', 'salesforce'],
    color: '#10B981'
  },
  {
    id: 'datacore',
    name: 'DataCore Analytics',
    category: 'subsidiary',
    description: 'Advanced data analytics and business intelligence platforms enabling data-driven decision making.',
    website: '/entities/datacore-analytics',
    x: 650,
    y: 450,
    connections: ['naraya-one', 'innovatetech', 'tableau', 'snowflake'],
    color: '#EF4444'
  },
  {
    id: 'cloudbridge',
    name: 'CloudBridge Networks',
    category: 'subsidiary',
    description: 'Secure cloud infrastructure and hybrid network solutions bridging on-premise and cloud environments.',
    website: '/entities/cloudbridge-networks',
    x: 100,
    y: 300,
    connections: ['naraya-one', 'teleconnect', 'microsoft-azure'],
    color: '#6366F1'
  },
  {
    id: 'consultpro',
    name: 'ConsultPro Services',
    category: 'subsidiary',
    description: 'Strategic consulting and operational excellence frameworks for business transformation and growth.',
    website: '/entities/consultpro-services',
    x: 700,
    y: 300,
    connections: ['naraya-one', 'servicefirst', 'oracle'],
    color: '#F59E0B'
  },
  // Strategic Partners
  {
    id: 'microsoft-azure',
    name: 'Microsoft Azure',
    category: 'partner',
    description: 'Global cloud computing platform providing infrastructure, platform, and software services.',
    website: 'https://azure.microsoft.com',
    x: 200,
    y: 50,
    connections: ['teleconnect', 'cloudbridge'],
    color: '#0078D4'
  },
  {
    id: 'aws-cloud',
    name: 'Amazon Web Services',
    category: 'partner',
    description: 'Comprehensive cloud computing platform offering compute, storage, and networking services.',
    website: 'https://aws.amazon.com',
    x: 500,
    y: 50,
    connections: ['innovatetech'],
    color: '#FF9900'
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud Platform',
    category: 'partner',
    description: 'Cloud computing and AI/ML platform services with advanced data analytics capabilities.',
    website: 'https://cloud.google.com',
    x: 700,
    y: 80,
    connections: ['innovatetech'],
    color: '#4285F4'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'partner',
    description: 'Leading customer relationship management platform and business automation solutions.',
    website: 'https://salesforce.com',
    x: 50,
    y: 500,
    connections: ['servicefirst'],
    color: '#00A1E0'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'partner',
    description: 'Advanced data visualization and business intelligence platform for analytics and reporting.',
    website: 'https://tableau.com',
    x: 750,
    y: 520,
    connections: ['datacore'],
    color: '#E97627'
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    category: 'partner',
    description: 'Cloud-native data platform enabling secure data sharing and advanced analytics.',
    website: 'https://snowflake.com',
    x: 600,
    y: 550,
    connections: ['datacore'],
    color: '#29B5E8'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'partner',
    description: 'Enterprise software solutions including database management, cloud applications, and business intelligence.',
    website: 'https://oracle.com',
    x: 780,
    y: 350,
    connections: ['consultpro'],
    color: '#F80000'
  }
]

const categories = [
  { id: 'all', name: 'All Entities', icon: BoltIcon },
  { id: 'core', name: 'Core Entity', icon: BuildingOfficeIcon },
  { id: 'subsidiary', name: 'Subsidiaries', icon: CpuChipIcon },
  { id: 'partner', name: 'Strategic Partners', icon: UsersIcon }
]

const getCategoryInfo = (category: string) => {
  switch (category) {
    case 'core':
      return {
        label: 'Core Entity',
        description: 'Central holding company',
        color: 'bg-[#FFD93D] text-[#4F200D]',
        borderColor: 'border-[#FFD93D]'
      }
    case 'subsidiary':
      return {
        label: 'Subsidiary',
        description: 'Owned business entity',
        color: 'bg-[#FF9A00] text-white',
        borderColor: 'border-[#FF9A00]'
      }
    case 'partner':
      return {
        label: 'Strategic Partner',
        description: 'Technology & service partner',
        color: 'bg-[#4F200D] text-white',
        borderColor: 'border-[#4F200D]'
      }
    default:
      return {
        label: 'Service Provider',
        description: 'Specialized service provider',
        color: 'bg-gray-600 text-white',
        borderColor: 'border-gray-600'
      }
  }
}

export default function EcosystemListView() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedNode, setExpandedNode] = useState<string | null>(null)

  const filteredNodes = selectedCategory === 'all' 
    ? ecosystemNodes 
    : ecosystemNodes.filter(node => node.category === selectedCategory)

  const getConnectionNames = (nodeId: string, connections: string[]) => {
    return connections
      .map(connectionId => ecosystemNodes.find(n => n.id === connectionId)?.name)
      .filter(Boolean) as string[]
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ecosystem Directory
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Browse our complete ecosystem in an accessible list format. 
          Click on any entity to explore its connections and learn more about our integrated network.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-[#FF9A00] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md border border-gray-200'
            }`}
          >
            <category.icon className="w-5 h-5 mr-2" />
            {category.name}
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <Card className="p-4">
          <div className="text-2xl font-bold text-[#FF9A00] mb-1">
            {filteredNodes.length}
          </div>
          <div className="text-sm text-gray-600">Entities Shown</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-[#FF9A00] mb-1">
            {filteredNodes.filter(n => n.category === 'subsidiary').length}
          </div>
          <div className="text-sm text-gray-600">Subsidiaries</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-[#FF9A00] mb-1">
            {filteredNodes.filter(n => n.category === 'partner').length}
          </div>
          <div className="text-sm text-gray-600">Partners</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-bold text-[#FF9A00] mb-1">
            {Math.round(filteredNodes.reduce((sum, node) => sum + node.connections.length, 0) / filteredNodes.length)}
          </div>
          <div className="text-sm text-gray-600">Avg Connections</div>
        </Card>
      </div>

      {/* Entity List */}
      <div className="space-y-4">
        {filteredNodes.map((node, index) => {
          const categoryInfo = getCategoryInfo(node.category)
          const isExpanded = expandedNode === node.id
          const connectionNames = getConnectionNames(node.id, node.connections)

          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 hover:shadow-lg transition-all duration-300 ${
                isExpanded ? categoryInfo.borderColor + ' border-2' : ''
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div 
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: node.color }}
                      />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900">{node.name}</h4>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${categoryInfo.color}`}>
                          {categoryInfo.label}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {node.description}
                    </p>

                    {/* Connections Preview */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-semibold text-gray-500">
                        Connected to:
                      </span>
                      <span className="text-sm text-[#FF9A00] font-medium">
                        {node.connections.length} entities
                      </span>
                    </div>

                    {/* Expanded Connections */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 pt-4 mt-4"
                      >
                        <h5 className="font-semibold text-gray-900 mb-3">Connected Entities:</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {connectionNames.map((connectionName, idx) => (
                            <div key={idx} className="flex items-center p-2 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-[#FF9A00] rounded-full mr-3" />
                              <span className="text-gray-700 text-sm">{connectionName}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setExpandedNode(isExpanded ? null : node.id)}
                      className="border-[#FF9A00] text-[#FF9A00] hover:bg-[#FF9A00] hover:text-white"
                    >
                      {isExpanded ? 'Hide' : 'Show'} Connections
                    </Button>
                    
                    {node.website && node.website !== '#' && (
                      <Button
                        size="sm"
                        className="bg-[#FF9A00] hover:bg-[#e8890a] text-white"
                        onClick={() => {
                          if (node.website.startsWith('http')) {
                            window.open(node.website, '_blank')
                          } else {
                            window.location.href = node.website
                          }
                        }}
                      >
                        <GlobeAltIcon className="w-4 h-4 mr-1" />
                        {node.website.startsWith('http') ? 'Visit' : 'Learn More'}
                        {node.website.startsWith('http') && (
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {filteredNodes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No entities found</div>
          <div className="text-gray-600">Try selecting a different category</div>
        </div>
      )}
    </div>
  )
}
