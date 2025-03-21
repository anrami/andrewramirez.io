import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import ThemeSwitch from './components/theme-switch'
import dynamic from 'next/dynamic'

const CursorEffect = dynamic(() => import('./components/cursor-effect'), {
  ssr: false
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Andrew Ramirez\'s Portfolio',
    template: '%s | Andrew Ramirez\'s Portfolio',
  },
  description: 'Andrew\'s Personal website.',
  openGraph: {
    title: 'andrewramirez.io',
    description: 'All about Andrew Ramirez.',
    url: baseUrl,
    siteName: 'andrewramirez.io',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-6xl mx-auto overflow-y-auto transition-colors duration-300">
        <div className="fixed top-5 right-5 z-50">
          <ThemeSwitch />
        </div>
        <main className="flex-auto min-w-0 flex flex-col px-4 md:px-6 lg:px-8">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <CursorEffect />
      </body>
    </html>
  )
}
