"use client"

import { motion } from "framer-motion"
import { Quote, Star, ShieldCheck, ArrowUpRight } from "lucide-react"

const testimonials = [
  {
    id: "01",
    quote: "Studio244 transformó nuestra gestión territorial en una estrategia digital blindada. Su capacidad técnica es inigualable.",
    author: "MARCOS G.",
    role: "Gabinete de Comunicación Política",
    impact: "SEGURIDAD 100%",
    color: "#5d239a",
  },
  {
    id: "02",
    quote: "La app de fidelización aumentó nuestras ventas recurrentes en un 40%. No son una agencia, son partners de ingeniería.",
    author: "SANTIAGO R.",
    role: "CEO - Cadena Gastronómica",
    impact: "+40% ROI",
    color: "#fe35ea",
  },
  {
    id: "03",
    quote: "Tener el estudio de grabación y los desarrolladores en un mismo lugar agilizó nuestra producción de forma drástica.",
    author: "VALERIA M.",
    role: "Directora Institucional",
    impact: "MEDIA-READY",
    color: "#fdcd12",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-white text-black overflow-hidden relative border-t-2 border-black">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* ENCABEZADO: Dossier de Validación */}
        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em]">
              Social Proof / Casos
            </span>
            <h2 className="mt-8 text-6xl md:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter">
              VOCES DE <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>RESULTADOS.</span>
            </h2>
          </motion.div>
          
          <div className="lg:col-span-6 flex flex-col justify-end h-full py-4">
             <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-l-4 border-black pl-6">
                <ShieldCheck className="w-6 h-6" />
                <span>Casos Verificados y Auditoría de Impacto 2026</span>
             </div>
          </div>
        </div>

        {/* GRILLA DE TESTIMONIOS: Estilo Bloque Sólido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-black border-2 border-black shadow-[15px_15px_0px_#f0f0f0]">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white hover:bg-slate-50 transition-all group flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <Quote 
                    className="w-12 h-12 transition-transform group-hover:rotate-12 group-hover:scale-110" 
                    style={{ color: t.color }} 
                  />
                  <div className="text-[10px] font-black bg-black text-white px-2 py-1 tracking-widest uppercase">
                    {t.impact}
                  </div>
                </div>

                <blockquote className="text-2xl font-black uppercase tracking-tighter leading-tight italic mb-12">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="border-t-2 border-black pt-8">
                <p className="text-sm font-black uppercase tracking-widest group-hover:text-[#5d239a] transition-colors">
                  {t.author}
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {t.role}
                </p>
                
                <div className="flex gap-1 mt-6 opacity-20 group-hover:opacity-100 transition-opacity">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-3 h-3 fill-current text-[#fdcd12]" />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ACCIÓN FINAL */}
        <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] group">
              Explorar métricas de éxito 
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </button>
        </div>
      </div>

      {/* Marca de agua lateral */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block opacity-[0.02] select-none pointer-events-none">
        <span className="text-[250px] font-black uppercase rotate-90 inline-block tracking-tighter">
          TRUSTED
        </span>
      </div>
    </section>
  )
}