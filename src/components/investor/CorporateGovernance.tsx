'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { CheckCircleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

const boardMembers = {
  commissioners: [
    { name: 'Dr. Bambang Sutrisno', role: 'Ketua Dewan Komisaris', title: 'Independent Commissioner' },
    { name: 'Siti Nurhaliza', role: 'Wakil Ketua', title: 'Independent Commissioner' },
    { name: 'Hendra Wijaya', role: 'Komisaris', title: 'Commissioner' }
  ],
  directors: [
    { name: 'Eko Suryanto', role: 'Direktur Utama (CEO)', title: 'Chief Executive Officer' },
    { name: 'Doni Hermawan', role: 'Direktur Keuangan', title: 'Chief Financial Officer' },
    { name: 'Rini Kusuma', role: 'Direktur Operasional', title: 'Chief Operating Officer' }
  ]
};

const policies = [
  {
    title: 'Risk Management Framework',
    description: 'Comprehensive framework untuk mengidentifikasi, mengukur, dan mengelola risiko operasional, finansial, dan strategic.'
  },
  {
    title: 'Code of Conduct & Ethics',
    description: 'Standar etika dan perilaku tinggi untuk semua karyawan dan stakeholder dalam melaksanakan tanggung jawab mereka.'
  },
  {
    title: 'Compliance & Regulatory',
    description: 'Penuh kepatuhan terhadap regulasi pemerintah, standar industri, dan best practices governance internasional.'
  },
  {
    title: 'Board Independence',
    description: 'Struktur board dengan independent commissioners yang memastikan pengawasan objektif dan transparan.'
  },
  {
    title: 'Stakeholder Relations',
    description: 'Hubungan yang sehat dengan stakeholders termasuk investor, regulators, karyawan, dan masyarakat lokal.'
  },
  {
    title: 'Anti-Corruption Policy',
    description: 'Komitmen zero-tolerance terhadap korupsi, fraud, dan transaksi yang melanggar hukum atau etika.'
  }
];

export function CorporateGovernance() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Corporate Governance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komitmen Naraya.One terhadap tata kelola perusahaan yang transparan, akuntabel, dan sesuai best practices internasional.
          </p>
        </motion.div>

        {/* Board of Directors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Dewan Direksi & Komisaris</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Commissioners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-linear-to-br from-blue-50 to-blue-100">
                <h4 className="text-lg font-bold mb-6">Dewan Komisaris</h4>
                <div className="space-y-4">
                  {boardMembers.commissioners.map((member, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-0 last:pb-0">
                      <p className="font-semibold text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                      <p className="text-xs text-blue-700">{member.title}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Directors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 bg-linear-to-br from-green-50 to-green-100">
                <h4 className="text-lg font-bold mb-6">Direksi</h4>
                <div className="space-y-4">
                  {boardMembers.directors.map((member, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-0 last:pb-0">
                      <p className="font-semibold text-sm">{member.name}</p>
                      <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                      <p className="text-xs text-green-700">{member.title}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Governance Policies */}
        <div>
          <h3 className="text-2xl font-bold mb-8">Kebijakan & Framework</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-md transition-shadow">
                  <div className="flex gap-3 mb-4">
                    {idx % 2 === 0 ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    ) : (
                      <ShieldExclamationIcon className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    )}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">{policy.title}</h4>
                      <p className="text-xs text-muted-foreground">{policy.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
