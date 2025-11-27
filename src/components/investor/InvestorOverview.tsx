'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  UserGroupIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  MapIcon
} from '@heroicons/react/24/solid';

const metrics = [
  {
    icon: UserGroupIcon,
    value: '5.2M+',
    label: 'Total Customers',
    description: 'Active users across digital ecosystem'
  },
  {
    icon: GlobeAltIcon,
    value: '15,000+',
    label: 'Fiber Network (km)',
    description: 'Nationwide broadband infrastructure'
  },
  {
    icon: ArrowTrendingUpIcon,
    value: '45%',
    label: 'Revenue Growth YoY',
    description: 'Consistent year-on-year growth'
  },
  {
    icon: MapIcon,
    value: '34',
    label: 'Operational Regions',
    description: 'Coverage across Indonesia'
  }
];

export function InvestorOverview() {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Naraya.One di Angka</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pertumbuhan pesat yang didukung oleh inovasi teknologi dan komitmen terhadap digital transformation Indonesia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-2">{metric.value}</h3>
                  <p className="font-semibold text-sm mb-1">{metric.label}</p>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
