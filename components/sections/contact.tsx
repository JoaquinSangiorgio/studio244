"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Terminal, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showFloat, setShowFloat] = React.useState(false)

  // Mostrar botón flotante después de un poco de scroll
  React.useEffect(() => {
    const handleScroll = () => setShowFloat(window.scrollY > 500)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    const target = e.target as HTMLFormElement
    target.reset()
  }

  // URL de WhatsApp (Personalizable)
  const whatsappUrl = "https://wa.me/tu-numero-aqui"

  return (
    <section id="contact" className="relative py-32 bg-[#1e1e1e] text-[#e8e7e7] overflow-hidden border-t-8 border-[#ff3131]">
      {/* Botón Flotante de WhatsApp - Estilo Rojo Radical */}
      <AnimatePresence>
        {showFloat && (
          <motion.a
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] flex h-16 w-16 items-center justify-center bg-[#32D14F] text-white shadow-[4px_4px_0px_#000] transition-transform hover:scale-110 active:scale-95 border-2 border-black"
          >
            <MessageCircle className="h-8 w-8" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Decoración de fondo técnica */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#ff3131] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                ASEGURA TU <br /> 
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #ff3131" }}>PRÓXIMO</span> <br />
                PASO.
              </h2>
            </div>
            
            <div className="space-y-6 pt-4">
              <div className="border-l-4 border-[#ff3131] pl-6 py-2">
                <p className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">
                  Enlace de comunicación directa
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#32D14F] text-white px-8 py-4 font-black uppercase tracking-tighter transition-all hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_#ff3131] active:translate-y-1 shadow-[4px_4px_0px_#000] border-2 border-black"
                >
                  <MessageCircle className="h-6 w-6" />
                  Contactar vía WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Esquinas tácticas Rojas */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#ff3131]" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff3131]" />

            <div className="bg-[#e8e7e7] p-8 md:p-12 text-[#1e1e1e] shadow-[15px_15px_0px_#ff3131] border-2 border-[#1e1e1e]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest">Responsable</Label>
                    <Input
                      id="name"
                      placeholder="NOMBRE COMPLETO"
                      required
                      className="rounded-none border-b-2 border-t-0 border-x-0 border-black focus-visible:ring-0 px-0 placeholder:text-slate-400 font-bold bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sector" className="text-[10px] font-black uppercase tracking-widest">Sector</Label>
                    <Input
                      id="sector"
                      placeholder="POLÍTICO - COMERCIAL"
                      required
                      className="rounded-none border-b-2 border-t-0 border-x-0 border-black focus-visible:ring-0 px-0 placeholder:text-slate-400 font-bold bg-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="TU@EMAIL.COM"
                    required
                    className="rounded-none border-b-2 border-t-0 border-x-0 border-black focus-visible:ring-0 px-0 placeholder:text-slate-400 font-bold bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest">Detalle del Requerimiento</Label>
                  <Textarea
                    id="message"
                    placeholder="DESCRIBE EL DESAFÍO O LA GESTIÓN ACTUAL..."
                    required
                    rows={4}
                    className="rounded-none border-2 border-black focus-visible:ring-0 placeholder:text-slate-400 font-bold p-4 bg-white/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 bg-[#1e1e1e] text-white hover:bg-[#ff3131] rounded-none text-xs font-black uppercase tracking-[0.3em] transition-all group relative overflow-hidden shadow-[6px_6px_0px_rgba(255,49,49,0.2)]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? "SINCRO_PROCESO..." : "INICIAR PROTOCOLO"}
                    {!isSubmitting && <Send className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />}
                  </span>
                  <div className="absolute inset-0 bg-[#ff3131] translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}