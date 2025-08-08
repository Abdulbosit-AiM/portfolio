import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Abdulbosit Melikuziev - Product Manager & AI Specialist',
  description: 'Product Manager and AI Specialist with expertise in data analysis, digital transformation, and user-centric technology solutions.',
  keywords: 'product manager, AI specialist, data analysis, digital transformation, fintech, edtech',
  authors: [{ name: 'Abdulbosit Melikuziev' }],
  openGraph: {
    title: 'Abdulbosit Melikuziev - Product Manager & AI Specialist',
    description: 'Product Manager and AI Specialist with expertise in data analysis, digital transformation, and user-centric technology solutions.',
    url: 'https://abdulbosit-portfolio.vercel.app',
    siteName: 'Abdulbosit Melikuziev Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdulbosit Melikuziev - Product Manager & AI Specialist',
    description: 'Product Manager and AI Specialist with expertise in data analysis, digital transformation, and user-centric technology solutions.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen">
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            },
          }}
        />
      </body>
    </html>
  )
}