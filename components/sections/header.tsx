"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"

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
          ? "bg-[#f4f4f4] border-b-2 border-black py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Logo Brutalista */}
          <a href="#" className="group flex items-center gap-0 font-black text-2xl tracking-tighter uppercase">
            <span className="bg-black text-white px-2 py-1 group-hover:bg-[#5d239a] transition-colors">
              STUDIO
            </span>
            <span className="text-black border-4 border-black px-2 py-1 group-hover:text-[#fe35ee] transition-colors group-hover:bg-[#fdcd12]">
              244
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-black/60 hover:text-black hover:border-b-4 hover:border-[#fdcd12] transition-all pb-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <a 
                href="#contact" 
                className="group flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] text-black"
              >
                Contacto <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-black text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Brutalista */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-50 bg-[#f4f4f4] border-l-4 border-black"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-16">
                <span className="font-black text-2xl uppercase tracking-tighter">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-black text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="space-y-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-5xl font-black uppercase tracking-tighter text-black hover:text-[#5d239a]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-4">
                <Button className="w-full bg-[#fe35ea] text-black hover:bg-black hover:text-white py-8 text-xl font-black rounded-none border-2 border-black">
                  INICIAR AHORA
                </Button>
                <p className="text-[10px] font-bold uppercase tracking-widest text-center opacity-40">
                  Studio244 // Mendoza, Argentina
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}