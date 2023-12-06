import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import ThirdPage from './homepagesections/thirdpage/thirdpage'
import FourthPage from './homepagesections/fourthpage/fourthpage'
import FifthPage from './homepagesections/fifthpage/fifthpage'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'

export default function Home() {

  return (
    <html lang="en">
      <body>
        <Navbar />

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
    
  )
}
