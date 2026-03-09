"use client"

import { motion } from "framer-motion"
import { Smartphone, Shield, Share2, Lock, ArrowUpRight, Cpu, Video, Mic2 } from "lucide-react"

const services = [
  {
    icon: Mic2,
    id: "01",
    title: "Asesoría",
    description: "Auditamos la percepción y redefinimos el mensaje estratégico. Analizamos qué transmite tu imagen para que cada gesto sea una herramienta de influencia.",
    tag: "BRAND_INTEGRITY",
    color: "#ff3131", // Rojo Radical
  },
  {
    icon: Video,
    id: "02",
    title: "Producción",
    description: "Infraestructura propia para contenidos de alta fidelidad. Media Studio equipado para producciones cinematográficas y podcasts en estudio o exteriores.",
    tag: "MEDIA_ASSETS",
    color: "#ff3131", 
  },
  {
    icon: Cpu,
    id: "03",
    title: "Desarrollo",
    description: "Ingeniería de software a medida. Construimos arquitecturas escalables —SaaS, web y apps— para automatizar el crecimiento sin terceros.",
    tag: "CORE_SYSTEMS",
    color: "#ff3131", // Negro profundo
  },
  {
    icon: Lock,
    id: "04",
    title: "Seguridad",
    description: "Protección de activos críticos y blindaje de integridad. Implementamos protocolos avanzados para garantizar confidencialidad absoluta.",
    tag: "DATA_SHIELD",
    color: "#ff3131", 
  },
]

export function Services() {
  return (
    <section className="bg-[#e8e7e7] py-20 lg:py-32 font-sans overflow-hidden border-t-2 border-[#1e1e1e]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Cabecera Límpida - Estilo Rojo Radical */}
        <div className="flex flex-col lg:flex-row lg:items-end mb-16 lg:mb-24 border-b-2 border-[#1e1e1e] pb-8 lg:pb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            
            <h2 className="text-[12vw] lg:text-[7rem] font-black tracking-tighter text-[#1e1e1e] leading-none uppercase">
              Servicios <br /> 
              <span className="text-transparent italic" style={{ WebkitTextStroke: "1px #1e1e1e" }}>Estratégicos.</span>
            </h2>
          </motion.div>
          
          
        </div>

        {/* Lista de Servicios: Contraste Rojo y Negro */}
        <div className="flex flex-col gap-10 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative grid lg:grid-cols-12 items-center gap-8 lg:gap-12 hover:bg-white transition-all duration-500 p-6 lg:p-8"
            >
              
              {/* Bloque 1: El Icono Táctico */}
              <div className="lg:col-span-3 flex lg:justify-center w-full relative">
                <div className="relative w-28 h-28 lg:w-36 lg:h-36">
                    {/* Sombra de Color Rojo */}
                    <div 
                        className="absolute inset-0 translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 opacity-30 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: service.color }}
                    />
                    {/* Contenedor Negro del Icono */}
                    <div className="absolute inset-0 bg-[#1e1e1e] flex items-center justify-center border-2 border-[#1e1e1e] group-hover:scale-105 transition-transform duration-300">
                        <service.icon 
                            className="w-12 h-12 lg:w-16 lg:h-16 text-white group-hover:scale-110 transition-transform" 
                            style={{ filter: service.color === "#ff3131" ? "drop-shadow(0px 0px 8px #ff3131)" : "none" }}
                        />
                    </div>
                </div>
              </div>

              {/* Bloque 2: Texto */}
              <div className="text-[#1e1e1e] lg:col-span-9 flex flex-col lg:flex-row items-center justify-between gap-6">
                
                <div className="flex-1 max-w-2xl text-left">
                  <h3 className="text-[10vw] lg:text-[4rem] font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-[#ff3131] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-[#1e1e1e]/70 font-bold leading-snug group-hover:text-[#1e1e1e] transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Tag Técnico y Botón de Acción Táctico */}
                <div className="flex flex-col items-start lg:items-end gap-6 shrink-0 pt-6 lg:pt-0">
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#ff3131] italic px-3 py-1 bg-[#e8e7e7] border border-[#1e1e1e] shadow-[3px_3px_0px_#1e1e1e] group-hover:shadow-[3px_3px_0px_#ff3131] transition-all">
                        {service.tag}
                    </span>
                    <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                        Ver protocolo técnico
                        <div className="w-12 h-12 rounded-none border-2 border-[#1e1e1e] flex items-center justify-center group-hover/btn:bg-[#ff3131] group-hover/btn:text-white group-hover/btn:border-[#ff3131] transition-all shadow-[4px_4px_0px_rgba(255,49,49,0.2)]">
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:rotate-45" />
                        </div>
                    </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Cierre Técnico en Rojo */}
        
      </div>
    </section>
  )
}