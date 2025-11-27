'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
  UserGroupIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const phases = [
  {
    number: 1,
    title: 'Onboarding & Training',
    duration: 'Minggu 1-2',
    description: 'Orientasi perusahaan, product knowledge, dan team building'
  },
  {
    number: 2,
    title: 'Project Assignment',
    duration: 'Minggu 3-8',
    description: 'Ditugaskan ke proyek real dengan mentoring dari senior engineer'
  },
  {
    number: 3,
    title: 'Development & Contribution',
    duration: 'Minggu 9-20',
    description: 'Berkontribusi aktif dan membangun skills praktis'
  },
  {
    number: 4,
    title: 'Final Project & Evaluation',
    duration: 'Minggu 21-24',
    description: 'Menyelesaikan final project dan penilaian performa'
  }
];

const benefits = [
  { icon: AcademicCapIcon, text: 'Training & Skill Development' },
  { icon: BriefcaseIcon, text: 'Real Project Experience' },
  { icon: UserGroupIcon, text: 'Mentoring dari Senior Engineers' },
  { icon: TrophyIcon, text: 'Sertifikat Keselesaian' },
  { icon: SparklesIcon, text: 'Peluang Konversi ke Full-time' },
  { icon: CheckCircleIcon, text: 'Competitive Allowance' }
];

export function InternshipProgram() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Program Magang</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami mengundang fresh graduate dan pelajar semester akhir untuk bergabung dalam program magang intensif kami selama 6 bulan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Timeline Program</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="p-6 relative h-full">
                  {idx < phases.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-6 h-0.5 bg-primary transform -translate-y-1/2" />
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {phase.number}
                    </div>
                    <span className="text-xs font-semibold text-primary">{phase.duration}</span>
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{phase.title}</h4>
                  <p className="text-xs text-muted-foreground">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Benefit Program Magang</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Icon className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium text-sm">{benefit.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Qualifications */}
        <Card className="p-8 bg-linear-to-r from-blue-50 to-indigo-50 mb-12">
          <h3 className="text-xl font-bold mb-6">Syarat & Kriteria</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary" />
                Persyaratan
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Fresh graduate atau pelajar semester akhir</li>
                <li>• Jurusan IT/Computer Science/Teknik</li>
                <li>• GPA minimal 2.75 (atau setara)</li>
                <li>• Kemampuan bahasa Inggris basic</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-primary" />
                Keahlian yang Dihargai
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Pengalaman dengan React/Node.js/Python</li>
                <li>• Familiar dengan Git version control</li>
                <li>• Kemampuan problem solving yang baik</li>
                <li>• Team player dengan komunikasi baik</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg mb-6 text-muted-foreground">
            Siap memulai karir Anda di Naraya.One?
          </p>
          <Button size="lg" className="gap-2">
            Daftar Magang Sekarang <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
