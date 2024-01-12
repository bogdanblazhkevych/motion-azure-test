import type { Metadata, Viewport } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'


const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({weight: ["400", "500", "600", "700"],  subsets: ['latin'], variable: '--opensans'})

export const metadata: Metadata = {
  metadataBase: new URL('https://motion-ise.com'),
  title: 'MOTION!',
  description: 'Building something special shaping the future of automation to unleash the next wave of innovation and productivity.',
  creator: "Motion Platform",
  publisher: "Azure", 
  keywords: [
    "motion",
    "MOTION",
    "MOTION!",
    "motion!",
    "MOTION-ISE",
    "MOTION-ISE!",
    "motion-ise",
    "motion platform",
    "motion startup ecosystems",
    "motion global partner",
    "innovation platform",
    "ecosystem platform", 
    "startup accelerator",
    "product development platform",
    "business acceleration platform",
    "innovation ecosystem",
    "global innovation network",
    "automation platform",
    "ai platform",
    "cloud automation",
    "innovation tools",
    "product launch platform",
    "centralized business platform",
    "collaboration platform",
    "innovative technologies",
    "future technologies",
    "cutting edge technologies",
    "developer community",
    "builder community",
    "entrepreneur network",  
    "scale business globally",
    "accelerate expansion",
    "speed time to market",
    "reduce time to deployment",
    "accelerate innovation",
    "accelerate product development",
    "accelerate prototyping",
    "accelerate validation",
    "idea to prototype",
    "data analytics",
    "performance analytics",
    "ecosystem analytics", 
    "global partnerships",
    "early access programs",
    "talent acquisition"
  ],
  openGraph: {
    type: "website",
    url: "https://motion-ise.com",
    title: "MOTION!",
    description: "Building something special shaping the future of automation to unleash the next wave of innovation and productivity.",
    siteName: "Motion"
  }
  // themeColor: '#CACACA',
}
export const viewport: Viewport = {
  themeColor:[
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" }
  ],
  colorScheme: "dark"
}
{/* <meta name="theme-color" content="rgb(245,245,245)" media="(prefers-color-scheme: light)"> */}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
