import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "فني صيانة وتركيب التكييفات - المدينة المنورة | خدمة 24 ساعة",
  description:
    "أفضل خدمات صيانة وإصلاح المكيفات في المدينة المنورة - خدمة 24 ساعة - فنيين مختصين - أسعار مناسبة - ضمان شامل",
  keywords: "صيانة مكيفات المدينة المنورة, تكييف, فريون, سبليت, شباك, تكييف مركزي, فني مكيفات, إصلاح مكيفات",
  authors: [{ name: "فني صيانة وتركيب التكييفات - المدينة المنورة" }],
  creator: "فني صيانة وتركيب التكييفات",
  publisher: "فني صيانة وتركيب التكييفات",
  robots: "index, follow",
  openGraph: {
    title: "فني صيانة وتركيب التكييفات - المدينة المنورة | خدمة 24 ساعة",
    description: "أفضل خدمات صيانة وإصلاح المكيفات في المدينة المنورة - خدمة 24 ساعة - فنيين مختصين",
    type: "website",
    locale: "ar_SA",
    siteName: "فني صيانة وتركيب التكييفات - المدينة المنورة",
    url: "https://almostafa-aircondeitioner.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "فني صيانة وتركيب التكييفات - المدينة المنورة",
    description: "أفضل خدمات صيانة وإصلاح المكيفات في المدينة المنورة - خدمة 24 ساعة",
  },
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e3a8a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "فني صيانة وتركيب التكييفات",
              description: "خدمات صيانة وإصلاح المكيفات في المدينة المنورة",
              address: {
                "@type": "PostalAddress",
                addressLocality: "المدينة المنورة",
                addressCountry: "SA",
              },
              telephone: "+966564267351",
              url: "https://almostafa-aircondeitioner.com",
              openingHours: "Mo-Su 00:00-23:59",
              serviceArea: {
                "@type": "City",
                name: "المدينة المنورة",
              },
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "50",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
