'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#FF9A00] to-[#FFD93D] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-[#4F200D]"
          >
            Menguasai Masa Depan{' '}
            <span className="text-white drop-shadow-sm">
              Melalui Inovasi Terintegrasi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[#4F200D]/90 max-w-lg"
          >
            Naraya.One menghadirkan solusi terintegrasi dalam telekomunikasi,
            teknologi, dan layanan untuk membangun ekosistem bisnis masa depan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 bg-[#4F200D] text-white hover:bg-[#4F200D]/90 text-lg flex items-center gap-2 shadow-xl"
            >
              Jelajahi Ekosistem Kami
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* RIGHT — CARDS + PHOTO */}
        <div className="relative flex items-center justify-center">

          {/* STAT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 bg-white shadow-xl rounded-2xl p-6 w-72 border border-[#F6F1E9]"
          >
            <p className="text-sm text-neutral-500">+25.5%</p>
            <h3 className="font-semibold text-[#4F200D] mt-2">
              Peningkatan Efisiensi Operasional
            </h3>
            <div className="mt-4 w-full h-1 bg-neutral-200 rounded-full">
              <div className="h-1 bg-[#FF9A00] rounded-full w-2/3"></div>
            </div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(79,32,13,0.25)]"
          >
            <Image
              src="/images/woman.jpg"
              width={380}
              height={500}
              alt="team"
              className="object-cover"
            />
          </motion.div>

          {/* RATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 right-0 bg-[#4F200D] text-white rounded-2xl p-4 flex items-center gap-4 shadow-xl"
          >
            <div className="bg-[#FFD93D] text-[#4F200D] font-bold rounded-full w-12 h-12 flex items-center justify-center">
              9.8
            </div>
            <div className="text-sm">
              <span className="font-medium">Overall rating</span>
              <br />
              <span className="text-white/70">+10.000 review</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
