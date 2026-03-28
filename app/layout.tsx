import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lahcen Grissi | Full Stack Developer',
  description: 'Full Stack Developer from Algeria specializing in React, Next.js, Node.js, and Distributed Systems. Building modern web applications with clean, scalable code.',
  keywords: ['Lahcen Grissi', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Algeria', 'USTHB', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Lahcen Grissi', url: 'https://github.com/VRMX2' }],
  creator: 'Lahcen Grissi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Lahcen Grissi | Full Stack Developer',
    description: 'Full Stack Developer from Algeria. Building elegant, performant web experiences.',
    siteName: 'Lahcen Grissi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lahcen Grissi | Full Stack Developer',
    description: 'Full Stack Developer from Algeria. Building elegant, performant web experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#050b14] text-white`}>
        {children}
      </body>
    </html>
  )
}
