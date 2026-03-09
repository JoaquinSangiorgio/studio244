"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = [
  {
    title: "Soluciones",
    links: ["Desarrollo Software", "Ciberseguridad", "Estrategia Digital", "Producción 4K"],
  },
  {
    title: "Sectores",
    links: ["Gabinete Político", "Profesionales", "Medios", "Comercial"],
  },
  {
    title: "Estudio",
    links: ["Infraestructura", "Casos de Éxito", "Protocolos", "Contacto"],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-[#e8e7e7] py-20 border-t-[12px] border-black overflow-hidden font-sans relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          
          {/* Identidad de Marca: Uso de logo.png */}
          <div className="lg:col-span-3 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Contenedor del Logo  */}
              <a href="#" className="relative block w-24 h-24 md:w-32 md:h-32 mb-8 transition-transform hover:scale-105 origin-left">
                <Image
                  src="/logo.png" 
                  alt="Studio 44 Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </a>

              <p className="text-xl text-[#e8e7e7]/60 font-bold leading-tight max-w-sm mb-10">
                Consultoría tecnológica y de medios 360°. <span className="text-white text-shadow-sm">tecnología y medios.</span> <br />
                Transformamos gestión en impacto real.
              </p>
              
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 border-2 border-white/10 flex items-center justify-center hover:bg-[#ff3131] hover:border-[#ff3131] hover:text-white transition-all duration-500 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enlaces de Navegación */}
          {footerLinks.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff3131]">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-sm font-bold text-[#e8e7e7]/40 hover:text-[#ff3131] transition-all uppercase tracking-tighter"
                    >
                      <span className="w-0 group-hover:w-4 h-[2px] bg-[#ff3131] transition-all" />
                      {link} 
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Barra Inferior Táctica */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[#e8e7e7]/30">
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} STUDIO44
            </p>
          </div>
          
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="mailto:consultoracomunicacion18@gmail.com"
            className="group flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-white transition-all shadow-[6px_6px_0px_rgba(255,49,49,0.2)] text-center"
          >
            <Mail className="w-4 h-4 text-[#ff3131] group-hover:text-black" />
            consultoracomunicacion18@gmail.com
          </motion.a>
        </div>
      </div>

      {/* Marca de agua de fondo */}
      <div className="absolute bottom-[-50px] left-0 w-full opacity-[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap">
        <span className="text-[300px] font-black uppercase tracking-tighter leading-none block">
          STUDIO44 STUDIO44 STUDIO44
        </span>
      </div>
    </footer>
  )
}