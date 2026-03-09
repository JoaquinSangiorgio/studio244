"use client"

import { motion } from "framer-motion"
import { Landmark, User, Building2, ShoppingBag, Plus } from "lucide-react"

const niches = [
  {
    icon: Landmark,
    title: "Sector Político",
    tag: "Estrategia & Crisis",
    description: "Traducción de gestión territorial en comunicación de alto impacto y blindaje de activos digitales.",
    color: "#5d239a",
  },
  {
    icon: User,
    title: "Profesionales",
    tag: "Personal Branding",
    description: "Potenciación de perfiles independientes que buscan dominar su nicho mediante contenido de autoridad.",
    color: "#fe35ea",
  },
  {
    icon: Building2,
    title: "Instituciones",
    tag: "Gestión 360",
    description: "Optimización de flujos comunicacionales y organización de medios para entidades públicas y privadas.",
    color: "#121212",
  },
  {
    icon: ShoppingBag,
    title: "Sector Comercial",
    tag: "Digital Commerce",
    description: "Modernización de ventas con infraestructura propia: Apps de fidelización y sistemas de conversión.",
    color: "#fdcd12",
  },
]

export function Niches() {
  return (
    <section id="niches" className="py-32 bg-white text-black overflow-hidden font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Cabecera Minimalista de Alta Gama */}
        <div className="flex flex-col mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-4"
          >
            Especialización / Sectores
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.9]"
          >
            Soluciones con <br />
            <span className="italic font-serif text-slate-300">precisión técnica.</span>
          </motion.h2>
        </div>

        {/* Grilla de Diseño Suizo Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border-y border-slate-100">
          {niches.map((niche, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-10 flex flex-col justify-between min-h-[450px] transition-colors duration-500 hover:bg-slate-50"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div 
                    className="w-1.5 h-12 transition-transform duration-500 group-hover:scale-y-125"
                    style={{ backgroundColor: niche.color }}
                  />
                  <Plus className="w-5 h-5 text-slate-200 group-hover:text-black transition-colors rotate-0 group-hover:rotate-90 duration-500" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                  {niche.tag}
                </span>
                <h3 className="text-3xl font-medium tracking-tight mb-6">
                  {niche.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed text-balance">
                  {niche.description}
                </p>
              </div>

              <div className="mt-12 overflow-hidden">
                 <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 cursor-pointer"
                 >
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <niche.icon className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver enfoque
                    </span>
                 </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cierre de sección con detalle de marca */}
      </div>
    </section>
  )
}