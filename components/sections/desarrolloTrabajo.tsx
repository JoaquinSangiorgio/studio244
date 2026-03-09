"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote, Star, ArrowUpRight, ShieldCheck } from "lucide-react"

const testimonials = [
  {
    quote: "Studio244 transformó nuestra gestión territorial en una estrategia digital blindada. Su capacidad técnica en seguridad es inigualable.",
    author: "MARCOS G.",
    role: "Gabinete de Comunicación Política",
    color: "#5d239a", // Púrpura
  },
  {
    quote: "La app de fidelización que desarrollaron aumentó nuestras ventas recurrentes en un 40%. No son una agencia, son partners tecnológicos.",
    author: "SANTIAGO R.",
    role: "CEO - Cadena Gastronómica",
    impact: "",
    color: "#fe35ea", // Rosa
  },
  {
    quote: "Tener el estudio de grabación y los desarrolladores en un mismo lugar agilizó nuestra producción de contenidos de forma drástica.",
    author: "VALERIA M.",
    role: "Directora Institucional",
    impact: "",
    color: "#fdcd12", // Amarillo
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-[#f4f4f4] border-t-2 border-black overflow-hidden font-sans text-black">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              VOCES DE <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>RESULTADOS.</span>
            </h2>
          </motion.div>
          
          
        </div>

        {/* Grilla de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black shadow-[15px_15px_0px_#121212]">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 bg-white border-r-2 last:border-r-0 border-black group hover:bg-black transition-all duration-500"
            >
              {/* Icono de Cita Dinámico */}
              <div className="mb-12 flex justify-between items-start">
                <Quote 
                  className="w-10 h-10 transition-colors" 
                  style={{ color: t.color }} 
                />
                <span className="text-[10px] font-black px-2 py-1 bg-slate-100 group-hover:bg-white group-hover:text-black transition-colors uppercase tracking-widest">
                  {t.impact}
                </span>
              </div>

              {/* Texto del Testimonio */}
              <blockquote className="text-xl font-bold leading-tight mb-12 group-hover:text-white transition-colors italic uppercase tracking-tight">
                "{t.quote}"
              </blockquote>

              {/* Autor y Detalles */}
              <div className="border-t border-black/10 pt-8 group-hover:border-white/20 transition-colors">
                <p className="text-xs font-black tracking-widest mb-1 group-hover:text-[#fdcd12] transition-colors">
                  {t.author}
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {t.role}
                </p>
              </div>

              {/* Elemento Decorativo: Estrellas de Verificación */}
              <div className="absolute bottom-6 right-8 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                {[...Array(4)].map((_, i) => (
                  <Star key={i++} className="w-3 h-3 fill-current text-[#fdcd12]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón de Acción Call-to-Action */}
        
      </div>
    </section>
  )
}