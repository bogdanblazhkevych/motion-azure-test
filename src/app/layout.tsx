import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({weight: ["400", "700"],  subsets: ['latin'], variable: '--opensans'})

export const metadata: Metadata = {
  title: 'Moiton',
  description: 'Cool Startup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
