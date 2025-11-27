'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'

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
    description: 'Central holding company coordinating the entire integrated business ecosystem',
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
    description: 'Telecommunications infrastructure and 5G network deployment',
    website: '#',
    x: 200,
    y: 150,
    connections: ['naraya-one', 'cloudbridge', 'microsoft-azure'],
    color: '#3B82F6'
  },
  {
    id: 'innovatetech',
    name: 'InnovateTech Labs',
    category: 'subsidiary',
    description: 'AI-driven software development and digital transformation',
    website: '#',
    x: 600,
    y: 150,
    connections: ['naraya-one', 'datacore', 'aws-cloud', 'google-cloud'],
    color: '#8B5CF6'
  },
  {
    id: 'servicefirst',
    name: 'ServiceFirst Co',
    category: 'subsidiary',
    description: 'Business process optimization and strategic consulting',
    website: '#',
    x: 150,
    y: 450,
    connections: ['naraya-one', 'consultpro', 'salesforce'],
    color: '#10B981'
  },
  {
    id: 'datacore',
    name: 'DataCore Analytics',
    category: 'subsidiary',
    description: 'Advanced data analytics and business intelligence platforms',
    website: '#',
    x: 650,
    y: 450,
    connections: ['naraya-one', 'innovatetech', 'tableau', 'snowflake'],
    color: '#EF4444'
  },
  {
    id: 'cloudbridge',
    name: 'CloudBridge Networks',
    category: 'subsidiary',
    description: 'Cloud infrastructure and hybrid network solutions',
    website: '#',
    x: 100,
    y: 300,
    connections: ['naraya-one', 'teleconnect', 'microsoft-azure'],
    color: '#6366F1'
  },
  {
    id: 'consultpro',
    name: 'ConsultPro Services',
    category: 'subsidiary',
    description: 'Strategic consulting and operational excellence frameworks',
    website: '#',
    x: 700,
    y: 300,
    connections: ['naraya-one', 'servicefirst', 'oracle'],
    color: '#F59E0B'
  },
  {
    id: 'microsoft-azure',
    name: 'Microsoft Azure',
    category: 'partner',
    description: 'Cloud computing platform and infrastructure services',
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
    description: 'Comprehensive cloud computing platform',
    website: 'https://aws.amazon.com',
    x: 500,
    y: 50,
    connections: ['innovatetech'],
    color: '#FF9900'
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    category: 'partner',
    description: 'Cloud computing and AI/ML platform services',
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
    description: 'Customer relationship management platform',
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
    description: 'Data visualization and business intelligence',
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
    description: 'Cloud data platform and data warehouse',
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
    description: 'Enterprise software and database management',
    website: 'https://oracle.com',
    x: 780,
    y: 350,
    connections: ['consultpro'],
    color: '#F80000'
  }
]

interface InteractiveEcosystemMapProps {
  onNodeHover?: (node: EcosystemNode | null) => void
  hoveredNode?: EcosystemNode | null
}

export default function InteractiveEcosystemMap({ onNodeHover, hoveredNode }: InteractiveEcosystemMapProps) {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const container = svgRef.current.parentElement
        if (container) {
          const { width } = container.getBoundingClientRect()
          setDimensions({
            width: Math.max(800, width - 32),
            height: Math.max(600, (width - 32) * 0.75)
          })
        }
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getNodeSize = (category: string) => {
    switch (category) {
      case 'core': return 60
      case 'subsidiary': return 40
      case 'partner': return 30
      default: return 25
    }
  }

  const getScaledPosition = (x: number, y: number) => {
    const scaleX = dimensions.width / 800
    const scaleY = dimensions.height / 600
    return {
      x: x * scaleX,
      y: y * scaleY
    }
  }

  const renderConnections = () => {
    return ecosystemNodes.flatMap(node => 
      node.connections.map(connectionId => {
        const targetNode = ecosystemNodes.find(n => n.id === connectionId)
        if (!targetNode) return null

        const sourcePos = getScaledPosition(node.x, node.y)
        const targetPos = getScaledPosition(targetNode.x, targetNode.y)
        
        const isHighlighted = hoveredNode && (
          hoveredNode.id === node.id || 
          hoveredNode.id === connectionId ||
          node.connections.includes(hoveredNode.id) ||
          targetNode.connections.includes(hoveredNode.id)
        )

        return (
          <motion.line
            key={`${node.id}-${connectionId}`}
            x1={sourcePos.x}
            y1={sourcePos.y}
            x2={targetPos.x}
            y2={targetPos.y}
            stroke={isHighlighted ? '#FF9A00' : '#E5E7EB'}
            strokeWidth={isHighlighted ? 3 : 1}
            strokeOpacity={isHighlighted ? 1 : 0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        )
      })
    ).filter(Boolean)
  }

  const renderNodes = () => {
    return ecosystemNodes.map((node, index) => {
      const position = getScaledPosition(node.x, node.y)
      const size = getNodeSize(node.category)
      const isHovered = hoveredNode?.id === node.id
      const isConnected = hoveredNode && node.connections.includes(hoveredNode.id)
      const isHighlighted = isHovered || isConnected

      return (
        <g key={node.id}>
          <motion.circle
            cx={position.x}
            cy={position.y}
            r={size / 2}
            fill={node.color}
            stroke={isHighlighted ? '#FFD93D' : '#FFFFFF'}
            strokeWidth={isHighlighted ? 4 : 2}
            className="cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1.2 : 1, 
              opacity: hoveredNode ? (isHighlighted ? 1 : 0.3) : 1 
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.2 }}
            onMouseEnter={() => onNodeHover?.(node)}
            onMouseLeave={() => onNodeHover?.(null)}
          />
          
          {/* Node Labels */}
          <motion.text
            x={position.x}
            y={position.y + size/2 + 20}
            textAnchor="middle"
            className="fill-gray-700 text-xs font-semibold pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredNode ? (isHighlighted ? 1 : 0.5) : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {node.name}
          </motion.text>

          {/* Category indicators */}
          <motion.circle
            cx={position.x + size/3}
            cy={position.y - size/3}
            r={6}
            fill={node.category === 'core' ? '#FFD93D' : 
                  node.category === 'subsidiary' ? '#FF9A00' :
                  node.category === 'partner' ? '#4F200D' : '#6B7280'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
          />
        </g>
      )
    })
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Ecosystem Map</h3>
        <p className="text-gray-600">Hover over nodes to explore connections and relationships</p>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#FFD93D] rounded-full mr-2" />
            <span>Core (Naraya.One)</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#FF9A00] rounded-full mr-2" />
            <span>Subsidiaries</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#4F200D] rounded-full mr-2" />
            <span>Strategic Partners</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          className="w-full h-auto"
        >
          {/* Render connections first (behind nodes) */}
          <g className="connections">
            {renderConnections()}
          </g>
          
          {/* Render nodes on top */}
          <g className="nodes">
            {renderNodes()}
          </g>
        </svg>
      </div>
    </div>
  )
}
