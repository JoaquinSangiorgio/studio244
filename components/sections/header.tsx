"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Sectores", href: "#niches" },
  { label: "Soluciones", href: "#services" },
  { label: "Estudio", href: "#about" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f4f4f4]/95 backdrop-blur-md border-b-2 border-black py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="flex items-center justify-between">
          
          {/* LOGO COMO IMAGEN */}
          <a href="#" className="group relative block w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-105">
            <Image
              src="/logo.png" // Cambia esto por el nombre exacto de tu archivo en /public
              alt="Studio 244 Logo"
              fill
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-9">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-black/70 hover:text-black transition-all relative group/link pb-1"
                  >
                    {link.label}
                    {/* Línea de acento naranja que combine con el logo */}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#F4743B] transition-all group-hover/link:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-2.5 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#F4743B] transition-colors shadow-[4px_4px_0px_rgba(244,116,59,0.3)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              Contacto <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 bg-black text-white shadow-[3px_3px_0px_#F4743B]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="md:hidden fixed inset-0 z-50 bg-[#f4f4f4] flex flex-col p-8 border-l-4 border-black"
          >
            <div className="flex justify-between items-center mb-16">
               <div className="relative w-16 h-16">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-2.5 bg-black text-white">
                 <X className="w-6 h-6" />
               </button>
            </div>

            <ul className="space-y-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-5xl font-black uppercase tracking-tighter text-black hover:text-[#F4743B]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-[#F4743B] text-black text-center py-6 text-xl font-black uppercase border-4 border-black shadow-[6px_6px_0px_black]"
              >
                SOLICITAR AUDITORÍA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}