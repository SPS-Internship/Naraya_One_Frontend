'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPinIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Kami mencari Senior Software Engineer berpengalaman untuk memimpin proyek transformasi digital.',
    requirements: ['5+ tahun pengalaman', 'Full-stack development', 'TypeScript & React', 'System design']
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Bergabunglah sebagai Product Manager untuk mengembangkan produk digital ecosystem kami.',
    requirements: ['3+ tahun PM experience', 'Agile methodology', 'Data-driven', 'Communication skills']
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Desain antarmuka yang intuitif untuk jutaan pengguna di ekosistem digital kami.',
    requirements: ['3+ tahun design experience', 'Figma/Adobe XD', 'Mobile & web design', 'Design systems']
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Optimalkan infrastruktur cloud dan deployment pipeline kami.',
    requirements: ['4+ tahun DevOps experience', 'Kubernetes', 'AWS/Google Cloud', 'CI/CD pipelines']
  },
  {
    id: '5',
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Analisis data untuk mendorong keputusan bisnis strategis.',
    requirements: ['2+ tahun experience', 'SQL & Python', 'Data visualization', 'Business acumen']
  },
  {
    id: '6',
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Jakarta',
    type: 'Full-time',
    description: 'Kembangkan strategi marketing untuk memperkenalkan ekosistem digital kami.',
    requirements: ['3+ tahun marketing experience', 'Digital marketing', 'Content strategy', 'Analytics']
  }
];

const departments = ['All', ...new Set(jobs.map(j => j.department))];
const locations = ['All', ...new Set(jobs.map(j => j.location))];
const types = ['All', 'Full-time', 'Part-time', 'Contract'];

export function JobOpenings() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredJobs = jobs.filter(job => {
    const deptMatch = selectedDept === 'All' || job.department === selectedDept;
    const locMatch = selectedLocation === 'All' || job.location === selectedLocation;
    const typeMatch = selectedType === 'All' || job.type === selectedType;
    return deptMatch && locMatch && typeMatch;
  });

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lowongan Pekerjaan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan kesempatan karir yang sesuai dengan passion dan keahlian Anda.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div>
            <label className="text-sm font-semibold mb-2 block">Departemen</label>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">Lokasi</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold mb-2 block">Tipe Pekerjaan</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="grid md:grid-cols-[1fr_auto] gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BriefcaseIcon className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDaysIcon className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-xs rounded-full text-muted-foreground"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button className="gap-2">
                        Lamar <ChevronRightIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">Tidak ada lowongan yang sesuai dengan filter Anda.</p>
            </Card>
          )}
        </div>

        {filteredJobs.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Menampilkan {filteredJobs.length} dari {jobs.length} lowongan
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
