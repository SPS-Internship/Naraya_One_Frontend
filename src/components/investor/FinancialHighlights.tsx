'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const revenueData = [
  { year: '2019', revenue: 450 },
  { year: '2020', revenue: 580 },
  { year: '2021', revenue: 820 },
  { year: '2022', revenue: 1200 },
  { year: '2023', revenue: 1740 }
];

const profitabilityData = [
  { year: '2020', ebitda: 145, netIncome: 92 },
  { year: '2021', ebitda: 287, netIncome: 184 },
  { year: '2022', ebitda: 540, netIncome: 348 },
  { year: '2023', ebitda: 870, netIncome: 565 }
];

const growthData = [
  { quarter: 'Q1 2023', growth: 38 },
  { quarter: 'Q2 2023', growth: 41 },
  { quarter: 'Q3 2023', growth: 43 },
  { quarter: 'Q4 2023', growth: 45 }
];

export function FinancialHighlights() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Financial Performance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pertumbuhan finansial yang konsisten menunjukkan kekuatan bisnis model kami dan potensi return on investment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">Revenue Trend (Billion IDR)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}B`} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 5 }}
                    activeDot={{ r: 7 }}
                    name="Revenue"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Profitability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">EBITDA & Net Income (Billion IDR)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={profitabilityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}B`} />
                  <Legend />
                  <Bar dataKey="ebitda" fill="#10b981" name="EBITDA" />
                  <Bar dataKey="netIncome" fill="#3b82f6" name="Net Income" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Growth Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Growth Rate YoY (%)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="growth" fill="#8b5cf6" name="Growth Rate" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
