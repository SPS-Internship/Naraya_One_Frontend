'use client';

import { motion } from 'framer-motion';
import { Leaf, Users, Heart, Target, ArrowRight, Globe, Recycle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const sustainabilityValues = [
  {
    icon: Leaf,
    title: 'Lingkungan Hijau',
    description: 'Berkomitmen pada teknologi ramah lingkungan dan pengurangan jejak karbon dalam setiap operasi bisnis.',
    metrics: '50% Pengurangan Emisi',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Pemberdayaan Komunitas',
    description: 'Membangun program-program yang memberdayakan masyarakat lokal dan menciptakan dampak positif berkelanjutan.',
    metrics: '10,000+ Penerima Manfaat',
    color: 'text-blue-600'
  },
  {
    icon: Heart,
    title: 'Kesejahteraan Sosial',
    description: 'Mendukung inisiatif kesehatan, pendidikan, dan kesejahteraan untuk menciptakan masyarakat yang lebih baik.',
    metrics: '100+ Program Aktif',
    color: 'text-red-600'
  },
  {
    icon: Target,
    title: 'Tata Kelola Berkelanjutan',
    description: 'Menerapkan standar tata kelola perusahaan yang transparan dan bertanggung jawab dalam semua aspek bisnis.',
    metrics: '95% Skor Transparansi',
    color: 'text-purple-600'
  }
];

const initiatives = [
  {
    category: 'Lingkungan',
    title: 'Program Zero Waste',
    description: 'Inisiatif untuk mencapai zero waste di semua kantor dan fasilitas operasional dengan sistem daur ulang komprehensif.',
    image: '/images/sustainability/zero-waste.jpg',
    impact: 'Pengurangan limbah 85%',
    timeline: '2024-2026'
  },
  {
    category: 'Teknologi Hijau',
    title: 'Green Data Center',
    description: 'Pembangunan pusat data yang menggunakan 100% energi terbarukan dengan sistem pendinginan ramah lingkungan.',
    image: '/images/sustainability/green-datacenter.jpg',
    impact: 'Hemat energi 60%',
    timeline: '2025-2027'
  },
  {
    category: 'Pendidikan',
    title: 'Digital Literacy untuk Semua',
    description: 'Program pelatihan literasi digital gratis untuk masyarakat kurang mampu di seluruh Indonesia.',
    image: '/images/sustainability/digital-literacy.jpg',
    impact: '50,000 peserta trained',
    timeline: '2024-2025'
  },
  {
    category: 'Kesehatan',
    title: 'Telemedicine untuk Daerah Terpencil',
    description: 'Platform telemedicine gratis untuk memberikan akses kesehatan kepada masyarakat di daerah terpencil.',
    image: '/images/sustainability/telemedicine.jpg',
    impact: '200 desa terjangkau',
    timeline: '2024-2026'
  }
];

const sdgGoals = [
  { number: '3', title: 'Kesehatan yang Baik', description: 'Memastikan kehidupan sehat dan mendorong kesejahteraan' },
  { number: '4', title: 'Pendidikan Berkualitas', description: 'Memastikan pendidikan yang inklusif dan berkualitas' },
  { number: '7', title: 'Energi Bersih', description: 'Memastikan akses energi yang terjangkau dan bersih' },
  { number: '9', title: 'Industri & Inovasi', description: 'Membangun infrastruktur yang tangguh dan inovasi' },
  { number: '11', title: 'Kota Berkelanjutan', description: 'Membuat kota yang inklusif, aman, dan berkelanjutan' },
  { number: '13', title: 'Aksi Iklim', description: 'Mengambil tindakan segera untuk memerangi perubahan iklim' }
];

export function SustainabilitySection() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20" />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Leaf className="w-4 h-4" />
              CSR & Keberlanjutan
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Membangun Masa Depan
              <br />
              yang Berkelanjutan
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Komitmen kami terhadap tanggung jawab sosial perusahaan dan pembangunan berkelanjutan 
              untuk menciptakan dampak positif bagi masyarakat dan lingkungan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Lihat Program Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Laporan Keberlanjutan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Values */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nilai-Nilai Keberlanjutan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Empat pilar utama yang menjadi fondasi dalam setiap langkah bisnis dan inovasi yang kami lakukan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  
                  <div className={`text-sm font-semibold ${value.color}`}>
                    {value.metrics}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Inisiatif & Program Berkelanjutan
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Program-program konkret yang telah dan sedang kami jalankan untuk menciptakan dampak positif.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="aspect-video bg-linear-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {initiative.category === 'Lingkungan' && <Recycle className="w-16 h-16 text-green-600" />}
                      {initiative.category === 'Teknologi Hijau' && <Building2 className="w-16 h-16 text-blue-600" />}
                      {initiative.category === 'Pendidikan' && <Users className="w-16 h-16 text-purple-600" />}
                      {initiative.category === 'Kesehatan' && <Heart className="w-16 h-16 text-red-600" />}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {initiative.category}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {initiative.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-semibold text-green-600">{initiative.impact}</span>
                      </div>
                      <div className="text-muted-foreground">
                        {initiative.timeline}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Globe className="w-4 h-4" />
              UN SDGs
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mendukung Tujuan Pembangunan Berkelanjutan
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Kami berkomitmen untuk berkontribusi pada pencapaian Sustainable Development Goals (SDGs) 
              melalui inovasi teknologi dan program-program berkelanjutan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {goal.number}
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {goal.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-linear-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-[800px] mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Mari Bergabung dalam Perjalanan Keberlanjutan
            </h2>
            <p className="text-lg opacity-90 mb-12 leading-relaxed">
              Bersama-sama kita dapat menciptakan dampak positif yang berkelanjutan untuk generasi mendatang. 
              Hubungi kami untuk berkolaborasi atau pelajari lebih lanjut tentang program-program kami.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Hubungi Tim CSR Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600">
                Download Laporan Sustainability
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
