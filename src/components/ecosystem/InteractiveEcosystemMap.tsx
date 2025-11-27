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
    connections: ['ngomongo', 'kapten-naratel', 'rapatin', 'sparkpay', 'edubiz', 'academy'],
    color: '#FF9A00'
  },
  {
    id: 'ngomongo',
    name: 'Ngomongo.org',
    category: 'service',
    description: 'Community platform for collaborative projects and networking',
    website: 'https://ngomongo.org',
    x: 150,
    y: 150,
    connections: ['naraya-one'],
    color: '#3B82F6'
  },
  {
    id: 'kapten-naratel',
    name: 'KaptenNaratel.com',
    category: 'service',
    description: 'Telecommunications and logistics services platform',
    website: 'https://kaptennaratel.com',
    x: 650,
    y: 150,
    connections: ['naraya-one'],
    color: '#8B5CF6'
  },
  {
    id: 'rapatin',
    name: 'Rapatin.com',
    category: 'service',
    description: 'Rapid transportation and delivery coordination services',
    website: 'https://rapatin.com',
    x: 100,
    y: 450,
    connections: ['naraya-one'],
    color: '#10B981'
  },
  {
    id: 'sparkpay',
    name: 'Sparkpay.id',
    category: 'service',
    description: 'Digital payment and financial services platform',
    website: 'https://sparkpay.id',
    x: 700,
    y: 450,
    connections: ['naraya-one'],
    color: '#EF4444'
  },
  {
    id: 'edubiz',
    name: 'Edubiz',
    category: 'service',
    description: 'Educational platform and business training solutions',
    website: 'https://edubiz.com',
    x: 200,
    y: 550,
    connections: ['naraya-one', 'academy'],
    color: '#6366F1'
  },
  {
    id: 'academy',
    name: 'Academy.KaptenNaratel.com',
    category: 'service',
    description: 'Professional training academy and skill development center',
    website: 'https://academy.kaptennaratel.com',
    x: 600,
    y: 550,
    connections: ['naraya-one', 'edubiz'],
    color: '#F59E0B'
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
