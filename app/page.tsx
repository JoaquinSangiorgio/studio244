import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Niches } from "@/components/sections/niches"
import { Services } from "@/components/sections/services"
import {Testimonials} from "@/components/sections/desarrolloTrabajo"

import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="niches">
        <Niches />
      </section>
      <section id="services">
        <Services />
      </section>
      
      <section id="about">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
