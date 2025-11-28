'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function ContactMap() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lokasi Kantor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi kantor pusat Naraya.One di kawasan bisnis Jakarta Selatan untuk bertemu langsung dengan tim kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden">
            {/* Map Placeholder - In production, you would use Google Maps or similar */}
            <div className="relative h-96 bg-linear-to-br from-gray-100 to-gray-200">
              {/* Map simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kantor Pusat Naraya.One</h3>
                  <p className="text-muted-foreground">Jl. Sudirman No. 123, Jakarta Selatan 12190</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Gedung Perkantoran Modern, Lantai 15-17
                  </p>
                </div>
              </div>

              {/* Grid overlay for map effect */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="text-gray-300">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>

            {/* Address Info */}
            <div className="p-6 bg-gray-50">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Alamat Lengkap</h4>
                  <p className="text-sm text-muted-foreground">
                    Jl. Jenderal Sudirman No. 123<br/>
                    Karet Tengsin, Tanah Abang<br/>
                    Jakarta Selatan 12190
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Transportasi Umum</h4>
                  <p className="text-sm text-muted-foreground">
                    MRT Bundaran HI (5 menit jalan kaki)<br/>
                    TransJakarta Halte Dukuh Atas<br/>
                    Stasiun Sudirman
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fasilitas Parkir</h4>
                  <p className="text-sm text-muted-foreground">
                    Basement B1-B3<br/>
                    Kapasitas 500 kendaraan<br/>
                    Akses 24 jam
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Office Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Kantor Regional</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">Surabaya</p>
                  <p className="text-muted-foreground">Jl. Pemuda No. 45, Surabaya 60271</p>
                  <p className="text-muted-foreground">Tel: +62 31 1234 5678</p>
                </div>
                <div>
                  <p className="font-semibold">Bandung</p>
                  <p className="text-muted-foreground">Jl. Asia Afrika No. 89, Bandung 40111</p>
                  <p className="text-muted-foreground">Tel: +62 22 1234 5678</p>
                </div>
                <div>
                  <p className="font-semibold">Medan</p>
                  <p className="text-muted-foreground">Jl. Gatot Subroto No. 67, Medan 20231</p>
                  <p className="text-muted-foreground">Tel: +62 61 1234 5678</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Jam Kunjungan</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Senin - Kamis</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumat</span>
                  <span className="font-medium">08:00 - 16:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Minggu & Hari Libur</span>
                  <span>Tutup</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-muted-foreground">
                    <strong>Note:</strong> Untuk kunjungan, harap konfirmasi terlebih dahulu melalui telepon atau email.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}