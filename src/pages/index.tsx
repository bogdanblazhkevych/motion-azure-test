import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import ThirdPage from './homepagesections/thirdpage/thirdpage'
import FourthPage from './homepagesections/fourthpage/fourthpage'
import FifthPage from './homepagesections/fifthpage/fifthpage'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import { Inter, Open_Sans } from 'next/font/google'

const openSans = Open_Sans({weight: ["400", "500", "600", "700"],  subsets: ['latin'], variable: '--opensans'})

export default function Home() {


  return (
    <>
      {/* <Navbar />
      <body className={styles.openSans}>
        <footer>
          <Footer />
        </footer>
      </body> */}

      <main className={styles.openSans}>
        retard
      </main>
    </>
    
  )
}
