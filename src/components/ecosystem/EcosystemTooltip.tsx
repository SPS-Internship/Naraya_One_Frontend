'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GlobeAltIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

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

interface EcosystemTooltipProps {
  node: EcosystemNode | null
  position?: { x: number; y: number }
}

const getCategoryInfo = (category: string) => {
  switch (category) {
    case 'core':
      return {
        label: 'Core Entity',
        description: 'Central holding company',
        color: 'bg-[#FFD93D] text-[#4F200D]'
      }
    case 'subsidiary':
      return {
        label: 'Subsidiary',
        description: 'Owned business entity',
        color: 'bg-[#FF9A00] text-white'
      }
    case 'partner':
      return {
        label: 'Strategic Partner',
        description: 'Technology & service partner',
        color: 'bg-[#4F200D] text-white'
      }
    default:
      return {
        label: 'Service Provider',
        description: 'Specialized service provider',
        color: 'bg-gray-600 text-white'
      }
  }
}

export default function EcosystemTooltip({ node, position }: EcosystemTooltipProps) {
  if (!node) return null

  const categoryInfo = getCategoryInfo(node.category)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        transition={{ duration: 0.2 }}
        className="fixed z-50 pointer-events-none"
        style={{
          left: position?.x || 0,
          top: position?.y || 0,
          transform: 'translate(-50%, -120%)'
        }}
      >
        <Card className="p-4 max-w-sm bg-white shadow-xl border border-gray-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <h4 className="font-bold text-gray-900 text-sm">{node.name}</h4>
              </div>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${categoryInfo.color}`}>
                {categoryInfo.label}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {node.description}
          </p>

          {node.connections && node.connections.length > 0 && (
            <div className="mb-3">
              <div className="text-xs font-semibold text-gray-500 mb-1">
                Connected to {node.connections.length} entities
              </div>
            </div>
          )}

          {node.website && node.website !== '#' && (
            <div className="flex justify-end">
              <Button
                size="sm"
                variant="outline"
                className="text-xs border-[#FF9A00] text-[#FF9A00] hover:bg-[#FF9A00] hover:text-white pointer-events-auto"
                onClick={() => window.open(node.website, '_blank')}
              >
                <GlobeAltIcon className="w-3 h-3 mr-1" />
                Visit
                <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
              </Button>
            </div>
          )}
        </Card>

        {/* Tooltip arrow */}
        <div className="absolute left-1/2 top-full transform -translate-x-1/2">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white drop-shadow-sm" />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
