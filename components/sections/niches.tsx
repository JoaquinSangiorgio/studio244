"use client"

import { motion } from "framer-motion"
import { Landmark, User, Building2, ShoppingBag, Plus, ArrowUpRight } from "lucide-react"

const niches = [
  {
    icon: Landmark,
    title: "Sector Político y Gestión Pública",
    tag: "Estrategia & Crisis",
    description: "Traducción de gestión territorial en comunicación de alto impacto y blindaje de activos digitales.",
    color: "#ff3131",
  },
  {
    icon: User,
    title: "Profesionales Independientes",
    tag: "Personal Branding",
    description: "Potenciación de perfiles individuales que buscan dominar su nicho mediante contenido de autoridad.",
    color: "#ff3131",
  },
  {
    icon: Building2,
    title: "Medios de Comunicación",
    tag: "Gestión 360",
    description: "Optimización de flujos comunicacionales y organización de medios para entidades públicas y privadas.",
    color: "#1e1e1e",
  },
  {
    icon: ShoppingBag,
    title: "Sector Comercial",
    tag: "Digital Commerce",
    description: "Modernización de ventas con infraestructura propia: Apps de fidelización y sistemas de conversión.",
    color: "#ff3131",
  },
]

export function Niches() {
  return (
    <section id="niches" className="py-32 bg-[#e8e7e7] text-[#1e1e1e] overflow-hidden font-sans border-t-2 border-[#1e1e1e]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Cabecera Brutalista - Rojo Radical */}
        <div className="flex flex-col mb-24 border-l-8 border-[#ff3131] pl-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff3131] mb-4"
          >
            Especialización / Sectores
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase"
          >
            Soluciones con<br />
            <span className="text-transparent italic" style={{ WebkitTextStroke: "1px #1e1e1e" }}>Precisión Técnica.</span>
          </motion.h2>
        </div>

        {/* Grilla Industrial con Sombra Roja */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e] border-2 border-[#1e1e1e] shadow-[20px_20px_0px_rgba(255,49,49,0.15)]">
          {niches.map((niche, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 flex flex-col justify-between min-h-[480px] transition-all duration-500 hover:bg-[#1e1e1e] hover:text-white"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="relative">
                    {/* Icono Táctico */}
                    <div className="w-14 h-14 bg-[#e8e7e7] border-2 border-[#1e1e1e] flex items-center justify-center group-hover:bg-[#ff3131] group-hover:border-[#ff3131] transition-all duration-500 shadow-[4px_4px_0px_#1e1e1e] group-hover:shadow-none">
                        <niche.icon className="w-6 h-6 text-[#1e1e1e] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <Plus className="w-6 h-6 text-[#ff3131] rotate-0 group-hover:rotate-90 transition-transform duration-500" />
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff3131] mb-4 block group-hover:text-white/60">
                  {niche.tag}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">
                  {niche.title}
                </h3>
                <p className="text-[#1e1e1e]/60 font-bold leading-tight text-balance group-hover:text-white/80 transition-colors">
                  {niche.description}
                </p>
              </div>

              <div className="mt-12">
                 <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between cursor-pointer border-t-2 border-[#1e1e1e]/10 pt-6 group-hover:border-white/20"
                 >
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        Protocolo_Nicho
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#ff3131]" />
                 </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Técnico de Sección */}
        
      </div>
    </section>
  )
}