'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GlobeAltIcon, ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'

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

interface EcosystemInfoPanelProps {
  node: EcosystemNode | null
  onClose?: () => void
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

export default function EcosystemInfoPanel({ node, onClose }: EcosystemInfoPanelProps) {
  if (!node) return null

  const categoryInfo = getCategoryInfo(node.category)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <Card className="p-6 max-w-sm bg-white shadow-xl border border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
                <h4 className="font-bold text-gray-900 text-lg">{node.name}</h4>
              </div>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryInfo.color}`}>
                {categoryInfo.label}
              </span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {node.description}
          </p>

          {node.connections && node.connections.length > 0 && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-semibold text-gray-700 mb-2">
                Ecosystem Connections
              </div>
              <div className="text-sm text-[#FF9A00] font-medium">
                Connected to {node.connections.length} entities
              </div>
            </div>
          )}

          {node.website && node.website !== '#' && (
            <div className="flex justify-end">
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
                {node.website.startsWith('http') ? 'Visit Website' : 'Learn More'}
                {node.website.startsWith('http') && (
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                )}
              </Button>
            </div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  )
}
