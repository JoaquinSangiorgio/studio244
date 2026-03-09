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
    color: "#fe35ea", 
  },
  {
    icon: Video,
    id: "02",
    title: "Producción",
    description: "Infraestructura propia para contenidos de alta fidelidad. Media Studio equipado para producciones cinematográficas y podcasts en estudio o exteriores.",
    tag: "MEDIA_ASSETS",
    color: "#5d239a", 
  },
  {
    icon: Cpu,
    id: "03",
    title: "Desarrollo",
    description: "Ingeniería de software a medida. Construimos arquitecturas escalables —SaaS, web y apps— para automatizar el crecimiento sin terceros.",
    tag: "CORE_SYSTEMS",
    color: "#121212", 
  },
  {
    icon: Lock,
    id: "04",
    title: "Seguridad",
    description: "Protección de activos críticos y blindaje de integridad. Implementamos protocolos avanzados para garantizar confidencialidad absoluta.",
    tag: "DATA_SHIELD",
    color: "#fdcd12", 
  },
]

export function Services() {
  return (
    <section className="bg-[#f9f9f9] py-20 lg:py-32 font-sans overflow-hidden border-t-2 border-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Cabecera Límpida */}
        <div className="flex flex-col lg:flex-row lg:items-end mb-16 lg:mb-24 border-b-2 border-black pb-8 lg:pb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-[12vw] lg:text-[7rem] font-black tracking-tighter text-black leading-none uppercase">
              Servicios <br /> 
              <span className="text-transparent italic" style={{ WebkitTextStroke: "1px #1A1A1A" }}>Estratégicos.</span>
            </h2>
          </motion.div>
          
          <div className="flex flex-col items-start lg:items-end gap-2 opacity-30">
           
          </div>
        </div>

        {/* Lista de Servicios: Icono Táctico a la Izquierda y Texto a la Derecha */}
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
              
              {/* Bloque 1: El Icono Táctico y el ID (Col 1-3) */}
              <div className="lg:col-span-3 flex lg:justify-center w-full relative">
                
                {/* ID de servicio (01, 02...) */}
                
                {/* Contenedor del Icono: Inspirado en image_0.png */}
                <div className="relative w-28 h-28 lg:w-36 lg:h-36">
                    {/* Sombra de Color */}
                    <div 
                        className="absolute inset-0 translate-x-2 translate-y-2 lg:translate-x-3 lg:translate-y-3 shadow-sm"
                        style={{ backgroundColor: service.color }}
                    />
                    {/* Contenedor Negro del Icono */}
                    <div className="absolute inset-0 bg-black flex items-center justify-center border-2 border-black group-hover:scale-105 transition-transform duration-300">
                        <service.icon 
                            className="w-12 h-12 lg:w-16 lg:h-16 text-white group-hover:scale-110 transition-transform" 
                            style={{ filter: `drop-shadow(0px 0px 5px ${service.color})` }}
                        />
                    </div>
                </div>
              </div>

              {/* Bloque 2: Texto Totalmente Legible (Col 4-12) */}
              <div className="text-black lg:col-span-9 flex flex-col lg:flex-row items-center justify-between gap-6">
                
                {/* Título y Descripción */}
                <div className="flex-1 max-w-2xl text-left">
                  <h3 className="text-[10vw] lg:text-[4rem] font-black uppercase tracking-tighter text-black leading-none mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg lg:text-xl text-slate-700 font-bold leading-snug">
                    {service.description}
                  </p>
                </div>

                {/* Tag Técnico y Botón de Acción Táctico */}
                <div className="flex flex-col items-start lg:items-end gap-6 shrink-0 pt-6 lg:pt-0">
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#5d239a] italic px-3 py-1 bg-white border border-black shadow-[3px_3px_0px_#fdcd12] group-hover:-translate-x-1 transition-transform">
                        {service.tag}
                    </span>
                    <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group/btn">
                        Ver protocolo técnico
                        <div className="w-12 h-12 rounded-none border-2 border-black flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-all shadow-[4px_4px_0px_#fdcd12] hover:shadow-[6px_6px_0px_#fdcd12]">
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:rotate-45" />
                        </div>
                    </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Cierre Técnico */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-30 text-[9px] font-mono font-black uppercase tracking-[0.4em]">
          <span>Mendoza // Buenos Aires // Brasil</span>
          <span className="hidden sm:block text-[#fe35ea]">●</span>
          <span>Deploy Status: Stable</span>
        </div>
      </div>
    </section>
  )
}