'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function BriefProfile() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Menghubungkan Inovasi, Menciptakan Nilai
            </h2>
            
            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Di Naraya.One, kami percaya pada kekuatan ekosistem bisnis terintegrasi. 
                Pendekatan strategis kami menggabungkan infrastruktur telekomunikasi, solusi teknologi canggih, 
                dan layanan komprehensif untuk menciptakan sinergi yang mendorong pertumbuhan berkelanjutan dan inovasi.
              </p>
              
              <p>
                Dengan portofolio yang mencakup berbagai sektor dan komitmen terhadap keunggulan operasional, 
                kami memberdayakan bisnis dan komunitas untuk berkembang di dunia yang semakin terhubung. 
                Pendekatan terintegrasi kami memungkinkan kami memberikan solusi komprehensif yang tidak dapat ditandingi oleh perusahaan tradisional yang berdiri sendiri.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold group"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
