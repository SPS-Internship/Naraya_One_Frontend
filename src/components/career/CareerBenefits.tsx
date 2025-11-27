'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  HeartIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ScaleIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: HeartIcon,
    title: 'BPJS Kesehatan & Ketenagakerjaan',
    description: 'Perlindungan kesehatan dan ketenagakerjaan untuk Anda dan keluarga'
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning Budget',
    description: 'Dana tahunan untuk pengembangan skill dan sertifikasi profesional'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Career Acceleration Program',
    description: 'Program mentoring dan akselerasi karir untuk fast-track professionals'
  },
  {
    icon: ScaleIcon,
    title: 'Wellness & Work Life Balance',
    description: 'Program kesejahteraan karyawan dan fleksibilitas kerja'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Asuransi Jiwa',
    description: 'Jaminan asuransi jiwa komprehensif untuk keamanan finansial'
  },
  {
    icon: CalendarDaysIcon,
    title: 'Cuti & Hari Libur',
    description: 'Cuti tahunan yang kompetitif dan hari libur nasional'
  },
  {
    icon: BriefcaseIcon,
    title: 'Tunjangan Profesi',
    description: 'Tunjangan khusus berdasarkan kompetensi dan sertifikasi'
  },
  {
    icon: UserGroupIcon,
    title: 'Team Building & Events',
    description: 'Kegiatan team building dan gathering tahunan'
  }
];

export function CareerBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Benefit Karyawan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami percaya dalam memberikan kompensasi dan benefit yang kompetitif untuk kesejahteraan Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="p-6 h-full hover:shadow-md transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
