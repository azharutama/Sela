import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sela Coffee Bar — Coffee, slowly made',
    template: '%s | Sela Coffee Bar',
  },
  description: 'Small-batch coffee, bright plates, and good things in between at Sela Coffee Bar.',
  keywords: ['coffee shop Jakarta', 'coffee bar Kemang', 'specialty coffee', 'Sela Coffee Bar'],
  authors: [{ name: 'Sela Coffee Bar' }],
  creator: 'Sela Coffee Bar',
  publisher: 'Sela Coffee Bar',
  category: 'restaurant',
  openGraph: {
    title: 'Sela Coffee Bar — Coffee, slowly made',
    description: 'Small-batch coffee, bright plates, and good things in between at Sela Coffee Bar.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Sela Coffee Bar',
  },
  twitter: {
    card: 'summary',
    title: 'Sela Coffee Bar — Coffee, slowly made',
    description: 'Small-batch coffee, bright plates, and good things in between at Sela Coffee Bar.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'Sela Coffee Bar',
    description: 'Small-batch coffee, bright plates, and good things in between at Sela Coffee Bar.',
    image: '/favicon.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Kemang Raya No. 18',
      addressLocality: 'Jakarta Selatan',
      postalCode: '12730',
      addressCountry: 'ID',
    },
    openingHours: 'Mo-Su 07:00-22:00',
    servesCuisine: ['Coffee', 'Breakfast', 'Desserts'],
    priceRange: '$$',
  }

  return (
    <html lang="id">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
