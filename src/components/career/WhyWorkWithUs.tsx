'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  ArrowTrendingUpIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const valueProps = [
  {
    icon: ArrowTrendingUpIcon,
    title: 'Growth & Learning',
    description: 'Program pengembangan karir terstruktur dengan pelatihan berkelanjutan dan mentoring dari expert industri.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: SparklesIcon,
    title: 'Digital-first Culture',
    description: 'Budaya kerja yang modern, inovatif, dan mendukung kreativitas dalam mengembangkan solusi teknologi terdepan.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ComputerDesktopIcon,
    title: 'Hybrid Working Environment',
    description: 'Fleksibilitas bekerja dengan kombinasi office dan remote untuk work-life balance yang optimal.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Performance-based Rewards',
    description: 'Kompensasi kompetitif dan bonus kinerja yang adil berdasarkan kontribusi dan pencapaian Anda.',
    color: 'from-orange-500 to-orange-600'
  }
];

export function WhyWorkWithUs() {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mengapa Bekerja di Naraya.One?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menawarkan lingkungan kerja yang mendukung pertumbuhan profesional dan personal Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${prop.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
