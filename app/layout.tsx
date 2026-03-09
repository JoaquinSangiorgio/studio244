import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Studio244 | Consultora Tecnológica y de Medios 360°',
  description: 'Transformamos Gestión en Impacto Digital. Comunicación, Programación Segura y Producción de Medios para llevar tu proyecto al siguiente nivel.',
  generator: 'Studio244',
  keywords: ['consultora tecnológica', 'medios digitales', 'desarrollo de software', 'ciberseguridad', 'producción audiovisual'],
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
