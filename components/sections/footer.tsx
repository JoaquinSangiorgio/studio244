"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const footerLinks = [
  {
    title: "Servicios",
    links: ["Desarrollo de Software", "Ciberseguridad", "Redes Sociales", "Producción Audiovisual"],
  },
  {
    title: "Sectores",
    links: ["Político", "Profesionales", "Instituciones", "Comercial"],
  },
  {
    title: "Estudio",
    links: ["Sobre Nosotros", "Infraestructura", "Casos de Éxito", "Contacto"],
  },
]

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t-[12px] border-black overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-20">
          
          {/* Identidad de Marca */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 italic leading-none">
                Studio<span className="text-[#fe35ea]">244</span>
              </h3>
              <p className="text-xl text-slate-400 font-medium leading-tight max-w-sm mb-8">
                Consultoría tecnológica y de medios 360°. <br />
                <span className="text-white">Transformamos gestión en impacto real.</span>
              </p>
              
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
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
              className="space-y-6"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#fdcd12]">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-tight"
                    >
                      {link} 
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Barra Inferior Técnica */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              © {new Date().getFullYear()} STUDIO244 // ALL_RIGHTS_RESERVED
            </p>
            <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-700 hidden lg:flex">
            
            </div>
          </div>
          
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="mailto:contacto@studio244.com"
            className="flex items-center gap-3 px-6 py-3 border-2 border-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#5d239a] hover:border-[#5d239a] transition-all"
          >
            <Mail className="w-4 h-4" />
            contacto@studio244.com
          </motion.a>
        
        </div>
      </div>

      {/* Marca de agua gigante de fondo */}
      <div className="absolute bottom-0 left-0 w-full opacity-[0.02] pointer-events-none select-none overflow-hidden whitespace-nowrap">
        <span className="text-[250px] font-black uppercase tracking-tighter leading-none">
          STUDIO244 STUDIO244 STUDIO244
        </span>
      </div>
    </footer>
  )
}