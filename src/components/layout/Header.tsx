'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'
import Image from "next/image";


const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Entitas Bisnis', href: '/entities' },
  { name: 'Ekosistem Digital', href: '/ecosystem' },
  { name: 'Berita & Wawasan', href: '/news' },
  { name: 'CSR & Keberlanjutan', href: '/sustainability' },
  { name: 'Karir', href: '/careers' },
  { name: 'Investor', href: '/investors' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bg-white/20 dark:bg-black/30 backdrop-blur-md shadow-lg z-50"
    >
      <nav className="mx-auto max-w-[1400px] px-4 lg:px-6" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="flex items-center"// untuk membuat image dan text sejajar
              >
                <Image
                  src="/file_2025-09-29_06.26.12-removebg-preview.png"
                  alt="Naraya Logo"
                  width={60}     // sesuaikan ukuran yang kamu mau
                  height={60}
                  className="object-contain"
                />

                <span className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  Naraya.One
                </span>
              </motion.div>
            </Link>
          </div>


          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-5"> 
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:justify-end ml-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Hubungi Kami
              </Link>
            </Button>
          </motion.div>
        </div>
          </div>
        </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Naraya.One</span>
                  <div className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    Naraya.One
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted hover:text-primary transition-colors duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button 
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        Hubungi Kami
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
