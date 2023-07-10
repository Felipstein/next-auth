import { Footer } from '@/components/containers/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Auth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-zinc-900 flex flex-col`}>
        <div className='flex-1 flex flex-col'>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
