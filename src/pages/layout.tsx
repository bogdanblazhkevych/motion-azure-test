import type { Metadata, Viewport } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'


const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({weight: ["400", "500", "600", "700"],  subsets: ['latin'], variable: '--opensans'})

// export const metadata: Metadata = {
//   title: 'Motion!',
//   description: 'Cool Startup',
// }
// export const viewport: Viewport = {
//   themeColor:[
//     { media: "(prefers-color-scheme: dark)", color: "#000000" },
//     { media: "(prefers-color-scheme: light)", color: "#FFF" }
//   ]
// }
{/* <meta name="theme-color" content="rgb(245,245,245)" media="(prefers-color-scheme: light)"> */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Navbar />
      <body className={openSans.className}>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
