'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DocumentArrowDownIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

interface Document {
  id: string;
  title: string;
  category: string;
  date: string;
  size: string;
  description: string;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Investor Presentation 2024',
    category: 'Investor Deck',
    date: 'January 2024',
    size: '12.5 MB',
    description: 'Comprehensive overview of company strategy, market opportunity, and growth projections'
  },
  {
    id: '2',
    title: 'Q4 2023 Earnings Report',
    category: 'Quarterly Report',
    date: 'February 2024',
    size: '8.3 MB',
    description: 'Detailed financial results, operational metrics, and quarterly performance analysis'
  },
  {
    id: '3',
    title: 'Annual Report 2023',
    category: 'Annual Report',
    date: 'March 2024',
    size: '15.7 MB',
    description: 'Complete annual financial statements, management discussion, and business highlights'
  },
  {
    id: '4',
    title: 'Sustainability Report 2023',
    category: 'ESG Report',
    date: 'April 2024',
    size: '10.2 MB',
    description: 'Environmental, social, and governance initiatives aligned with SDG commitments'
  }
];

export function DocumentsAndReports() {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Documents & Reports</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Akses informasi lengkap tentang kinerja, strategi, dan komitmen sustainability Naraya.One.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {documents.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg h-fit">
                      <DocumentTextIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{doc.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{doc.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDaysIcon className="w-4 h-4" />
                          <span>{doc.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DocumentArrowDownIcon className="w-4 h-4" />
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2 shrink-0">
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
