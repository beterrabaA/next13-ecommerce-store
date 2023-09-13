import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'

import ModalProvider from '@/providers/ModalProvider'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'A store built with Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
