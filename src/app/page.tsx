import FirstPage from './homepagesections/firstpage/firstpage'
import styles from './page.module.css'
import Slider from './components/slider/page'
import SecondPage from './homepagesections/secondpage/secondpage'
import ThirdPage from './homepagesections/thirdpage/thirdpage'
import FourthPage from './homepagesections/fourthpage/fourthpage'
import FifthPage from './homepagesections/fifthpage/fifthpage'
import SixthPage from './homepagesections/sixthpage/sixthpage'
import SeventhPage from './homepagesections/seventhpage/seventhpage'

export default function Home() {

  return (
    <main>
      <FirstPage />
      <SixthPage />
      {/* <FourthPage /> */}
      <FifthPage />
      <Slider />
      <ThirdPage />
      <SeventhPage />
      <SecondPage />
    </main>
  )
}
