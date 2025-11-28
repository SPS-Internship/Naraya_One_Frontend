'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Telepon',
    description: 'Hubungi kami langsung',
    details: ['+62 21 2345 6789', '+62 811 2345 6789'],
    color: 'text-blue-600'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    description: 'Kirim pesan kepada kami',
    details: ['info@naraya.one', 'support@naraya.one'],
    color: 'text-green-600'
  },
  {
    icon: MapPinIcon,
    title: 'Alamat Kantor',
    description: 'Kunjungi kantor pusat kami',
    details: ['Jl. Sudirman No. 123', 'Jakarta Selatan 12190'],
    color: 'text-purple-600'
  },
  {
    icon: ClockIcon,
    title: 'Jam Operasional',
    description: 'Waktu layanan customer service',
    details: ['Senin - Jumat: 08:00 - 18:00', 'Sabtu: 09:00 - 15:00'],
    color: 'text-orange-600'
  }
];

const departments = [
  {
    icon: BuildingOfficeIcon,
    name: 'Sales & Partnership',
    email: 'sales@naraya.one',
    phone: '+62 21 2345 6701',
    description: 'Kerjasama bisnis dan penjualan'
  },
  {
    icon: GlobeAltIcon,
    name: 'Technical Support',
    email: 'tech@naraya.one',
    phone: '+62 21 2345 6702',
    description: 'Dukungan teknis dan troubleshooting'
  }
];

export default function ContactInfo() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Informasi Kontak</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai cara untuk menghubungi tim Naraya.One sesuai dengan kebutuhan Anda.
          </p>
        </motion.div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow text-center">
                  <div className="mb-4">
                    <Icon className={`w-8 h-8 mx-auto ${method.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <div className="space-y-1">
                    {method.details.map((detail, i) => (
                      <p key={i} className="text-sm font-medium">{detail}</p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Department Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Kontak Departemen</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{dept.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Email:</span> {dept.email}</p>
                          <p><span className="font-medium">Telepon:</span> {dept.phone}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}