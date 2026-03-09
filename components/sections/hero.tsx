"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldAlert, Cpu, Mic2, ShieldBan } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#e8e7e7] text-[#1e1e1e] overflow-hidden font-sans flex flex-col justify-center py-20 lg:py-0">
      {/* Líneas de Grilla Técnicas - Contraste Rojo Sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[5%] lg:left-[10%] w-[1px] h-full bg-[#ff3131]/[0.05]" />
        <div className="absolute top-0 left-[95%] lg:left-[70%] w-[1px] h-full bg-[#ff3131]/[0.05] hidden sm:block" />
        <div className="absolute top-[15%] lg:top-[20%] left-0 w-full h-[1px] bg-[#ff3131]/[0.05]" />
        <div className="absolute bottom-[15%] lg:bottom-[20%] left-0 w-full h-[1px] bg-[#ff3131]/[0.05]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* Columna Izquierda: El Manifiesto */}
          <div className="lg:col-span-8 border-l-[6px] lg:border-l-8 border-[#1e1e1e] pl-4 sm:pl-8 lg:pl-16 py-6 lg:py-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <h1 className="flex flex-col mb-8 lg:mb-10">
                <span className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7.5rem] font-black leading-[0.9] lg:leading-[0.8] tracking-tighter uppercase">
                  Cuidamos tu
                </span>
                
                <span 
                  className="text-[4rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-black leading-[1] lg:leading-[0.9] tracking-tighter uppercase text-transparent italic block"
                  style={{ WebkitTextStroke: "clamp(1px, 0.2vw, 2px) #1e1e1e" }}
                >
                  IMAGEN
                </span>
                
                <span className="relative inline-block text-[1.8rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] font-black leading-[1.1] lg:leading-[1] tracking-tighter uppercase mt-2 sm:mt-4">
                  Potenciamos tu <span className="text-[#ff3131]">marca.</span>
                  <motion.span 
                    initial={{ width: 0 }} 
                    animate={{ width: "100%" }} 
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-1 lg:-bottom-2 left-0 h-2 lg:h-3 bg-[#ff3131] -z-10" 
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start md:items-center"
            >
              <p className="text-lg sm:text-xl lg:text-2xl font-bold max-w-sm leading-tight tracking-tight border-l-4 border-[#ff3131] pl-4 sm:pl-6">
                La plataforma que eleva la imagen de figuras públicas y marcas <span className="italic text-[#ff3131]/80">mediante estrategia y protección digital.</span>
              </p>
              
              <div className="w-full md:w-auto">
                <Button className="w-full md:w-auto bg-[#1e1e1e] text-white hover:bg-[#ff3131] rounded-none px-6 lg:px-10 py-6 lg:py-8 text-base lg:text-lg font-black tracking-widest transition-all group shadow-[6px_6px_0px_rgba(255,49,49,0.3)] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase">
                  INICIAR CONSULTORÍA
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha: Dashboard - Rojo & Negro */}
          <div className="lg:col-span-4 mt-8 lg:mt-0 flex flex-col justify-center border-t-2 sm:border-t-0 sm:border-l-2 border-[#1e1e1e]/10 bg-white/20 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 divide-y sm:divide-y-0 lg:divide-y sm:divide-x lg:divide-x-0 divide-[#1e1e1e]/10">
              {[
                { title: "Gestión Política", icon: <ShieldAlert />, desc: "Asesoramiento" },
                { title: "Software Comercial", icon: <Cpu />, desc: "Sistemas" },
                { title: "Estudio y Grabación", icon: <Mic2 />, desc: "Producción" },
                { title: "Seguridad", icon: <ShieldBan />, desc: "Protección" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, backgroundColor: "#ffffff" }}
                  className="p-6 lg:p-8 group cursor-pointer transition-all flex flex-col sm:items-center lg:items-start text-left sm:text-center lg:text-left"
                >
                  <div className="flex items-center sm:flex-col lg:flex-row gap-4 mb-2">
                    <div className="p-2 border-2 border-[#1e1e1e] text-[#1e1e1e] group-hover:bg-[#ff3131] group-hover:text-white group-hover:border-[#ff3131] transition-colors shrink-0">
                      <div className="h-5 w-5 sm:h-6 sm:w-6">{item.icon}</div>
                    </div>
                    <h3 className="text-[11px] lg:text-sm font-black uppercase tracking-widest leading-none sm:mt-2 lg:mt-0">{item.title}</h3>
                  </div>
                  <p className="text-[9px] lg:text-[10px] font-bold text-[#1e1e1e]/40 uppercase tracking-widest group-hover:text-[#1e1e1e]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Tecnológico - Rojo & Negro */}
      <div className="absolute bottom-0 w-full h-12 lg:h-14 bg-[#1e1e1e] text-[#e8e7e7] flex items-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 lg:gap-12 text-[9px] lg:text-[10px] font-black tracking-[0.3em] lg:tracking-[0.5em] uppercase italic">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 lg:gap-12 shrink-0">
              <span>Studio 244</span>
              <span className="text-[#ff3131]">●</span>
              <span>Ciberseguridad</span>
              <span className="text-[#ff3131]">●</span>
              <span>Media Studio</span>
              <span className="text-[#ff3131]">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}